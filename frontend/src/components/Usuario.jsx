import React, { Component } from 'react';
import axios from '../AxiosConfig';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
    axios.put(`users/${this.state.id}`, this.state).then(r => {
      console.log(r)
    }).catch(e => {
      console.log(e)
    })
  }

  create = () => {
    axios.post('users', this.state).then(r => {
      console.log(r)
    }).catch(e => {
      console.log(e)
    })
  }

  render() {
    return (
      <div>
        <Button variant="info" className="m-3" onClick={() => this.props.history.push("/usuarios")}>Lista de Usuários</Button>
      
        <Form onSubmit={this.save} >
          <Form.Group>
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="Nome" value={this.state.name} onChange={e => this.setState({name: e.target.value})} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Usuário</Form.Label>
            <Form.Control type="text" placeholder="Usuário" value={this.state.username} onChange={e => this.setState({username: e.target.value})} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" value={this.state.email} onChange={e => this.setState({email: e.target.value})} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={e => this.setState({password: e.target.value})} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Confirmação de Senha</Form.Label>
            <Form.Control type="password" placeholder="Password" value={this.state.password_confirmation} onChange={e => this.setState({password_confirmation: e.target.value})} />
          </Form.Group>

          <Button variant="primary" type="submit">Salva</Button>
        </Form>
      </div>
    );
  }
}

export default Usuario;
