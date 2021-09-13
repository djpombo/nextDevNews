import { render } from '@testing-library/react';
import Cursos from '../../pages/cursos/cursos';

describe('render correctly', () => {
    it('text currectly', () => {
        const { getByText } = render(<Cursos />);
      
        expect(getByText('curos ministrados')).toBeInTheDocument();
    });
})