import React, {Component} from 'react';
import axios from '../AxiosConfig'
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email:"",
      password: ""
    }
  }

  submit = (e) => {
    e.preventDefault()

    axios.post('/auth/login', this.state).then(r => {
      axios.defaults.headers.common['Authorization'] = r.data.token;

      this.props.history.push('/usuarios')
    }).catch(e => {
      alert('Usuário ou senha inválido')
    })
  }

  render() {
    return (
      <div className="App">
        <Card>
          <Card.Header>
            Login
          </Card.Header>
          <Card.Body>
            <Form onSubmit={this.submit}>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" value={this.state.email} onChange={e => this.setState({email: e.target.value})} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Senha" value={this.state.password} onChange={e => this.setState({password: e.target.value})} />
              </Form.Group>
              
              <Button variant="primary" type="submit">Login</Button>
              <Link to='/usuario'>Não cadastrado? cadastre-se</Link>
            </Form>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default App;
