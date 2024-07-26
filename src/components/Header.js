import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <h1>Anonime</h1>

            <a href="#home">Home</a>
            <a href="#list-anime">List anime</a>
            <input type="text" placeholder="Search anime or movie" />

        </header>
    );
};

export default Header;
