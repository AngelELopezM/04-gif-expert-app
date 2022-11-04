import { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);

    const onAddCategory = (value) => {

        if (categories.includes(value)) return;

        setCategories(cat => [value, ...cat]);
    };

    return (
        <>
            <h1>GefExpertApp</h1>

            <AddCategory
                // setCategories ={ setCategories }
                onNewcategory={value => onAddCategory(value)}
            />

            {
                categories.map(x => {
                    return <GifGrid key={x} category={x} />
                })
            }
        </>
    )
}
