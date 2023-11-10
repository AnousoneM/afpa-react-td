import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import './List.css';

import Film from '../film/Film';
import { getFilmsWithText } from '../../TMDBApi';

function List() {

    const [films, setFilms] = useState([])

    const search = useParams()  // récupère les paramètres de la route

    useEffect(() => {
        // Assurez-vous que search.data est défini avant de l'utiliser
        if (search.data) {
            getFilmsWithText(search.data, 1)
                .then((data) => {
                    console.log(data.results);
                    setFilms(data.results);
                });
        }
    }, [search.data]); // Ajoutez search.data comme dépendance pour éviter boucle infinie


    return (
        <div className="container">
            <h1>Liste des films</h1>
            <p>Films recherchés : <b>{search.data}</b></p>  {/* data correspond au paramètre de la route */}
            {films.map((film) => {
                return (
                    <Film key={film.id} poster={film.poster_path} abstract={film.overview} />
                )
            }
            )}
            <Link to="/search" className="nav-item">Retour</Link>
        </div>
    );
}

export default List;
