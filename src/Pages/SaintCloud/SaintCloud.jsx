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
import { PicsSaintCloud } from "../../components/GridData";

import { Container } from "../../globalStyles";

const SaintCloud = () => {
  return (
    <>
      <Navbar3 />
      <Container>
        <OpRow>
          <OpColumn1>
            <OpTextWrapper>
              <OpHeading>Maréchal Foch – Saint-Cloud</OpHeading>

              <OpSubtitle>
                Corps d’états contractés : Maçonnerie, plâtrerie, plomberie,
                menuiserie, peinture.
              </OpSubtitle>
              <OpTopLine>
                Aménagement total d’une maison neuve de 180m2.
              </OpTopLine>
            </OpTextWrapper>
          </OpColumn1>
        </OpRow>
      </Container>
      <GridWrapper>
        <GridGallery dataImg={PicsSaintCloud} />
      </GridWrapper>
      <div className="ghostdiv"></div>
    </>
  );
};

export default SaintCloud;
