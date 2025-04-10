import { useLocalStorage } from "../../services/localStorage"
import {Link} from 'react-router';

export const PokemonAddCollection = (
    {
        Pokecod,
        name,
        url,
        imgSprite
    }
)=>{
    const [pokeCollection, saveToPokeCollection] = useLocalStorage("mycollection", []);
    const isPokeMonInCollection = pokeCollection?.find(
        (pokemonItem)=>{
            return pokemonItem.code === Pokecod;
        }
    );

    const onClickHandler = (e)=>{
        const newPokeItem = {
            code: Pokecod,
            name: name,
            url:`https://pokeapi.co/api/v2/pokemon/${Pokecod}/`,
        }
        saveToPokeCollection([...pokeCollection, newPokeItem]);
    }

    if (isPokeMonInCollection){
        return (
            <>
                <Link to="/my-collection">View in Collection</Link>
            </>
        )
    } else {
        return (
            <>
                <button onClick={onClickHandler}>Add to Collection</button>
            </>
        )
    }

}