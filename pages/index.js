import React from 'react';
import Head from 'next/head';
import {
    Container,
    Jumbotron,
    Button,
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function HomePage() {

    return (
        <div>
            <Head>
                <title>Home - André Luiz</title>
                <meta name="description" content="Site de estudo React" />
                <meta name="author" content="André Luiz Gomes Pereira" />
            </Head>
            <Navbar color="secondary" dark expand="md" className="fixed-top">
                <Container>
                    <NavbarBrand href="/">André Luiz</NavbarBrand>
                    <Collapse navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Portifolio</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/AndreLuizGomesPereira">GitHub - André Luiz</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
            <Jumbotron fluid className="descr-top">
                <style>{`.descr-top{
        background-color: #000;
        color: #fff;
        padding-top: 150px;
        padding-bottom: 100px;
        margin-bottom: 0rem !important;
    }`}</style>
                <Container className="text-center">
                    <h1 className="display-4 mb-4">Temos a solução que a sua empresa precisa!</h1>
                    <p className="lead mb-4">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                    <p className="lead">
                        <Button outline color="warning" size="lg">Entre em contato</Button>
                    </p>
                </Container>
            </Jumbotron>
            <Jumbotron>
                <Container>

                </Container>
            </Jumbotron>
        </div>
    )
}

export default HomePage