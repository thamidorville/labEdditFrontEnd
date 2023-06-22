import React, { useState } from "react";
import styled from "styled-components";
import retangulo from '../Rectangle 26.png';
import { Link, useNavigate } from "react-router-dom";
import logo from '../Group 3.png';
import boasVindas from '../Olá, boas vindas ao LabEddit ;).png';

const Retangulo = styled.nav`
  display: flex;
  position: absolute;
  width: 100%;
  height: 50px;
  left: 0px;
  top: 44px;
  margin: 20px -40px;
  margin-left: -10px;
  background: #EDEDED;
  align-items: center;
`;

const LoginButton = styled(Link)`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 20px;
  top: 20px;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: #4088CB;
`;

const LogoContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 100%;
  max-width: 100%;
  margin-top: 20px;
`;

const BoasVindasContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

const BoasVindas = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

const Input = styled.input`
  width: 300px;
  height: 40px;
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  display: block;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
`;

const CheckboxInput = styled.input`
  margin-right: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
 
`;

const ButtonSignup = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 133px;
  gap: 10px;
  width: 365px;
  height: 51px;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  border-radius: 27px;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 25px;
  border: none;
  cursor: pointer;
`


export const SignupPage = () => {
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agreed, setAgreed] = useState(false);
    const navigate = useNavigate()

    const nicknameChange = (e) => {
        setNickname(e.target.value);
    };

    const emailChange = (e) => {
        setEmail(e.target.value);
    };

    const passwordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleAgreementChange = (e) => {
        setAgreed(e.target.checked);
    };
    const handleLogin = () => {
        navigate("/")
    }
    return (
        <>
            <Retangulo src={retangulo} alt='barra com a logo da labenu' />
            <LogoContainer>
                <Logo src={logo} alt='logo da labenu' />
            </LogoContainer>
            <LoginButton to="/">Entrar</LoginButton>

            <BoasVindasContainer>
                <BoasVindas src={boasVindas} alt='Texto de boas vindas ao LabEddit' />
            </BoasVindasContainer>

            <InputContainer>
                <Input
                    type="nickname"
                    placeholder="Apelido"
                    value={nickname}
                    onChange={nicknameChange}
                />
                <Input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={emailChange}
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={passwordChange}
                />
                <p>Ao continuar, você concorda com o nosso Contrato de usuário e nossa Política de Privacidade</p>
                <CheckboxLabel>
                    <CheckboxInput
                        type="checkbox"
                        checked={agreed}
                        onChange={handleAgreementChange}
                    />
                    Eu concordo em receber emails sobre coisas legais no Labeddit
                </CheckboxLabel>
            </InputContainer>

            <ButtonContainer>
                <ButtonSignup onClick={handleLogin}> Cadastrar  </ButtonSignup>
            </ButtonContainer>

        </>
    );
};
