import styled from "styled-components";

import Captain from "../../../assets/captain.png";
import CatQuery from "../../../assets/catQuery.png";
import Captain760 from "../../../assets/captain760.png";
import Captain320 from "../../../assets/captain320.png";
import CatQuery760 from "../../../assets/catQuery760.png";
import { useState } from "react";
import { SubTitle } from "../../../components/SubTitle/SubTitle";
import { Description } from "../../../components/Description/Description";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/Button/Button";

export const Query = () => {
  const [liked, setLiked] = useState("");
  
  const navigate = useNavigate();


  const scrollToForm = () => {
    navigate('/');


    setTimeout(() => {
      const contactBlock = document.getElementById("contact");
      contactBlock?.scrollIntoView({ behavior: "smooth" });
    }, 200)
  }

  return (
    <QueryStyle>
      <Interview>
        {liked === "yes" && (
          <SubTitle
            text="Спасибо, мы очень рады!
            И скоро порадуем вас новыми играми."
          />
        )}

        {liked === "no" && (
          <NoWrapper>
            <SubTitle text="Очень жаль :-(" />
            <Description text="Расскажите, что не так. Мы постараемся учесть ваши замечания, когда будем придумывать новые игры." />
            <CommentButton onClick={scrollToForm}>Оставить отзыв</CommentButton>
          </NoWrapper>
        )}

        {liked === "" && (
          <>
            <InterviewTitle>Понравилась ли тебе игра?</InterviewTitle>
            <InterviewBtns>
              <InterviewBtn onClick={() => setLiked("yes")}>Да</InterviewBtn>
              <InterviewBtn onClick={() => setLiked("no")}>Нет</InterviewBtn>
            </InterviewBtns>
          </>
        )}
      </Interview>
      <Image>
        <ImgCaptain src={Captain} />
        <ImgCatQuery src={CatQuery} />
        <ImgCaptain760 src={Captain760} />
        <ImgCatQuery760 src={CatQuery760} />
        <ImgCaptain320 src={Captain320} />
      </Image>
    </QueryStyle>
  );
};

const QueryStyle = styled.div({
  background: "#FFCA28",
  width: "100%",
  height: "218px",
  borderRadius: "20px",
  overflow: "hidden",
  position: "relative",

  "@media(max-width: 685px)": {
    height: "474px",
  },
});

const Interview = styled.div({
  position: "absolute",
  left: "50%",
  transform: "translate(-50%, -50%)",
  top: "50%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "600px",
  width: "100%",

  "@media(max-width: 685px)": {
    marginTop: "24px",
    padding: 10
  },

  "h2": {
    margin: 0,
    textAlign: "center"
  },

  "div": {
    textAlign: "center"
  },
});

const NoWrapper = styled.div({
  "h2": {
    marginBottom: 10,
    fontSize: 34
  },
  "div": {
    fontSize: 24
  }
});

const InterviewTitle = styled.div({
  fontSize: "40px",
  fontWeight: "600",
  marginBottom: "32px",
  textAlign: "center",

  "@media(max-width: 820px)": {
    fontSize: "32px",
  },
});

const InterviewBtns = styled.div`
  display: flex;
  width: 100%;
  gap: 24px;

  @media (max-width: 685px) {
    gap: 12px;
    flex-direction: column;
    align-items: center;
  }
`;

const InterviewBtn = styled.button({
  backgroundColor: "#FFF3E8",
  border: "none",
  height: "50px",
  maxWidth: "288px",
  width: "100%",
  borderRadius: "24px",
  padding: "16px 30px",
  color: "#FFA000",
  fontSize: "18px",
  fontWeight: "600",
  transition: ".2s",

  "&:hover": {
    backgroundColor: "#FFA000",
    color: "white",
  },

  "&:active": {
    backgroundColor: "#FF7001",
    color: "white",
  },
});

const ImgCaptain = styled.img({
  "@media(max-width: 1041px)": {
    display: "none",
  },
});

const CommentButton = styled.button`
  width: 300px;
  padding: 20px 30px;
  background-color: transparent;

  padding: 10px;
  font-size: 20px;
  border: 1px solid;
  border-radius: 20px;
  margin-top: 15px;
`

const ImgCatQuery = styled.img({
  "@media(max-width: 1041px)": {
    display: "none",
  },
});

const ImgCaptain760 = styled.img({
  display: "none",

  "@media(max-width: 1041px)": {
    display: "block",
  },

  "@media(max-width: 685px)": {
    display: "none",
  },
});

const ImgCatQuery760 = styled.img({
  display: "none",

  "@media(max-width: 1041px)": {
    display: "block",
  },

  "@media(max-width: 685px)": {
    display: "none",
  },
});

const ImgCaptain320 = styled.img({
  display: "none",

  "@media(max-width: 685px)": {
    display: "block",
  },
});

const Image = styled.div({
  display: "flex",
  justifyContent: "space-between",

  "@media(max-width: 685px)": {
    justifyContent: "center",
    alignItems: "flex-end",
    height: "100%",
  },
});
