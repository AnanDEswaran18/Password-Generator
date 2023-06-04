import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Password Generator!</h1>
            <Link className="center-link" to="/insert-data">
                <button className="get-started-btn">Get Started</button>
            </Link>
        </div>
    );
};

export default Home;
