import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Hero } from "../components/ListHeros";
import api from "../services/ApiMarvel";
import EmptyHeart from '../assets/icones/heart/Path Copy 2.png';
import FullHeart from '../assets/icones/heart/Path Copy 7@1,5x.png';
import Livro from '../assets/icones/book/Group.png';
import Filme from '../assets/icones/video/Shape.png';
import Estrelas from '../assets/review/Path.png';
import { HeaderHeroPage } from '../components/HeaderHeroPage';
import { FooterStyles } from "../styles/Footer";
import { HeroPageStyles } from '../styles/HeroPage'

interface Comic {
    id: number;
    title: string;
    thumbnail: {
        path: string;
        extension: string;
    };
}

export const HeroPage = () => {
    const [hero, setHero] = useState<Hero | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [heroFav, setHeroFav] = useState(false);
    const [comics, setComics] = useState<Comic[]>([]);
    const { heroName } = useParams();

    useEffect(() => {
        const fetchHero = async () => {
            try {
                const response = await api.get('', {
                    params: {
                        name: heroName,
                    },
                });

                const foundHero = response.data.data.results[0];
                if (foundHero) {
                    setHero(foundHero);
                    const comicPromises = foundHero.comics.items.map((comicItem: { resourceURI: string }) =>
                        api.get(comicItem.resourceURI.replace('http://', 'https://'))
                    );

                    const comicResponses = await Promise.all(comicPromises);
                    const comicData = comicResponses.map(res => res.data.data.results[0]);
                    setComics(comicData);
                } else {
                    alert('Herói não encontrado');
                }
            } catch (err) {
                setError('Erro ao carregar personagem.');
            } finally {
                setLoading(false);
            }
        };

        fetchHero();
    }, [heroName]);

    if (loading) {
        return <div style={{ color: 'var(--color-gray1)', fontSize: '2rem', textAlign: 'center', padding: '46px 0px' }}>Carregando Herói, tenha paciência!!</div>;
    }

    if (!hero) {
        return <div style={{ color: 'var(--color-gray1)', fontSize: '2rem', textAlign: 'center', padding: '46px 0px' }}>Herói não encontrado.</div>;
    }

    const toggleFavorite = () => {
        setHeroFav(!heroFav);
    };

    return (
        <HeroPageStyles>
            <HeaderHeroPage />
            <div>
                <div>
                    <div>
                        <h1>{hero.name}</h1>
                        <span onClick={toggleFavorite}>
                            <img src={heroFav ? FullHeart : EmptyHeart} alt="Favoritar" />
                        </span>
                    </div>
                    <p>{hero.description || "Descrição não disponível."}</p>
                    <div>
                        <div>
                            <h3>Quadrinhos</h3>
                            <span><img src={Livro} alt="Livro" /> <h3>{hero.comics.available}</h3></span>
                        </div>
                        <div>
                            <h3>Filmes</h3>
                            <span><img src={Filme} alt="Filmes" /> <h3></h3></span>
                        </div>
                    </div>
                    <div className="containerAssessment">
                        <h3>Rating:</h3>
                        <img src={Estrelas} alt="Avaliação" />
                    </div>
                </div>
                <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt={`Imagem de ${hero.name}`} />
            </div>
            <div className="containerComics">
                <h1>Últimos lançamentos</h1>
                <ul>
                    {comics.map((comic, index) => (
                        <li key={index}>
                            <span><img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={`Capa do quadrinho ${comic.title}`} /></span>
                            <h2>{comic.title}</h2>
                        </li>
                    ))}
                </ul>
            </div>
            <FooterStyles />
        </HeroPageStyles>
    );
};
