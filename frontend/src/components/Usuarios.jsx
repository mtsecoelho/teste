import React, { Component } from 'react';
import axios from '../AxiosConfig';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

class Usuarios extends Component {
  constructor(props) {
    super(props)

    this.state = {
      usuarios: []
    }
  }
  componentDidMount() {
    axios.get('users').then(r => {
      this.setState({usuarios: r.data})
    }).catch(e => {
      alert(e.errors.join("\n"))
    })
  }

  edit = usuario => {
    this.props.history.push({
      pathname: '/usuario',
      usuario
    })
  }

  remove = usuario => {
    axios.delete(`users/${usuario.id}`).then(() => {
      this.setState({
        usuarios: this.state.usuarios.filter(e => e.id !== usuario.id)
      })

      alert("Usuário removido!")
    }).catch(e => {
      alert(e.errors.join("\n"))
    })
  }

  render() {
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Usuário</th>
              <th>E-mail</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.usuarios.map(e => {
                return <tr key={e.id}>
                  <td>{e.name}</td>
                  <td>{e.username}</td>
                  <td>{e.email}</td>
                  <td>
                    <ButtonGroup>
                      <Button onClick={() => this.edit(e)}>Edita</Button>
                      <Button variant="danger" onClick={() => this.remove(e)}>Remove</Button>
                    </ButtonGroup>
                  </td>
                </tr>
              })
            }
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Usuarios;
