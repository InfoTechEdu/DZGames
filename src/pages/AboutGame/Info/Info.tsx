import styled from "styled-components";
import S from "../../../assets/S.svg";
import LeftArrow from "../../../assets/left_arrow.svg";
import { SubTitle } from "../../../components/SubTitle/SubTitle";
import { Description } from "../../../components/Description/Description";

export const Info = () => {
  return (
    <div>
      <SubTitle text="Методическая информация" />
      <Description
      fontSize820={24}
        text="
        В игре представлены различные занимательные задания на развитие функциональной грамотности и мышления. Игрок может отслеживать свой уровень с помощью окна 'Трекер умений'"
      />

      <Implements>
        <ImplementBlock>
          <ImplementsTitle>
            Направления развития и оценки функциональной грамотности:
          </ImplementsTitle>
          <WhiteBlock>
            <ImplementUl>
              <ImplementLi>
                Математическая грамотность
              </ImplementLi>
              <ImplementLi>
                Читательская грамотность
              </ImplementLi>
              <ImplementLi>
                Естественнонаучная грамотность
              </ImplementLi>
              <ImplementLi>
                Финансовая грамотность
              </ImplementLi>
            </ImplementUl>
          </WhiteBlock>

          <br></br>
          <Description
              fontSize={24}
              text="Для получения больших деталей относительно списка задач для игроков и оцениваемых навыков обратитесь к команде разработчиков"
            />
        </ImplementBlock>
        {/* <ImplementBlock>
          <ImplementsTitle>Инструменты аргументации:</ImplementsTitle>
          <WhiteBlock>
            <ImplementUl>
              <ImplementLi>
                Утверждение, доказательства, структура рассуждений. Подкрепляйте
                аргументы данными, собранными в результате наблюдений,
                экспериментов и моделирования.
              </ImplementLi>
              <ImplementLi>
                Резервуар наблюдения для сбора информации о взаимодействии
                организмов.
              </ImplementLi>
              <ImplementLi>
                Утверждение, доказательства, структура рассуждений. Подкрепляйте
                аргументы данными, собранными в результате наблюдений,
                экспериментов и моделирования.
              </ImplementLi>
              <ImplementLi>
                Резервуар наблюдения для сбора информации о взаимодействии
                организмов.
              </ImplementLi>
            </ImplementUl>
          </WhiteBlock>
        </ImplementBlock> */}
        {/* <ImplementBlock>
          <ImplementsTitle>Инструменты аргументации:</ImplementsTitle>
          <WhiteBlock>
            <ImplementUl>
              <ImplementLi>
                Утверждение, доказательства, структура рассуждений. Подкрепляйте
                аргументы данными, собранными в результате наблюдений,
                экспериментов и моделирования.
              </ImplementLi>
              <ImplementLi>
                Резервуар наблюдения для сбора информации о взаимодействии
                организмов.
              </ImplementLi>
              <ImplementLi>
                Утверждение, доказательства, структура рассуждений. Подкрепляйте
                аргументы данными, собранными в результате наблюдений,
                экспериментов и моделирования.
              </ImplementLi>
              <ImplementLi>
                Резервуар наблюдения для сбора информации о взаимодействии
                организмов.
              </ImplementLi>
            </ImplementUl>
          </WhiteBlock>
        </ImplementBlock> */}
        <ImgS className="asideButton" src={S} />
        <ImgLeft src={LeftArrow} />
      </Implements>
    </div>
  );
};

const Implements = styled.div({
  position: "relative",
  padding: "48px 60px",
  background: "#F7F7F8",
  borderRadius: "20px",
  marginTop: "24px",

  "@media(max-width: 700px)": {
    padding: "12px 8px 24px 8px",
  },
});

const ImplementBlock = styled.div({
  ":not(:last-child)": {
    marginBottom: "48px",
  },

  "@media(max-width: 700px)": {
    ":not(:last-child)": {
      marginBottom: "24px",
    },
  },
});

const ImplementUl = styled.ul({
  gap: "24px",
  display: "flex",
  flexDirection: "column",
  listStyle: "none",
  margin: "0",
});

const ImplementLi = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  font-size: 30px;
  &::before {
    content: "";
    background: #ffa000;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: 16px;
    position: absolute;
    left: -40px;
  }

  @media only screen and (max-width: 820px) {
    font-size: 24px;
  }

  @media (max-width: 700px) {
    align-items: flex-start;
  }
`;

const ImplementsTitle = styled.div({
  color: "#0B0D22",
  marginBottom: "24px",
  fontSize: "30px",
  fontWeight: "600",

  "@media(max-width: 820px)": {
    fontSize: "24px",
  },

  "@media(max-width: 700px)": {
    marginBottom: "12px",
  },
});

const WhiteBlock = styled.div({
  background: "#FFFFFF",
  width: "100%",
  maxWidth: "1104px",
  padding: "42px",
  borderRadius: "16px",

  "@media(max-width: 700px)": {
    padding: "8px",
  },
});

const ImgS = styled.img({
  position: "absolute",
  right: "-46px",
  top: "-51px",

  "@media(max-width: 1340px)": {
    top: "-20px",
    right: "-18px",
  },
});

const ImgLeft = styled.img({
  position: "absolute",
  right: "-172px",
  bottom: "-295px",

  "@media(max-width: 1580px)": {
    display: "none",
  },
});
