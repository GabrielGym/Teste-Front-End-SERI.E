import Logo from '../assets/logo/group.png'
import Lupa from '../assets/busca/lupa/shape.png'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type FormType = {
    searchTerm: string;
};

export const HeaderHeroPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormType>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormType> = async (data) => {
        navigate(`/HeroPage/${data.searchTerm}`)
    };
    return (
        <header>
            <img src={Logo} alt="Logo Marvel" />
            <form onSubmit={handleSubmit(onSubmit)}>
                <button type="submit"><img src={Lupa} alt="Pesquisar" /></button>
                <input
                    {...register('searchTerm', { required: true })}
                    placeholder="Procure por heróis"
                />
                {errors.searchTerm && <span>Escreva o nome de um Heróis</span>}
            </form>

            <button onClick={() => navigate('/')}>Página inicial</button>
        </header>
    )
}