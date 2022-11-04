import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
        getGifs(category)
            .then(x => setImages(x));
            setisLoading(false);
    }, []);

    return {
        images: images,
        isLoading: isLoading
    }
}
