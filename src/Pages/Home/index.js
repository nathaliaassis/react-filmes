import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        function loadFilms() {
            let url = 'https://sujeitoprogramador.com/r-api/?api=filmes';

            fetch(url).then((res) => {
                res.json().then((json) => {
                    setFilmes(json);
                })
            });
        }
        loadFilms();
    }, [])

    return (
        <>
            {filmes.map((filme) => {
                return (
                    <article key={filme.id} className='card'>
                        <span className='nome'>{filme.nome}</span>
                        <img src={filme.foto} className='img' alt='imagem do filme' />

                        <Link to={`/filme/${filme.id}`} className='btn btn-card'>saber mais</Link>
                    </article>
                );
            })}
        </>
    )
}