import React from "react";
import Navbar3 from "../../components/navbar/NavBar";
import GridGallery from "../../components/GridGallery";
// import "../../components/OpGrid/Opstyle.css"
import {
  OpColumn1,
  OpHeading,
  OpTextWrapper,
  OpSubtitle,
  OpTopLine,
  OpRow,
  GridWrapper,
} from "../Boulogne/JulesElements";
import { PicsScheffer } from "../../components/GridData";

import { Container } from "../../globalStyles";

const Scheffer = () => {
  return (
    <>
      <Navbar3 />
      <Container>
        <OpRow>
          <OpColumn1>
            <OpTextWrapper>
              <OpHeading>Scheffer – Paris 16</OpHeading>

              <OpSubtitle>
                Corps d’états contractés : Démolition, gros-œuvre, maçonnerie,
                plâtrerie, plomberie, électricité, serrurerie, menuiserie,
                peinture.
              </OpSubtitle>
              <OpTopLine>
              Rénovation totale d’un appartement de 300 m2.
              </OpTopLine>
              <OpTopLine>
              Durée travaux : 10 mois
              </OpTopLine>
            </OpTextWrapper>
          </OpColumn1>
        </OpRow>
      </Container>
      <GridWrapper>
        <GridGallery dataImg={PicsScheffer} />
      </GridWrapper>
      <div className="ghostdiv"></div>
    </>
  );
};

export default Scheffer;
