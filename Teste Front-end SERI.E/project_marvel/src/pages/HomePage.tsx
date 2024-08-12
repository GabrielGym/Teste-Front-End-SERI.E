import React, { useState } from 'react'
import { SearchForm } from '../components/SearchForm'
import { DashboardStyles } from '../styles/Dashboard'
import ImgHeroi from '../assets/icones/heroi/noun_Superhero_2227044.png'
import HeroFilterFav from '../assets/toggle/Group 2@1,5x.png'
import HeroFilterAZ from '../assets/toggle/Group 6.png'
import EmptyHeart from '../assets/icones/heart/Path Copy 2.png'
import FullHeart from '../assets/icones/heart/Path Copy 7@1,5x.png'

export const HomePage = () => {
    const [filterHero, setFilterHero] = useState(true);

    const FilterHeros = () => {
        setFilterHero(!filterHero);
    };


    return (
        <main>
            <SearchForm />
            <DashboardStyles>
                <h2>Encontrados { } heróis</h2>

                <div>
                    <div>
                        <span><img src={ImgHeroi} alt="Heróis" /></span>
                        <h3>Ordenar por nome - A/Z</h3>
                    </div>

                    <button onClick={() => FilterHeros()}><img src={filterHero ? HeroFilterAZ : HeroFilterFav} alt="Filtro" /></button>

                    <div>
                        <span><img src={filterHero ? EmptyHeart : FullHeart} alt="Heróis" /></span>
                        <h3>Somente favoritos</h3>
                    </div>
                </div>
            </DashboardStyles>


        </main>
    )
}