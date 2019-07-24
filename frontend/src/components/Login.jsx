import React, {Component} from 'react';
import axios from '../AxiosConfig'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Login extends Component {
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
      this.props.callBack(r.data.username)
    }).catch(e => {
      alert('Usuário ou senha inválido')
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <Card className="my-5">
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
                
                <div className="text-center">
                  <Button variant="primary" type="submit">Login</Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    )
  }
}

export default Login;
