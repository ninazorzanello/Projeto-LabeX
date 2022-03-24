import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import { Footer } from "../../components/Footer";
import {Container, MainPage, Botoes} from './styled';


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

export const TripDetailsPage = () => {
  const routes = useNavigate()

  const goToAdminHomePage = () => {
    routes("/adminhomepage")
  }


  useProtectedPage();

  const [trip, setTrip] = useState({});
  const [candidates, setCandidates] = useState([{}]);
  const [approved, setApproved] = useState([{}]);

  const {id} = useParams();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/carina/trip/${id}`,
        {
          headers: {
            auth: token
          }
        }
      )
      .then((response) => {
        setTrip(response.data.trip);
        setCandidates(response.data.trip.candidates);
        setApproved(response.data.trip.approved)
      })
      .catch((error) => {
        console.log("Deu erro: ", error.response);
      });
  }, []);

  const putDecideCandidate = (candidateId, aprovado) => {
    const token = localStorage.getItem("token");
    const body = {
      "approve": aprovado
    }
    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/carina/trips/${trip.id}/candidates/${candidateId}/decide`,
        body,
        {
          headers: {
            auth: token
          }
        },
       
      )
      .then((response) => {        
       alert(`Candidato ${ aprovado ? "Aprovado" : "Reprovado"} com Sucesso!`) 
        window.location.reload();
      })
      .catch((error) => {
        console.log("Deu erro: ", error.response);
      });
  };

  const candidateList = candidates.map((list) => {
    return  <div>
                <li>
                    <div>
                        {list.name}
                        <button onClick={()=> putDecideCandidate(list.id, true)}>Aprovar</button>
                        <button  onClick={()=> putDecideCandidate(list.id, false)}>Reprovar</button>
                    </div>
                </li>
            </div>
  });

  const approvedList = approved.map((list) => {
    return  <div>
                <li>
                    <div>
                        {list.name}                    
                    </div>
                </li>
            </div>
  });

  return (
          <Container>
             <MainPage>
              <h1>Detalhes de cada Viagem!</h1>
                        <div>
                            {trip.name}
                            {trip.description}
                            {trip.planet}
                            {trip.durationInDays}
                            {trip.date}
                          
                        </div>

              <Botoes onClick={() => goToAdminHomePage()}>Voltar</Botoes>

                  <div>
                      <h1>Candidatos Pendentes</h1>
                      <ul>
                        {candidateList}
                      </ul>
                    
                  </div>
                  
                  <div>
                      <h1>Candidatos Aprovados</h1>
                      <ul>
                        {approvedList}
                      </ul>
                  </div>
                  </MainPage>
                  <Footer />
          </Container>
  );
}