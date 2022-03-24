import React, { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";
import useForm from "../../Hooks/useForm";
import axios from 'axios';
import {Container, MainPage, DivInputs, InputName, InputIdade, InputPais, InputProfissao, InputTexto, DivEscolhaViagem, Botoes} from './styled';
import { Footer } from "../../components/Footer";

export const ApplicationFormPage = () => {
  const routes = useNavigate()

  const goToListPage = () => {
    routes("/listtrippages")
  }

  const [trip, setTrip] = useState([{}]);

  const { form, onChange, cleanFields } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
    idViagem: "",
  });

  const cadastrar = (event) => {
    event.preventDefault();
    applyToTrip();
    cleanFields();
  };

  const applyToTrip = () => {
    const body = {
        "name": form.name,
        "age": form.age,
        "applicationText": form.applicationText,
        "profession": form.profession,
        "country": form.country,
    }
    axios
      .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/carina/trips/${form.idViagem}/apply`, body)
      .then((response) => {        
       alert(`Cadastro efetuado com sucesso!`) 
        // window.location.reload();
      })
      .catch((error) => {
        console.log("Deu erro: ", error.response);
      });
  };

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
    
  const getTripsMap = trip.map((list) => {
    return <option value={list.id}>{list.name}</option>
});

  return (
    <Container>
     <MainPage>
    <h1>Increva-se para uma Viagem!</h1>
       
          <form onSubmit={cadastrar}>
          <DivInputs>
                    <DivEscolhaViagem>
                        <p>Escolha uma Viagem </p>
                    </DivEscolhaViagem>
              <select
                        value={form.idViagem}
                        name={"idViagem"}
                        onChange={onChange}>
                        {getTripsMap}
              </select>
              <InputName>
              <p>Nome </p>
                    <input
                      name={"name"}
                      value={form.name}
                      onChange={onChange}
                      placeholder="Nome"
                      required
                      // pattern={"^.{8,}"}
                      title={"O nome deve ter no mínimo 8 letras"}
                    />
                </InputName>

                <InputIdade>
                <p>Idade </p>
                    <input
                      name={"age"}
                      value={form.age}
                      onChange={onChange}
                      placeholder="Idade"
                      required
                      type={"number"}
                      min={18}
                      max={80}
                    />
                </InputIdade>

                <InputTexto>
                  <p>Descrição </p>
                    <input
                      name={"applicationText"}
                      value={form.applicationText}
                      onChange={onChange}
                      placeholder="Texto para candidatura"
                      required
                      type={"applicationText"}
                    />
                </InputTexto>

                <InputProfissao>
                <p>Profissão </p>
                      <input
                      name={"profession"}
                      value={form.profession}
                      onChange={onChange}
                      placeholder="Profissão"
                      required
                      type={"profession"}
                    />
                </InputProfissao>

                <InputPais>
                <p>País </p>
                    <input
                      name={"country"}
                      value={form.country}
                      onChange={onChange}
                      placeholder="País"
                      required
                      type={"country"}
                    />
                </InputPais>

              <Botoes>Cadastrar</Botoes>

              </DivInputs>

          </form>
       
    <Botoes onClick={() => goToListPage()}>Voltar</Botoes>
    </MainPage>
    <Footer />
  </Container>
);
};
 