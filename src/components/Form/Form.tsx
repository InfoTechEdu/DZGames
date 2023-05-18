import styled from "styled-components";
import { Button } from "../Button/Button";

import BlockLeftImg from "../../assets/blockLeft.png";
import BlockLeftImg720 from "../../assets/blockLeft720.png";
import { useRef, useState } from "react";
import { MessageModal } from "../MessageModal/MessageModal";

export const Form = ({
  text,
  withMessage = true,
  submitText,
}: {
  text: string;
  withMessage?: boolean;
  submitText?: string;
}) => {
  const name = useRef();
  const email = useRef();

  const [status, setStatus] = useState<"success" | "failed" | "">("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("url", {
      method: "POST",
      body: JSON.stringify({ name, email }),
    });

    console.log(123);

    setStatus("success");
  };

  return (
    <FormBlock onSubmit={handleSubmit}>
      <BlockLeft>
        <Img src={BlockLeftImg} alt="" />
        <Img720 src={BlockLeftImg720} alt="" />
        <Text id="contactTitle">{text}</Text>
      </BlockLeft>
      <FormStyle>
        <Input type="text" placeholder="Имя" />
        <Input type="email" placeholder="Почта" />
        {withMessage && <Textarea placeholder="Сообщение " />}
        <Button type="submit" width="100%" text={submitText ?? "Отправить"} />
      </FormStyle>
      {status === "success" && (
        <MessageModal onClose={() => setStatus("")} text="Ваше сообщение отправлено" />
      )}
    </FormBlock>
  );
};

const FormStyle = styled.div({
  width: "50%",
  backgroundColor: "#F7F7F8",
  borderRadius: "20px",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "12px",
  padding: "48px",

  "@media(max-width: 1220px)": {
    width: "100%",
  },

  "@media(max-width: 991px)": {
    padding: "48px 24px",
  },
});

const Img = styled.img({
  "@media(max-width: 1220px)": {
    display: "none",
  },
});

const Img720 = styled.img({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "none",
  borderRadius: 20,

  "@media(max-width: 1220px)": {
    display: "block",
  },
});

const Input = styled.input`
  /* max-width: 516px; */
  color: #bda5ff;
  font-size: 18px;
  font-weight: 600;
  padding: 16px 30px;
  width: 100%;
  border: 1px solid #bda5ff;
  border-radius: 20px;

  &:focus {
    outline: 1px solid #504cff;
    color: #504cff;
  }

  &:focus::placeholder {
    color: transparent;
  }
`;

const Textarea = styled.textarea({
  // maxWidth: "516px",
  minHeight: "94px",
  height: "100%",
  color: "#BDA5FF",
  fontSize: "18px",
  fontWeight: "600",
  paddingLeft: "30px",
  paddingRight: "30px",
  paddingTop: "16px",
  resize: "none",
  width: "100%",
  border: "1px solid #BDA5FF",
  borderRadius: "20px",
  marginBottom: "12px",

  "&:focus": {
    outline: "1px solid #504CFF",
  },

  "&:focus::placeholder": {
    color: "transparent",
  },
});

const FormBlock = styled.form({
  height: "388px",
  display: "flex",

  "@media(max-width: 991px)": {
    flexDirection: "column",
    height: "auto",
  },

  "@media(max-width: 600px)": {
    margin: "0",
  },
});

const BlockLeft = styled.div({
  width: "50%",
  position: "relative",

  "@media(max-width: 1220px)": {
    width: "100%",
  },

  "@media(max-width: 650px)": {
    display: "none",
  },
});

const Text = styled.div({
  color: "#ffffff",
  position: "absolute",
  top: "48px",
  fontSize: "40px",
  fontWeight: "600",
  marginLeft: "48px",
  marginRight: "48px",

  "@media(max-width: 1220px)": {
    marginLeft: "24px",
    marginRight: "24px",
  },
});
