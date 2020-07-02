import React from 'react';
import {
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
            <Navbar color="secondary" dark expand="md">
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