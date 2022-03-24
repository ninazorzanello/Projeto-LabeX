import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Footer } from "../../components/Footer";
import {Container, MainPage, Botoes, DivDaLista, DivList, StyloLista} from './styled';


export const ListTripPages = () => {
  const routes = useNavigate()

  const goToHome = () => {
    routes("/")
  }
  
  const goToApplicationForm = () => {
    routes("/applicationformpage")
  }

  const [trips, setTrips] = useState([{}]);

  const getListTrip = () => {
    axios
      .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/carina/trips")
      .then((response) => {
         setTrips(response.data.trips);
      })
      .catch((error) => {
        console.log("Deu erro: ", error.response);
      });
  }

  useEffect(() => {
    getListTrip();
  }, []);
 
  const listTrips = trips.map((list) => {
    return  <div>
                <DivList>
                    <StyloLista>                      
                        <p>Nome: {list.name}</p>
                        <p>Descrição: {list.description}</p>
                        <p>Planeta: {list.planet}</p>
                        <p>Duração: {list.durationInDays}</p>
                        <p>Data: {list.date}</p>
                    </StyloLista>
                </DivList>
            </div>
  });

  return (

    <Container>

       <MainPage>

        <h1>Confira a Lista de Viagens!</h1>

          <DivDaLista>
              <ul>
                {listTrips}
              </ul>
          </DivDaLista>

        <Botoes onClick={() => goToHome()}>Voltar</Botoes>
        <Botoes onClick={() => goToApplicationForm()}>Inscrever-se</Botoes>

        </MainPage>

        <Footer />

    </Container>
  );
}