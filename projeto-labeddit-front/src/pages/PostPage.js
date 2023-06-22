import React, { useContext, useState } from "react";
import styled from "styled-components";
import logo from '../Group 3.png';
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Retangulo = styled.nav`
  width: 100%;
  height: 50px;
  background: #EDEDED;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoutButton = styled(Link)`
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: #4088CB;
  margin-left: auto;
  margin-right: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const PostButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding: 13px 133px;
  gap: 10px;
  width: 365px;
  height: 51px;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  border-radius: 27px;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  border: none;
  cursor: pointer;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Logo = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

const PostContainer = styled.div`
  width: 364px;
  height: 131px;
  background: #EDEDED;
  border-radius: 12px;
  margin-top: 70px;
  display: grid;
  place-items: center;
`;

const PostTextarea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  padding: 10px;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  background: #EDEDED;
  border-radius: 12px;
`;

const Line = styled.hr`
  width: 363.01px;
  height: 1px;
  border: none;
  background: linear-gradient(to right, #ff6489, #f9b24e, #acacac);
  transform: rotate(0.32deg);
  margin: 20px auto;
`;

const PostMessage = styled.div`
  width: 364px;
  background: #EDEDED;
  border-radius: 12px;
  padding: 10px;
  margin-top: 20px;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
`;

const Spacer = styled.div`
  height: 20px;
`;

export const PostPage = () => {
  const { setPost } = useContext(AppContext);
  const [post, setPostText] = useState('');
  const [postList, setPostList] = useState([]);

  const handlePostChange = (e) => {
    setPostText(e.target.value);
  }

  const handlePostSubmit = () => {
    if (post) {
      setPostList([...postList, post]);
      setPost(post); 
      setPostText("");
    }
  }

  return (
    <Container>
      <Retangulo>
        <LogoContainer>
          <Logo src={logo} alt='logo da labenu' />
        </LogoContainer>
        <LogoutButton to="/">Logout</LogoutButton>
      </Retangulo>
      <PostContainer>
        <PostTextarea
          value={post}
          onChange={handlePostChange}
          placeholder="Escreva sua postagem..."
        />
      </PostContainer>
      <Spacer />
      <ButtonContainer>
        <PostButton onClick={handlePostSubmit}>Postar</PostButton>
      </ButtonContainer>
      <Line />
      {postList.map((message, index) => (
        <PostMessage key={index}>{message}</PostMessage>
      ))}
    </Container>
  );
}






