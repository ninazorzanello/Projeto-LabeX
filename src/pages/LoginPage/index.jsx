import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import {Footer} from '../../components/Footer';
import {Container, MainLogin, Botoes, InputEmail, InputSenha, Titulo} from './styled';

export const LoginPage = () => {
  const routes = useNavigate()

  const goToHome = () => {
    routes("/")
  }

  const goToAdminHomePage = () => {
    routes("/adminhomepage")
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitLogin = () => {
    console.log(email, password);
    const body = {
      email: email,
      password: password
    };

    axios
    .post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/carina/login",
      body
    )
    .then((response) => {
      console.log("Deu certo: ", response.data.token);
      localStorage.setItem("token", response.data.token);
      goToAdminHomePage();
    })
    .catch((error) => {
      console.log("Deu errado: ", error.response);
    });
};

  return (
    <Container>
     

     <MainLogin>

        <Titulo>Faça seu Login</Titulo>

        <InputEmail>
        <p>Email </p>
          <input 
          placeholder="email"
          required
          type="email"
          value={email}
          onChange={onChangeEmail}
        
        />

      </InputEmail>

      <InputSenha>
        <p>Senha </p>
        <input 
          placeholder="password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
          pattern={"^.{6,}"}
          tittle={"Sua senha deve ter no mínimo 6 caractéres"}
        />
      </InputSenha>

       <Botoes onClick={onSubmitLogin}>Enviar</Botoes>

        <Botoes onClick={() => goToHome()}>Voltar</Botoes>

        </MainLogin>
        <Footer />
     
    </Container>
    
  
  );
}