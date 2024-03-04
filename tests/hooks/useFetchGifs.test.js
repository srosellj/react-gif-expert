import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifts } from "../../src/hooks/useFetchGifts"

describe('Pruebas en el hook de useFetchGifs', () => {
    test('debe de regresar el estado inicial', () => {
        const { result } = renderHook(() => useFetchGifts('One Punch'));
        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    })

    test('debe de retornar un arreglo de imagenes y isLoading en false', async () => {
        const { result } = renderHook(() => useFetchGifts('One Punch'));

        // Hay que esperar a que el hook haga us trabajo de cargar imágenes => waitFor
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
        );


        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    })
})