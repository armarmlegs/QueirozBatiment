import React from "react";
import Navbar3 from "../../components/navbar/NavBar";
import GridGallery from "../../components/GridGallery";
import "../../components/OpGrid/Opstyle.css";
import {
  OpColumn1,
  OpHeading,
  OpTextWrapper,
  OpSubtitle,
  OpTopLine,
  OpRow,
  GridWrapper,
} from "../Boulogne/JulesElements";
import { PicsMontmartre } from "../../components/GridData";

// import { Container } from "../../globalStyles";

const Montmartre = () => {
  return (
    <>
      <Navbar3 />

      <div>
        <OpRow>
          <OpColumn1>
            <OpTextWrapper>
              <OpHeading>Montmartre – Paris 18</OpHeading>

              <OpSubtitle>
                Projet: Rénovation d’un triplex type atelier d’artiste de 240m2
                avec toit terrasse.
              </OpSubtitle>
              <OpTopLine>
                Corps d’états contractés : Démolition, gros-œuvre, maçonnerie,
                plâtrerie, plomberie, électricité, serrurerie, menuiserie,
                peinture.
              </OpTopLine>
            </OpTextWrapper>
          </OpColumn1>
        </OpRow>
      </div>

      <GridWrapper>
        <GridGallery dataImg={PicsMontmartre} />
        <div className="ghostdiv"></div>
      </GridWrapper>
    </>
  );
};

export default Montmartre;
