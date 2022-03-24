import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`


export const MainPage = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    padding-top: 10%;
    padding-bottom: 15%;
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

            :hover{
                background-color: #E0F2F1;
                transition: 0.5s;
                opacity: 0.7;
            }
       
        
`

export const DivDaLista = styled.div`
    display: flex;
    list-style: none;
    width: 100%;
    flex-direction: column-reverse;

`

export const DivList = styled.div`
    display: flex;
    list-style: none;
    line-break: 24px;
    justify-items: 10px;
    width: 100%;
    flex-direction: column;
    margin-right: 50px;
    justify-content: space-between;
    margin-top: 50px;

`

export const StyloLista = styled.div`
        box-shadow:0px 2px 2px 0px;
        background-color: transparent;
        border-radius: 5px;
        margin-right: 50px;
`