import React from "react";

import {
  IntroBg,
  IntroContainer,
  VideoBg,
  BannBG
 
} from "./IntroElements";
import Video from "../../Images/Videos/Video Fonciere/Fonciere Signature.mp4"
import Img from '../../Images/queirozImages/SELECTION SITE/Montmartre/CLICHY (28 sur 176).jpg'


const Intro = () => {
  return (
    <IntroContainer>
      <IntroBg>
    
        <BannBG src={Img}></BannBG>
       
      </IntroBg>
      
       
     
     
    </IntroContainer>
  );
};

export default Intro;
