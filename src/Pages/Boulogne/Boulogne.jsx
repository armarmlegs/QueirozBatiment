import Navbar3 from "../../components/navbar/NavBar";
import GridGallery from "../../components/GridGallery";
import { VideoBg } from "./JulesElements";
import Video from "../../Images/Videos/Video Fonciere/Fonciere Truffaut.mp4";
import "../../components/OpGrid/Opstyle.css";
import {
  OpColumn1,
  OpHeading,
  OpTextWrapper,
  OpSubtitle,
  OpTopLine,
  OpRow,
  VideoWrapper,
  GridWrapper,
} from "./JulesElements";
import { PicsBoulogne } from "../../components/GridData";
import { PicsJulesFerry2ndFloor } from "../../components/GridData";
import { PicsJulesFerryTriplex } from "../../components/GridData";

import { Container } from "../../globalStyles";

const JulesFerry = () => {
  return (
    <>
      <Navbar3 />
      <div>
        <OpRow>
          <OpColumn1>
            <OpTextWrapper>
              <OpHeading>Jules ferry – Boulogne-Billancourt</OpHeading>

              <OpSubtitle>
                Corps d’états contracté : Démolition, gros-œuvre, maçonnerie,
                plâtrerie, plomberie, électricité, serrurerie, menuiserie,
                peinture.
              </OpSubtitle>

              <OpTopLine>
                Surélévation d’un immeuble initial R+2 en R+5. Structure
                existante mise à nu pour renforcement puis rénovation totale de
                l’ensemble des appartements de l’immeuble.
              </OpTopLine>
            </OpTextWrapper>
          </OpColumn1>
        </OpRow>
     
        <GridWrapper>
          
          <GridGallery dataImg={PicsBoulogne} />
          {/* <OpTopLine>2nd Etage</OpTopLine>
        <GridGallery dataImg={PicsJulesFerry2ndFloor} />
        <OpTopLine>Triplex</OpTopLine>
        <GridGallery dataImg={PicsJulesFerryTriplex} /> */}
        </GridWrapper>
      </div>
      {/* <div className="ghostdiv"></div> */}
    </>
  );
};

export default JulesFerry;
