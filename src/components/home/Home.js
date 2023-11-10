import logo from '../logo.svg';
import './Home.css';


const Home = () => {
    return (
        <div className="container">
            <img src={logo} className="logo" alt="logo" />
            <h1>TP React Développeur Web et Web Mobile</h1>
        </div>
    )
}

export default Home
