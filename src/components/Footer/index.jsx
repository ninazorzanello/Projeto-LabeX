import React from 'react';
import {AreaFooter, RedesSociais, Colunas1} from './styled';
import {BsInstagram} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';
import {ImFacebook} from 'react-icons/im';


export const Footer = () => {
   
        return (
            <AreaFooter>
               <RedesSociais>
                    <ImFacebook/>
                    <BsInstagram/>
                    <BsTwitter/>
                    <BsWhatsapp/>
               </RedesSociais>               
               
               <div>
                   <Colunas1>Conheça</Colunas1> 
                    <p>Entre em Contato</p>
                    <p>Venha Viajar conosco</p>
                    <p>Realizamos o seu Sonho</p>
               </div>
             
               
            </AreaFooter>
    );
  }