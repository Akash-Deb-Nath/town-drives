import React, { useContext } from 'react';
import { Link} from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBiking } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid mt-3">
                    <h1 className="navbar-brand mx-5" style={{fontWeight: 'bold', color: 'orange'}}><FontAwesomeIcon icon={faBiking} />Town Drives</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto mx-5">
                            <li className="nav-item">
                                <Link className="nav-link nav-text text-end text-md-left nav-style" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-text text-end text-md-left nav-style" to="/destination/:name">Destination</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-text text-end text-md-left nav-style" to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-text text-end text-md-left nav-style" to="/contact">Contact</Link>
                            </li>
                            <li>
                                {
                                    !loggedInUser.isSignedIn ? <Link to="/login"><button className="btn btn-warning">Login</button></Link> : <p style={{ color: 'cyan',marginTop: '8px', fontWeight: 'bold' }}>{loggedInUser.email}</p>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;