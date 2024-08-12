import { useState, useEffect, SetStateAction, Dispatch } from 'react';
import api from '../services/ApiMarvel';
import EmptyHeart from '../assets/icones/heart/Path Copy 2.png'
import { ContainerHerosStyle } from '../styles/ContainerHeros'
import FullHeart from '../assets/icones/heart/Path Copy 7@1,5x.png'
import { useNavigate } from 'react-router-dom';

export interface ComicItem {
    resourceURI: string;
    name: string;
}

export interface Hero {
    id: number;
    name: string;
    description: string;
    comics: {
        available: number;
        items: ComicItem[];
    };
    thumbnail: {
        path: string;
        extension: string;
    };
}

interface ListHerosProps {
    filterHero: boolean;
    setHero: Dispatch<SetStateAction<Hero[]>>;
    heros: Hero[];
}

export const ListHeros = ({ filterHero, setHero, heros }: ListHerosProps) => {
    const [herosFav, setHerosFav] = useState<Hero[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchHeros = async () => {
            try {
                const response = await api.get('', {
                    params: {
                        limit: 20,
                    },
                });
                setHero(response.data.data.results);
                setLoading(false);
            } catch (err) {
                setError('Erro ao carregar personagens.');
                setLoading(false);
            }
        };

        fetchHeros();
    }, []);

    const toggleFavorite = (hero: Hero) => {
        if (herosFav.some(favHero => favHero.id === hero.id)) {
            setHerosFav(herosFav.filter(favHero => favHero.id !== hero.id));
        } else {
            if (herosFav.length < 5) {
                setHerosFav([...herosFav, hero]);
            } else {
                alert('Você só pode adicionar até 5 heróis favoritos.');
            }
        }
    };

    if (loading) {
        return <div style={{ color: 'var(--color-gray1)', fontSize: '2rem', textAlign: 'center', padding: '46px 0px'}}>Carregando Heróis tenha paciência!!</div>;
    }

    return (
        <ContainerHerosStyle>
            {filterHero ? heros.map((hero) => (
                <li key={hero.id}>
                    <img
                        src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                        alt={hero.name}
                        onClick={() => {
                            const encodedHeroName = encodeURIComponent(hero.name);
                            navigate(`/HeroPage/${encodedHeroName}`);
                        }}
                    />
                    <div>
                        <h2>{hero.name}</h2>
                        <button onClick={() => toggleFavorite(hero)}>
                            <img 
                                src={herosFav.some(favHero => favHero.id === hero.id) ? FullHeart : EmptyHeart} 
                                alt="Heróis" 
                            />
                        </button>
                    </div>
                </li>
            )) : herosFav.map((hero) => (
                <li key={hero.id}>
                    <img
                        src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                        alt={hero.name}
                    />
                    <div>
                        <h2>{hero.name}</h2>
                        <button onClick={() => toggleFavorite(hero)}>
                            <img 
                                src={herosFav.some(favHero => favHero.id === hero.id) ? FullHeart : EmptyHeart} 
                                alt="Heróis" 
                            />
                        </button>
                    </div>
                </li>
            ))}
            
        </ContainerHerosStyle>
    );
};