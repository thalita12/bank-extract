import React from 'react';
import { Container } from "@material-ui/core";
import './index.css';

const Header = () => {
    return (
        <header className="header">
            <Container>
                <h2 className="title">Extrato</h2>
            </Container>
        </header>
    )
};

export default Header;