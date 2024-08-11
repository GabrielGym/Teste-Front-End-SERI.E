import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Lupa from '../../../project_marvel/src/assets/busca/Lupa/Shape@3x.png';

type FormType = {
    searchTerm: string;
};

export const SearchForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormType>();

    const onSubmit: SubmitHandler<FormType> = (data) => {
        console.log(data.searchTerm);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
                <button type="submit"><img src={Lupa} alt="Pesquisar" /></button>
                <input
                    {...register('searchTerm', { required: true })}
                    placeholder="Procure por heróis"
                />
                {errors.searchTerm && <span>Escreva o nome de um Heróis</span>}
            </form>
    )
}