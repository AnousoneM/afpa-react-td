import { useState } from 'react';
import logo from '../logo.svg';
import './Home.css';


function Home() {

    const [animation, setAnimation] = useState(true)
    const toggleAnimation = () => {
        setAnimation(animation => !animation)
    }

    return (
        <div className="container">
            <img src={logo} className={`logo ${animation && "rotate"}`} alt="logo" />
            <h1>TP ReactJS Développeur Web et Web Mobile</h1>
            <p>Nov 2023</p>
            <button
                className="App-button"
                onClick={toggleAnimation}>
                Modifier l’animation
                </button>
        </div>
    )
}

export default Home
