import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Filme(props) {

    const [selectedFilm, setSelectedFilm] = useState([]);

    useEffect(() => {

        const { id } = props.match.params
        let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`;

        fetch(url).then((res) => res.json()).then((json) => {
            setSelectedFilm(json);
            console.log(json);
        });
    }, [props.match.params])

    return (



        <div class='card'>
            <h2>{selectedFilm.nome}</h2>

            <img src={selectedFilm.foto} alt='foto do filme' className='img img-filme' />
            <article>
                <h3>Sinopse</h3>
                <p>
                    {selectedFilm.sinopse}
                </p>
            </article>
            <Link to='/' className='btn btn-voltar'>Voltar</Link>

        </div>

    )
}