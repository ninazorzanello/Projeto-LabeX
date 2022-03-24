import React from "react";
import { useNavigate} from "react-router-dom";
import {Container, MainHome, Botoes, Header} from './styled';
import {Footer} from '../../components/Footer';
import {LottieAnima} from '../../components/Animacao/anima'; 


export const HomePage = () => {

  const routes = useNavigate()

  const goToListPage = () => {
    routes("/listtrippages")
  }

  const goToLoginPage = () => {
    routes("/loginpage")
  }

  return (
      
          <Container>
                <Header>
                    <p>AstroTrip - Viagens Intergaláticas!</p>
  
                      <Botoes onClick={() => goToListPage()}>Ver Viagens</Botoes>
                      <Botoes  onClick={() => goToLoginPage()}>Área Admin</Botoes>
                </Header>

                    <MainHome>
                      <h1>Embarque conosco nesta viagem!</h1>
                    </MainHome>

                      <Footer />
          </Container>
               
  );
}