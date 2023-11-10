import { useNavigate } from 'react-router';
import './Search.css';

function Search() {

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        const form = e.target
        const formData = new FormData(form)
        navigate(`/List/${formData.get('search')}`)  
    }

    return (
        <div className="search">
            <h1>Recherche de films</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor="idSearch">Saisissez le nom du film</label>
                    <input id="idSearch" name="search" type="text" placeholder='ex. Titanic'/>
                </fieldset>
                <input className="button" type="submit" value="Rechercher" />
            </form>
        </div>
    );
}
export default Search;
