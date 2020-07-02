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
import { library } from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas)


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
            <Jumbotron fluid className="servicos">
                <style>{`.servicos{
    background-color: #fff;
    padding-top: 80px;
    padding-bottom: 80px;
    margin-bottom: 0rem !important;
}.circulo{
    width: 140px;
    height: 140px;
    background-color: #fed136;
    font-size: 52px;
    padding-top: 24px;
    color: #fff;
}.centralizar{
    margin: 0 auto !important;
    float: none !important;
}`}</style>
                <Container className="text-center">
                    <div>
                        <h2 className="display-4">Serviços</h2>
                        <p className="lead pb-4">Melhores serviços que sua empresa pode receber.</p>
                    </div>
                    <div class="row">
                        <div class="col-lg-4">
                            <div className="rounded-circle circulo centralizar">
                                <p>AL</p>
                            </div>
                            <h2 className="mt-4 mb-4">Heading</h2>
                            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                        </div>
                        <div class="col-lg-4">
                            <div className="rounded-circle circulo centralizar">
                                <p>EG</p>
                            </div>
                            <h2 className="mt-4 mb-4">Heading</h2>
                            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
                        </div>
                        <div class="col-lg-4">
                            <div className="rounded-circle circulo centralizar">
                                <p>H&S</p>
                            </div>
                            <h2 className="mt-4 mb-4">Heading</h2>
                            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                        </div>
                    </div>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default HomePage