import styled from "styled-components";
import { Logo } from "../Header/Header";

import { ReactComponent as LogoImg } from "../../assets/logo.svg";
import { ReactComponent as Tg } from "../../assets/tg.svg";
import { ReactComponent as Vb } from "../../assets/vb.svg";
import { ReactComponent as Vk } from "../../assets/vk.svg";
import { ReactComponent as Yt } from "../../assets/yt.svg";
import { ReactComponent as Yn } from "../../assets/yn.svg";
import { Button } from "../Button/Button";

import E from "../../assets/E.svg";
import W from "../../assets/W.svg";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <FooterStyle className="footer">
      <Container>
        <Wrapper>
          <Logo className="size">DZGames</Logo>

          <Block className="social size">
            <Nav>
              <Text>Узнай больше</Text>
              <Ul>
                <Li><NavLink to="/about-us">О нас</NavLink></Li>
                <Li><NavLink to="/game">Наши игры</NavLink></Li>
              </Ul>
            </Nav>

            <Social>
              <Text>Мы в соцсетях</Text>
              <Icons>
                <div><NavLink to="https://domznaniy.school/"><Tg /></NavLink></div>
                <div><NavLink to="https://domznaniy.school/"><Tg /></NavLink></div>
                <div><NavLink to="https://domznaniy.school/"><Tg /></NavLink></div>
              </Icons>
            </Social>
          </Block>
          <Contact className="size">
            <Text>Контакты школы Дома знаний</Text>
            <NavLink to="https://domznaniy.school/"><LogoImg /></NavLink>
            <Tel href="tel: 8 800 600 60 77">8 800 600 60 77</Tel>
            <Icons>
            <div><NavLink to="https://domznaniy.school/"><Tg /></NavLink></div>
            <div><NavLink to="https://domznaniy.school/"><Vb /></NavLink></div>
            <div><NavLink to="https://domznaniy.school/"><Vk /></NavLink></div>
            <div><NavLink to="https://domznaniy.school/"><Yt /></NavLink></div>
            <div><NavLink to="https://domznaniy.school/"><Yn /></NavLink></div>
            </Icons>
          </Contact>
        </Wrapper>
        <Wrapper className="align-center">
          <Button width="212px" text="Связаться с нами" />
          <TextWrapper>
            <div><NavLink to="https://domznaniy.school/">© DZGames 2023</NavLink></div>
            <div><NavLink to="https://domznaniy.school/">Политика конфиденциальности</NavLink></div>
            <div><NavLink to="https://domznaniy.school/">Условия использования</NavLink></div>
          </TextWrapper>
        </Wrapper>
      <ImgW className="asideButton" src={W} />
      <ImgE className="asideButton" src={E} />
      </Container>
    </FooterStyle>
  );
};

const FooterStyle = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  position: relative;
  margin-top: 120px;

  @media(max-width: 820px) {
    margin-top: 50px;
  }
`;

const Container = styled.div({
  backgroundColor: "#F7F7F8",
  width: "100%",
  maxWidth: "1224px",
  height: "442px",
  borderRadius: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  position: "relative",

  "@media(max-width: 1300px)": {
    padding: "0 24px",
  },

  "@media(max-width: 991px)": {
    padding: "48px 24px",
  },  

  "@media(max-width: 650px)": {
    height: "660px",
    paddingTop: "32px",
    gap: "32px",
    justifyContent: "flex-start",
  },
});

const Nav = styled.div({});

const Ul = styled.ul({
  display: "flex",
  flexDirection: "column",
  padding: "0",
  margin: "0",
  gap: "8px",
});

const Li = styled.li({
  listStyleType: "none",
  cursor: "pointer",
});

const Social = styled.div({
  display: "flex",
  flexDirection: "column",
});

const Contact = styled.div({
  display: "flex",
  flexDirection: "column",
});

const Wrapper = styled.div({
  display: "flex",
  justifyContent: "space-between",
  maxWidth: "1128px",
  width: "100%",
  margin: "0 auto",
  zIndex: "100",

  "@media(max-width: 650px)": {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "24px",
    width: "100%",
  },
});

const TextWrapper = styled.div({
  display: "flex",
  justifyContent: "space-between",
  gap: "48px",
  padding: "0 10px",

  "@media(max-width: 920px)": {
    gap: "8px",
    flexDirection: "column",
    alignItems: "flex-end",
  },

  "@media(max-width: 650px)": {
    alignItems: "flex-start",
  },
});

const Icons = styled.div({
  display: "flex",
  gap: "8px",
  "div":{
    cursor: "pointer"
  }
});
const Tel = styled.a({
  fontSize: "18px",
  fontWeight: "600",
  color: "#0B0D22",
  textDecoration: "none",
  borderBottom: "3px solid rgba(11, 13, 34, 0.2)",
  paddingBottom: "12px",
  marginTop: "24px",
  marginBottom: "24px",
  width: "138px ",

  "@media(max-width: 650px)": {
    paddingBottom: "4px",
    marginTop: "8px",
    marginBottom: "12px",
  },
});

const Text = styled.div({
  marginBottom: "24px",
  fontWeight: "600",
  fontSize: "18px",

  "@media(max-width: 650px)": {
    marginBottom: "8px",
  },
});

const ImgE = styled.img({
  position: "absolute",
  bottom: "134px",
  left: "-56px",

  "@media(max-width: 1340px)": {
    left: "-18px",
  },

  "@media(max-width: 820px)": {
    bottom: "0",
  },

  "@media(max-width: 655px)": {
    bottom: "35px",
  },

  "@media(max-width: 368px)": {
    bottom: "10px",
  },
});

const ImgW = styled.img({
  position: "absolute",
  top: "-47px",
  right: "-56px",

  "@media(max-width: 1340px)": {
    top: "-20px",
    right: "-18px",
  },
});

const Block = styled.div({
  maxWidth: "564px",
  width: "100%",
  display: "flex",
  justifyContent: "space-around",

  "@media(max-width: 820px)": {
    justifyContent: "flex-start",
    flexDirection: "column",
    gap: "24px",
  },

});
