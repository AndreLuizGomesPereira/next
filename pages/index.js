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
            <Navbar color="secondary" dark expand="md">
                <Container>
                    <NavbarBrand href="/">André Luiz</NavbarBrand>
                    <Collapse navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/">Componentes</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/AndreLuizGomesPereira">GitHub - André Luiz</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
            <Jumbotron>
                <h1 className="display-3">Hello, world!</h1>
                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-2" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <Button color="primary">Learn More</Button>
                </p>
            </Jumbotron>
        </div>
    )
}

export default HomePage