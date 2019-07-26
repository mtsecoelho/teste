import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap';
import Login from './Login';
import Usuario from './Usuario';
import Usuarios from './Usuarios';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import axios from '../AxiosConfig'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            usuarioLogado: ""
        }
    }

    setUserLogged = usuarioLogado => {
        if (!usuarioLogado) axios.defaults.headers.common['Authorization'] = ''

        this.setState({usuarioLogado})
    }
    
    render() {
        return (
            <BrowserRouter>
                {
                this.state.usuarioLogado ?
                <div>
                    <Navbar className="justify-content-between bg-light" expand="lg">
                        <LinkContainer to="/">
                            <Navbar.Brand>ARCE</Navbar.Brand>
                        </LinkContainer>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <NavDropdown title="Usuários" id="basic-nav-dropdown">
                                    <LinkContainer to="/usuario">
                                        <NavDropdown.Item eventKey={1}>Cadastrar Usuário</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/usuarios">
                                        <NavDropdown.Item eventKey={2}>Listar Usuários</NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                        <div>
                            <Link to='/logout' onClick={() => this.setUserLogged('')}>{`logout de ${this.state.usuarioLogado}`} </Link>
                        </div>
                    </Navbar>

                    <div className="container-fluid mt-2">
                        <Switch>
                            <Route path="/login" exact={true} component={Login} />
                            <Route path="/usuario" exact={true} component={Usuario} />
                            <Route path="/usuarios" exact={true} component={Usuarios} />
                        </Switch>
                    </div>
                </div>
                :
                <Login callBack={this.setUserLogged}></Login>
                }
            </BrowserRouter>
        )
    }
}

export default Home;