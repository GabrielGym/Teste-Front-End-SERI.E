import React from 'react'
import { SearchForm } from '../components/SearchForm'
import ImgHeroi from '../assets/icones/heroi/noun_Superhero_2227044.png'
import HeroFilterFav from '../assets/toggle/Group 2@1,5x.png'
// import HeroFilterAZ from '../assets/toggle/Group 6.png'

export const HomePage = () => {

    return (
        <main>
            <SearchForm />
            <div className='dashboard'>
                <h2>Encontrados { } heróis</h2>

                <div>
                    <span><img src={ImgHeroi} alt="Heróis" /></span>
                    <h3>Ordenar por nome - A/Z</h3>
                </div>

                <button><img src={HeroFilterFav} alt="" /></button>

                <div>
                    <span><img src={ImgHeroi} alt="Heróis" /></span>
                    <h3>Somente favoritos</h3>
                </div>
            </div>


        </main>
    )
}