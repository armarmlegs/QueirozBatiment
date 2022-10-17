import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  position: fixed;
  z-index:999;
  bottom: 0;
  width: 100%;
  max-height: 100%;
  /* box-sizing:border-box; */
  /*background-color: #8ca1a5;*/
  background-color: #f9F9F9;
  opacity: 0.9;
  /* width: 100%; */

  /* position:relative; */

  /*  height: 90px; */
  display: flex;
  /* width: 100vw; */
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-content: flex-end;

  @media screen and (max-width: 750px) {
   
    height: 40px;
  }
`;

export const FooterWrapper = styled.div`
  box-sizing: border-box;
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;

  margin: 0;
  @media screen and (max-width: 750px) {
    width: 100%;
    height: 40px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 820px) {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 60px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #000;

  @media screen and (max-width: 600px) {
    margin: 0;
    padding: 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 11px;
`;

export const FooterLink = styled(Link)`
  color: #000;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  &:hover {
    color: #fff;
    transition: 0.3s ease-in-out;
  }
`;

export const SocialMedia = styled.section`

display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  /* max-width:1100px; */
  margin: 40 auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: row;
  }
`;

export const SocialLogo = styled(Link)`
  color: #000;
  /* justify-self: start; */
  cursor: pointer;
  text-decoration: none;
  /* font-size: 1.5rem; */
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
  max-width: 30%;
  padding-right
  height:auto;

  &:hover {
    color: #fff;
    transition: 0.3s ease-in-out;
  }

  @media screen and (max-width: 760px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
 
  }
`;

export const WebsiteRights = styled.p`
  color: #000;
  font-size: 24px;
  max-width:600px;

  margin-bottom:0;
  /* 
  text-align: center; */
  width: 100%; 
 
  @media screen and (min-width: 860px) {
    padding-right: 160p  !important;
  }


  @media screen and (max-width: 860px) {
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* width: 240px; */
  }

  @media screen and (max-width: 650px) {
    display: flex;
    align-items: center;
    font-size: 10px;
    /* width: 200px; */
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #000;
  font-size: 15px;

  &:hover {
    color: #fff;
    transition: 0.3s ease-in-out;
  }
`;

export const FooterLogo = styled.img`
  margin-left: 0px;
  margin-bottom: -23px;
  width: 30%;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-in-out;
  }

  @media screen and (max-width: 750px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: flex-end;
    width: 60%;
  }
`;

export const FooterAddy = styled.address`
  color: #000;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  width: 300px;
`;
