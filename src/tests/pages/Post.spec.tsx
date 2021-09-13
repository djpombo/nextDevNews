import { render, screen } from '@testing-library/react';
import { mocked } from 'ts-jest/utils'
import Post, { getStaticProps } from '../../pages/posts/[slug]';
import { getPrismicClient } from '../../services/prismic'


const post =
{
    slug: 'my-new-post',
    title: 'title for new post',
    content: '<p>post content</p>',
    updateAt: '25 de dezembro de 2021'
};


jest.mock('../../services/prismic');

jest.mock('next/router', () => {
    return {
        useRouter() {
            return {
                isFallback: false,
            }
        }
    }
});


describe('Post page', () => {
    it('renders correctly', () => {
        const { getByText } = render(<Post post={post} />);

        expect(getByText('title for new post')).toBeInTheDocument();


    })

    it('load inital data', async () => {
        const getPrismicClientMocked = mocked(getPrismicClient);

        getPrismicClientMocked.mockReturnValueOnce({
            getByUID: jest.fn().mockResolvedValueOnce({

                data: {
                    title: [
                        { type: 'heading', text: 'title for new post' },
                    ],
                    content: [
                        { type: 'paragraph', text: '<p>post content</p>' },
                    ]
                },
                last_publication_date: '12-25-2021',

            })
        } as any)

        const response = await getStaticProps({
            params: {slug: 'my-new-post' },
        });

        expect(response).toEqual(
            expect.objectContaining({
                props: {
                    post: {
                            slug: 'my-new-post',
                            title: 'title for new post',
                            content: '<p>post content</p>',
                            updateAt: '25 de dezembro de 2021',
                        },
                    
                    
                },
                "revalidate": 43200
            })
        )
    })
})