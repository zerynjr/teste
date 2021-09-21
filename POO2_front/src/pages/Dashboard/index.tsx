import React from 'react'
import { useState, useEffect, FormEvent } from 'react'
import { Container, Button, Form } from './styles'

import api from '../../services/api'

interface Cadastro {
  id: string
  cliente: string
  telefone: string
  email: string
}

const Dashboard: React.FC = () => {
  const [clientes, setClientes] = useState<Cadastro[]>([] as Cadastro[])

  const [id, setId] = useState('')
  const [cliente, setCliente] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  
  async function loadData() {
    const dados = await api.get(`/clients`).then((response: { data: any }) => response.data)
    setClientes(dados)
  }

  useEffect(() => {
    loadData()
  }, [])

  async function handleAddClientes(event: FormEvent) {
    event.preventDefault()

    const dado = {
      cliente: cliente,
      telefone: telefone,
      email: email
    }
    //alteração
    if(id) {
      await api.put(`/clients/${id}`, dado)
      alert('Modificação Realizada!')
    } 
    //criação
    else {
      await api.post(`/clients`, dado) 
      alert('Cadastramento Realizado!')
    }

    setCliente('')
    setTelefone('')
    setEmail('')
    setId('')
    loadData()
  }
  //exclusão
  async function handleDelete(id: string) {
    await api.delete(`clients/${id}`)
    alert('Exclusão Realizada!')
    loadData()
  }

  function handleEdit(id: string) {
    async function loadData(){
      const dados = await api.get(`/clients/${id}`).then(response => response.data)
      if (dados){
          setId(dados.id)
          setCliente(dados.cliente)
          setTelefone(dados.telefone)
          setEmail(dados.email)
        }
      else {
          setClientes([])
          
      }
          
    }
    loadData()
  }

  return (
    <Container>
      <Form onSubmit={handleAddClientes}>
        <input type='text' name='cliente' value={cliente} onChange={(e) => setCliente(e.target.value)} placeholder='Nome' />
        
        <input type='text' name='telefone' value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder='Telefone' />

        <input type='text' name='email' value={email} onChange={(e) => setEmail(e.target.value)}placeholder='E-mail' />

        <Button type="submit">Registrar</Button>
      </Form>

      <table>
          <thead>
            <div>
              <p>Cadastro de Usuários</p>
            </div>
            <tr>
              <th>Nome</th>
              <th>Telefone</th>
              <th>E-mail</th>
            </tr>
          </thead>
          <tbody>
          {clientes.map((cli: Cadastro) => (
            <tr key={cli.id}>
              <td>{cli.cliente}</td>
              <td>{cli.telefone}</td>
              <td>{cli.email}</td>
              <td>
                <Button type="button" onClick={() => handleDelete(cli.id)}>Apagar</Button>
                <Button type="button" onClick={() => handleEdit(cli.id)}>Modificar</Button>
              </td>
            </tr>
          ))}

          </tbody>
      </table>

    </Container>

  )
}

export default Dashboard
