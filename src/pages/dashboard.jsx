import { useState } from 'react';
import { useNavigate } from 'react-router';

import { PokemonList } from '../components/Pokemon/PokemonList';

import { usePokemonList } from '../services/pockemonapi';
import { Paging } from '../components/Paging/Paging';

export const DashboardPage = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const pokemons = usePokemonList(page - 1, limit);
    const navigateTo = useNavigate();

    const viewPokemonDetail = (code)=>{
        const url = `details/${code}`;
        navigateTo(url);
    }
    return (
        <section>
            <PokemonList
                pokemonList={pokemons.results}
                clickHandler={viewPokemonDetail}
            />
            <Paging
                totalElements={pokemons.count}
                limit={limit}
                page={page}
                onPageChange={setPage}
                onLimitChange={setLimit}
            />
        </section>
    );
}

