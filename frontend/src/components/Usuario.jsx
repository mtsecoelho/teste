import React, { Component } from 'react';
import axios from '../AxiosConfig';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

const INITIAL_USER = {name: "", username: "", email: "", password: "", password_confirmation: ""}

class Usuario extends Component {
  constructor(props) {
    super(props)

    this.state = props.location.usuario ? {...this.props.location.usuario, password: "", password_confirmation: ""} : INITIAL_USER
  }

  save = e => {
    e.preventDefault()

    this.state.id ? this.update() : this.create()
  }

  update = () => {
    if (window.confirm("Confirma atualizar usuário?")) {
      axios.put(`users/${this.state.id}`, this.state).then(r => {
        alert("Sucesso!")

        this.setState({
          ...INITIAL_USER}
        )
      }).catch(e => {
        alert(e.errors.join("\n"))
      })
    }
  }

  create = () => {
    if (window.confirm("Confirma adicionar usuário?")) {
      axios.post('users', this.state).then(r => {
        alert("Sucesso!")

        this.setState({
          ...INITIAL_USER}
        )
      }).catch(e => {
        alert(e.errors.join("\n"))
      })
    }
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.save} >
          <Form.Row>
            <Col xs="6" lg="6" md="6" sm="6">
              <Form.Group>
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Nome" value={this.state.name} onChange={e => this.setState({name: e.target.value})} />
              </Form.Group>
            </Col>
            <Col xs="6" lg="6" md="6" sm="6">
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" value={this.state.email} onChange={e => this.setState({email: e.target.value})} />
              </Form.Group>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col xs="4" lg="4" md="4" sm="4">
              <Form.Group>
                <Form.Label>Usuário</Form.Label>
                <Form.Control type="text" placeholder="Usuário" value={this.state.username} onChange={e => this.setState({username: e.target.value})} />
              </Form.Group>
            </Col>
            <Col xs="4" lg="4" md="4" sm="4">
              <Form.Group>
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Senha" value={this.state.password} onChange={e => this.setState({password: e.target.value})} />
              </Form.Group>
            </Col>
            <Col xs="4" lg="4" md="4" sm="4">
              <Form.Group>
                <Form.Label>Confirmação de Senha</Form.Label>
                <Form.Control type="password" placeholder="Senha" value={this.state.password_confirmation} onChange={e => this.setState({password_confirmation: e.target.value})} />
              </Form.Group>
            </Col>
          </Form.Row>

          <Button variant="primary" type="submit">Salva</Button>
        </Form>
      </div>
    );
  }
}

export default Usuario;
