import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {Footer} from '../../components/Footer';
import {Container, MainPage, Botoes, DivListaViagens} from './styled';

  const useProtectedPage = () => {
  const routes = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token === null) {
      console.log("Não está logado!!!");
      routes.push("/adminhomepage");
    }
  }, []);
};

  export const AdminHomePage = () => {
  const routes = useNavigate()

  const goToCreateTrip = () => {
    routes("/createtrippage")
  }

  const goToTripDetails = (id) => {
    routes(`/tripdetailspage/${id}`)
  }

  const goToHome = () => {
    routes("/")
  }

  const [trip, setTrip] = useState([{}]);

  useProtectedPage();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/carina/trips"
      
      )
      .then((response) => {
         setTrip(response.data.trips);
      })
      .catch((error) => {
        console.log("Deu erro: ", error.response);
      });
  }, []);

  const confirmdeleteCandidate = (id) => {
    const confirmado = window.confirm("Registro será excluido, tem certeza que deseja excluir?");
    if(confirmado === true){
      deleteCandidate(id)
    }
    
  }

  const deleteCandidate = (id) => {
    const token = localStorage.getItem("token");
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/carina/trips/${id}`,
      
        {
          headers: {
            auth: token
          } 
        }
       
      )
      .then((response) => {        
       alert("Viagem excluida com sucesso!") 
        window.location.reload();
      })
      .catch((error) => {
        console.log("Deu erro: ", error.response);
      });
  };


  const tripList = trip.map((list) => {
      return  <div>
                  <li>
                      <div>
                          <button onClick={()=>goToTripDetails(list.id)}>{list.name}</button>
                          <button onClick={() => confirmdeleteCandidate(list.id)}>Deletar</button>                        
                      </div>
                  </li>
              </div>
});

  return (
        <Container>
          <MainPage>
              <DivListaViagens>
                  <h1>Lista de Viagens!</h1>
              </DivListaViagens>
                    <div>

                          <ul>

                            {tripList}
                            
                          </ul>

                    </div>

                  <Botoes onClick={() => goToCreateTrip()}>Criar Viagem</Botoes>
                  <Botoes>Logout</Botoes>
                  <Botoes onClick={() => goToHome()}>Voltar</Botoes>

          
            </MainPage>
            <Footer />

        </Container>
    
  );
}