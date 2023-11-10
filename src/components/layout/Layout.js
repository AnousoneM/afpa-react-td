import './Layout.css';

import { Link, Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div>
            {/* navbar */}
            <nav>
                <ul className="nav">
                    <li>
                        <Link to="/" className="nav-item">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/search" className="nav-item">Recherche</Link>
                    </li>
                    <li>
                        <Link to="/about" className="nav-item">A Propos</Link>
                    </li>
                </ul>
            </nav>
            <hr />
            {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
            <Outlet />
        </div>
    );
}

export default Layout;