import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #433232;
    color: #9E9E9E;
    font-family: Arial, sans-serif;
    font-size: 1.5em;
   

`


export const MainHome = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    padding-top: 10%;
    padding-bottom: 15%;
    font-size: 20px;
    text-align: justify;
    line-height: 2em;
    justify-items: center;
    align-items: center;
    background-color: black;
    color: white;
    
   
`

export const Botoes = styled.button`
        border-radius: 20px black;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
        width: 100px;
        border-radius: 5px;
        margin-top: 10px;
        color: #424242;
        font-family: Arial, sans-serif;
        

    :hover{
        background-color: #E0F2F1;
        transition: 0.5s;
        opacity: 0.7;

      }

        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
        width: 100px;
        height: 40px;
        border-radius: 5px;
        margin-right: 5px;

`