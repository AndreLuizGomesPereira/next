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
            <Jumbotron fluid className="servicos">
                <style>{`.servicos{
    background-color: #fff;
    padding-top: 80px;
    padding-bottom: 80px;
    margin-bottom: 0rem !important;
}`}</style>
                <Container className="text-center">
                    <div>
                        <h2 className="display-4">Serviços</h2>
                        <p className="lead pb-4">Melhores serviços que sua empresa pode receber.</p>
                    </div>
                    <div class="row">
                        <div class="col-lg-4">
                            <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                            <h2 className="mt-4 mb-4">Heading</h2>
                            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                        </div>
                        <div class="col-lg-4">
                            <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                            <h2 className="mt-4 mb-4">Heading</h2>
                            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
                        </div>
                        <div class="col-lg-4">
                            <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
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