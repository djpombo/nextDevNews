import { render, screen } from '@testing-library/react';
import { mocked } from 'ts-jest/utils'
import Posts, { getStaticProps } from '../../pages/posts';
import { getPrismicClient } from '../../services/prismic'


const posts = [
    {
        slug: 'my-new-post',
        title: 'title for new post',
        excerpt: 'post exerpt',
        updateAt: '25 de dezembro de 20211'
    },
];

jest.mock('../../services/prismic');

describe('Posts page', () => {
    it('renders correctly', () => {
        const { getByText, getByAltText } = render(<Posts posts={posts} />);

        expect(getByText('title for new post')).toBeInTheDocument();


    })

    it('load inital data', async () => {
        const getPrismicClientMocked = mocked(getPrismicClient);

        getPrismicClientMocked.mockReturnValueOnce({
            query: jest.fn().mockResolvedValueOnce({
                results: [{
                    uid: 'my-new-post',
                    data: {
                        title: [
                            { type: 'heading', text: 'My New Post' },
                        ],
                        content: [
                            { type: 'paragraph', text: 'post exerpt' },
                        ]
                    },
                    last_publication_date: '12-25-2021',
                }]
            })
        } as any)

        const response = await getStaticProps({});

        expect(response).toEqual(
            expect.objectContaining({
                props: {
                    posts: [
                        {
                            slug: 'my-new-post',
                            title: 'My New Post',
                            excerpt: 'post exerpt',
                            updateAt: '25 de dezembro de 2021',
                        },
                    ]
                },
                
            })
        )
    })
})