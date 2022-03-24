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
    color: white; 
   
`

export const DivCrieViagem = styled.div`
    display: flex;
    margin-bottom: 10px;
    color: #9E9E9E;

`

export const InputName = styled.div`
    display: flex;
    margin-bottom: 5px;
    height: 25px;
    width: 25px;
    align-items: center;
    margin-right: 200px;
    margin-bottom: 20px;
   
`

export const InputPlanet = styled.div`
    display: flex;
    margin-bottom: 5px;
    height: 25px;
    width: 25px;
    align-items: center;
    margin-right: 200px;
    margin-bottom: 20px;
`


export const InputDescricao = styled.div`
    display: flex;
    margin-bottom: 5px;
    width: 25px;
    align-items: center;
    margin-right: 200px;
    margin-bottom: 20px;
   
`

export const InputDuracao = styled.div`
    display: flex;
    margin-bottom: 5px;
    height: 25px;
    width: 25px;
    align-items: center;
    margin-right: 200px;
    margin-bottom: 20px;
`

export const InputData = styled.div`
    display: flex;
    margin-bottom: 5px;
    height: 25px;
    width: 25px;
    align-items: center;
    margin-right: 200px;
    margin-bottom: 20px;
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