import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifts } from "../../src/hooks/useFetchGifts"

jest.mock('../../src/hooks/useFetchGifts');

describe('Pruebas en <GifGrid />', () => {

    const category = 'One Punch'

    test('Debe de mostrar el loading inicialmente', () => {
        useFetchGifts.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category} />)

        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));

    })

    test('debe de mostrar items cuando se cargan las imágenes useFetchGifs', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            }
        ];

        useFetchGifts.mockReturnValue({
            images: gifs,
            isLoading: true
        })

        render(<GifGrid category={category} />)
        expect(screen.getAllByRole('img').length).toBe(2)

    })
})