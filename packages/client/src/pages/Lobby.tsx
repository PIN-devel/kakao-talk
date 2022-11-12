import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../apis/userApi";

const Base = styled.div<{ backgroundColor: string }>`
  width: 100%;
  height: 100vh;
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 0 12px;
  box-sizing: border-box;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoWrapper = styled.div`
  width: 128px;
  height: 128px;
  object-fit: contain;
  margin: 128px auto;
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const InputWrapper = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const Input = styled.input<{ borderColor: string }>`
  margin: 0;
  width: 100%;
  height: 48px;
  border: none;
  border-bottom: 1px solid ${({ borderColor }) => borderColor};
  padding: 0 12px;
  box-sizing: border-box;
  font-size: 16px;
`;

const ButtonWrapper = styled.div`
  margin-top: 36px;
`;

const Button = styled.button<{ backgroundColor: string }>`
  margin: 0;
  padding: 0;
  border: none;
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: 100%;
  height: 48px;
  font-size: 16px;
  font-weight: bold;
  &:active {
    opacity: 0.7;
  }
`;

export default function Lobby() {
  const theme = useTheme();
  const navigate = useNavigate();
  const mutation = useMutation((username: string) => signIn({ username }));

  const [username, setUsername] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleSignIn = () => {
    mutation.mutate(username, {
      onSuccess: (data) => {
        if (data?.statusText === "OK") {
          navigate("/friends");
        }
      },
    });
  };
  return (
    <Base backgroundColor={theme.colors.white}>
      <Container>
        <LogoWrapper>
          <Logo src="/logo.png" />
        </LogoWrapper>
        <InputWrapper>
          <Input
            placeholder="이름을 입력하세요."
            borderColor={theme.colors.gray[900]}
            onChange={handleChange}
          />
        </InputWrapper>
        <ButtonWrapper>
          <Button backgroundColor={theme.colors.primary} onClick={handleSignIn}>
            로그인
          </Button>
        </ButtonWrapper>
      </Container>
    </Base>
  );
}
