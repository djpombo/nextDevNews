import { render, screen } from '@testing-library/react';
import Home from '../../pages';

jest.mock('next/router', () => {
    return {
        useRouter() {
            return {
                asPath: '/',
            }
        }
    }
});

describe('Home page', ()=>{
    it('renders correctly', ()=>{
        const {getByText, getByAltText, debug} = render(<Home />);

        //debug();

        expect(getByText('Olá Dev')).toBeInTheDocument();
        expect(getByAltText('home image')).toBeInTheDocument();

    })
})