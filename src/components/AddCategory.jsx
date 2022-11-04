import { useState } from 'react';

export const AddCategory = ({ onNewcategory }) => {

    const [inputValue, setInputValue] = useState("");

    const onInputChange = ({ target }) => {
        setInputValue(x => target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;

        onNewcategory( inputValue.trim() );
        setInputValue(x=> '');
    }

    return (
        <>
            <form onSubmit={event => onSubmit(event)}>
                <input
                    type="text"
                    placeholder="Buscar Gifs"
                    value={inputValue}
                    //Aqui lo que hacemos es que enviamos el evento
                    //del imput por referencia y es igual al codigo
                    //Que tenemos justo abajo
                    onChange={onInputChange}
                // onChange={ event => onInputChange(event) }
                />
            </form>
        </>
    )
}
