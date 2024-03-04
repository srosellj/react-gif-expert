import { render, screen } from "@testing-library/react"
import { GiftItem } from "../../src/components/GiftItem"

describe('Testeo de <GiftItem />', () => {

    const title = 'Saitama'
    const url = 'https://urlcualquera.com/saitama.jpg'

    test('Match del snapshot', () => {

        const { container } = render(<GiftItem title={title} url={url} />)

        expect(container).toMatchSnapshot();

    })

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GiftItem title={title} url={url} />)
        // screen.debug()
        // expect(screen.getByRole('img').src).toBe(url)
        // expect(screen.getByRole('img').alt).toBe(title)
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);


    })

    test('Debe de mostrar el título en el componente', () => {
        render(<GiftItem title={title} url={url} />)
        expect(screen.getByText(title)).toBeTruthy();

    })
})