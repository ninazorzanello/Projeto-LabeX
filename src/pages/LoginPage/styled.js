import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

 export const MainLogin = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    padding-bottom: 10%;
    font-size: 20px;
    text-align: justify;
    line-height: 2em;
    justify-items: center;
    align-items: center;
    background-color: black;
    color: #9E9E9E;
  
 
 `

export const Botoes = styled.button`
        border-radius: 20px black;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
        width: 100px;
        border-radius: 5px;
        margin-top: 30px;
        color: #424242;
        font-family: Arial, sans-serif;
       
        
`
export const InputEmail = styled.div`
    display: flex;
    margin-bottom: 5px;
    height: 25px;
    width: 25px;
    align-items: center;
    margin-right: 200px;

`

export const InputSenha = styled.div`
    display: flex;
    margin-bottom: 5px;
    height: 25px;
    width: 25px;
    align-items: center;
    margin-right: 200px;

`

export const Titulo = styled.div`
     margin-top: 100px;
     margin-right: 50px;
     margin-bottom: 30px;
     align-items: center;
     font-family: Arial, sans-serif;
     font-size: 50px;
      
`