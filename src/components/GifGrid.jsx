import { GiftItem } from "./GiftItem"
import { useFetchGifts } from "../hooks/useFetchGifts"

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifts(category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }

            <div className="card-gift">
                {
                    images.map((image) =>
                    (<GiftItem
                        key={image.id}
                        {...image}
                    />)
                    )
                }
            </div>
        </>
    )
}
