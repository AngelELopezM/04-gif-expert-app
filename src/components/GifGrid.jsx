import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            <div className='card-grid'>
                {
                    
                    images.map(image => (
                        <GifGridItem
                            key={image.id}
                            //Aqui lo que hacemos es que utilizamos el spread
                            //para esparcir todas las propiedades de ese objeto
                            //y hace poder utilizar cualquiera en el componenten sin 
                            //tenes que enviarla explicitamente
                            {...image}
                        />
                    ))
                }

            </div>
        </>
    )
}
