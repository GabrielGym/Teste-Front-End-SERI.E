import React, { Dispatch, SetStateAction } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { SearchFormStyles } from '../styles/SearchForm';
import Lupa from '../../../project_marvel/src/assets/busca/Lupa/Shape@3x.png';
import { useState, useEffect } from 'react';
import api from '../services/ApiMarvel';
import { Hero } from './ListHeros';

type FormType = {
    searchTerm: string;
};

interface SetSearchHeroProps {
    setHero: Dispatch<SetStateAction<Hero[]>>;
    heros: Hero[];
}

export const SearchForm = ({ setHero, heros }: SetSearchHeroProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormType>();
    const [error, setError] = useState<string | null>(null);

    const onSubmit: SubmitHandler<FormType> = async (data) => {
        try {
            const response = await api.get('', {
                params: {
                    name: data.searchTerm,
                },
            });

            const foundHero = response.data.data.results;
            if (foundHero.length > 0) {
                setHero([foundHero[0]]);
            } else {
                alert('Herói não encontrado');
            }
        } catch (err) {
            setError('Erro ao carregar personagem.');
        }
    };

    return (
        <SearchFormStyles onSubmit={handleSubmit(onSubmit)}>
            <button type="submit"><img src={Lupa} alt="Pesquisar" /></button>
            <input
                {...register('searchTerm', { required: true })}
                placeholder="Procure por heróis"
            />
            {errors.searchTerm && <span>Escreva o nome de um Heróis</span>}
        </SearchFormStyles>
    )
}