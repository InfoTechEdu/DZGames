import styled from "styled-components";

import BlockLeftImg from "../../../assets/blockLeft.png";
import BlockLeftImg720 from "../../../assets/blockLeft720.png";
import { useCallback, useState } from "react";
import { Button } from "../../../components/Button/Button";
import { MessageModal } from "../../../components/MessageModal/MessageModal";

export const SubscriptionForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [status, setStatus] = useState<"success" | "failed" | "">("");

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setIsLoading(true);

      //#analytics
      let uid = localStorage.getItem("uid");
      if (!uid) {
        localStorage.setItem("uid", generateUserId());
        uid = localStorage.getItem("uid");
      }
      function generateUserId() {
        var possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var userId = "";
        for (var j = 0; j < 20; j++) userId += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
        return userId;
      }
      const response = await fetch(
        `https://functions.yandexcloud.net/d4ec3d0f7t8ga1u736q2?uid=${uid}&email=${email}&date=${new Date()}`
      );

      if (response.ok) {
        setStatus("success");
        setName("");
        setEmail("");
      }
      setIsLoading(false);
    },
    [email]
  );

  return (
    <FormBlock onSubmit={handleSubmit}>
      <BlockLeft>
        <Img src={BlockLeftImg} alt="" />
        <Img720 src={BlockLeftImg720} alt="" />
        <Text id="contactTitle">
          Подпишись на рассылку, чтобы не пропустить актуальные обновления и новости!
        </Text>
      </BlockLeft>
      <FormStyle>
        <Input
          type="text"
          value={name}
          placeholder="Имя"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          value={email}
          placeholder="Почта"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          type="submit"
          width="100%"
          text="Подписаться"
          disabled={isLoading}
        />
      </FormStyle>
      {status === "success" && (
        <MessageModal
          onClose={() => setStatus("")}
          text="Вы успешно подписаны"
        />
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
