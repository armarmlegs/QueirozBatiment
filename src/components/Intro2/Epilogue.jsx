import React from "react";

import {
  // Heading,
  EpiContainer,
  EpiRow,
  EpiWrapper,
  
  TopLine,
  Subtitle,
} from "./EpilogueElements";

const Epilogue = () => {
  return (
    <>
      <EpiContainer>
        <EpiWrapper>
          <EpiRow>
           
              <EpiWrapper>
                  {/* <Heading>Foncière Truffaut</Heading> */}
                <TopLine>Qui sommes Nous ?</TopLine>
                <Subtitle>
                
                Queiroz est une société de rénovation basé à Paris, effectuant
                des travaux en Ile-de-France. Principalement des chantiers
                d’architectes, en rénovation totale. Avec des équipes internes
                spécialisées pour l’ensemble des corps d’états.
              </Subtitle>
              <Subtitle>
               
                Entreprise familiale, active sous cette forme depuis près de 20
                ans, assurant la coordination lors de l’ensemble du chantier.
                Ainsi ce suivi permet une forte application pour une qualité de
                travail optimale.
              </Subtitle>
              <Subtitle>
                Également certifié RGE pour la rénovation énergétique, en
                alliant au mieux un choix de matériaux pour une qualité
                énergétique performante tout en respectant l’environnement.
              </Subtitle>
              </EpiWrapper>
            
           
          </EpiRow>
        </EpiWrapper>
      </EpiContainer>
    </>
  );
};

export default Epilogue;
