import styled from 'styled-components'

export const Container = styled.div`
  font-family: Arial;
  max-width: 100%;
  width: 100%;
  padding: 20px;
  background: #C7FFB0;
  border: 2px solid #60CF0F;
  border-radius: 0px;
  display: inline-flex;
  flex-direction: table;
  justify-content: center;
  align-items: center;

  input {
    margin-bottom: 10px;
  }

  table td {
    display: flex;
    flex-direction: table;
    padding-bottom: 1px;
    margin-left: 100px;
    margin-bottom: 10px;
  }
  table tr {
    border: 10px solid #60CF0F;
    border-radius: 0px;
    background-color: #C7FFB0;
    padding-bottom: 20px;
    display: grid;
    grid-template-columns: 10fr 10fr 10fr;
    gap: 25px;
  }

  table th {
    border: initial #60CF0F;
    border-radius: 0px;
    padding-top: 10px;
  }
  p {
    text-align: center;
    border: solid #60CF0F;
    margin-left: center 50px;
    margin-bottom: 10px;
    font-family: Arial;
  }

`
export const Button = styled.button`
  background-color: #60CF0F;
  color: #FFFF;
  border-color: green;

  height: 30px;
  width: 100px;
  border: px;
  border-radius: 0px;
`
export const Form = styled.form`
  font-family: Arial;
  width: 50%;
  max-width: 50%;
  height: 20%;
  margin: 30px auto 0;
  padding: 20px;
  background: #6D966A;
  border: 10px solid #A4D2A0;
  border-radius: 0px;
  display: inline-block;
  flex-direction: grid;
  input {
    margin-bottom: 10px;
  }
`
