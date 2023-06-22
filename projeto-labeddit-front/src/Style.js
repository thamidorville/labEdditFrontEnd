import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';


export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 40px;
  margin-top: 40px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  width: 300px;
  height: 40px;
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  display: block;
`;

export const ButtonPrimary = styled.button`
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


`;

export const ButtonSecondary = styled(ButtonPrimary)`
 display: flex;
  justify-content: center;
  align-items: center;
  width: 365px;
  height: 51px;
  background: transparent;
  border: 1px solid #fe7e02;
  border-radius: 27px;
  color: #fe7e02;
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  padding: 0;
`;

export const Line = styled.hr`
  width: 363.01px;
  height: 1px;
  border: none;
  background: linear-gradient(to right, #ff6489, #f9b24e, #acacac);
  transform: rotate(0.32deg);
  margin: 20px auto;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center
 
`;
