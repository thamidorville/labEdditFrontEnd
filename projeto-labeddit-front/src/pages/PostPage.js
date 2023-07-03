import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import logo from '../Group 3.png';
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import axios from "axios";

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

const LogoutButton = styled.button`
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
  padding: 20px;
  margin-top: 20px;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
`;

const Spacer = styled.div`
  height: 20px;
`;
const PostButton2 = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 3px 10px; 
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

export const PostPage = () => {
  const { setPost } = useContext(AppContext);
  const [post, setPostText] = useState('');
  const [postList, setPostList] = useState([]);
  const [editPost, setEditPost] = useState('')
  const [editingPostId, setEditingPostId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQ1OTRmMDNlLTc4NWQtNGYzMy05OTllLTBhZGU5ZDY2ZDlhNCIsIm5pY2tuYW1lIjoiTGl2aWF6aW5oYSIsInJvbGUiOiJOT1JNQUwiLCJpYXQiOjE2ODgxNDkyMjMsImV4cCI6MTY4ODc1NDAyM30.yajjP8Fl5ucaQgMHglYvRrPeYwHJtSyCgeAsDTTTaN8";
        const response = await axios.get('https://labedditbackend-3noj.onrender.com/posts', {
          headers: {
            Authorization: token
          }
        });
        setPostList(response.data);
      } catch (error) {
        console.log('Erro ao buscar suas postagens', error.message);
      }
    };

    fetchPosts();
  }, []);

  const handlePostChange = (e) => {
    setPostText(e.target.value);
  };

  const handlePostSubmit = async () => {
    console.log('Clicou no botão Postar');
    if (post) {
      try {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQ1OTRmMDNlLTc4NWQtNGYzMy05OTllLTBhZGU5ZDY2ZDlhNCIsIm5pY2tuYW1lIjoiTGl2aWF6aW5oYSIsInJvbGUiOiJOT1JNQUwiLCJpYXQiOjE2ODgxNDkyMjMsImV4cCI6MTY4ODc1NDAyM30.yajjP8Fl5ucaQgMHglYvRrPeYwHJtSyCgeAsDTTTaN8";
        const response = await axios.post(
          'https://labedditbackend-3noj.onrender.com/posts',
          {
            content: post
          },
          {
            headers: {
              Authorization: token
            }
          }
        );
        console.log('Postagem feita com sucesso!');
        console.log('Response:', response.data);
        setPostList([...postList, { id: response.data.id, content: post }]);
        setPostText("");
      } catch (error) {
        console.log('Erro ao criar postagem:', error.message);
      }
    }
  };

  const handleEditPost = async (id) => {
    try {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQ1OTRmMDNlLTc4NWQtNGYzMy05OTllLTBhZGU5ZDY2ZDlhNCIsIm5pY2tuYW1lIjoiTGl2aWF6aW5oYSIsInJvbGUiOiJOT1JNQUwiLCJpYXQiOjE2ODgxNDkyMjMsImV4cCI6MTY4ODc1NDAyM30.yajjP8Fl5ucaQgMHglYvRrPeYwHJtSyCgeAsDTTTaN8";
      const response = await axios.put(
        `https://labedditbackend-3noj.onrender.com/posts/${id}`,
        {
          content: editPost
        },
        {
          headers: {
            Authorization: token
          }
        }
      )
      console.log('Postagem editada com sucesso!')
      console.log('Response:', response.data)
    

      const updatedPosts = postList.map((post) => {
        if (post.id === id) {
          return { ...post, content: editPost }
        }
        return post
      });
    
      setPostList(updatedPosts)
      setEditPost('')
      
      setIsEditing(false);
      setEditingPostId(null);
    } catch (error) {
      console.log('Erro ao tentar editar sua postagem:', error.response)
      console.log(post.id)
    }
  }
  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditingPostId(null);
    setEditPost('');
  };

  const handleStartEditing = (postId, postContent) => {
    setIsEditing(true);
    setEditingPostId(postId);
    setEditPost(postContent);
  };


  const handleDeletePost = async (postId) => {
    try {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQ1OTRmMDNlLTc4NWQtNGYzMy05OTllLTBhZGU5ZDY2ZDlhNCIsIm5pY2tuYW1lIjoiTGl2aWF6aW5oYSIsInJvbGUiOiJOT1JNQUwiLCJpYXQiOjE2ODgxNDkyMjMsImV4cCI6MTY4ODc1NDAyM30.yajjP8Fl5ucaQgMHglYvRrPeYwHJtSyCgeAsDTTTaN8";
      const response = await axios.delete(
        `https://labedditbackend-3noj.onrender.com/posts/${postId}`,
        {
          headers: {
            Authorization: token
          }
        }
      )
      console.log('Postagem excluída com sucesso!');
      console.log('Response:', response.data);

      const filteredPostList = postList.filter((post) => post.id !== postId)
      setPostList(filteredPostList)
    } catch (error) {
      console.log('Erro ao excluir sua postagem!', error.message)
    }
  }

  const handleLogout = () => {
    navigate("/")
  }

  const handleGoToHome = () => {
    navigate("/")
  }

  return (
    <Container>
      <Retangulo>
        <LogoutButton onClick={handleGoToHome}>Página Inicial</LogoutButton>
        <LogoContainer>
          <Logo src={logo} alt='logo da labenu' />
        </LogoContainer>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
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
      {postList.map((post) => (
        <PostMessage key={post.id}>
          {isEditing && editingPostId === post.id ? (
            <>
              <PostTextarea
                value={editPost}
                onChange={(e) => setEditPost(e.target.value)}
                placeholder="Escreva seu novo conteúdo..."
              />
              <PostButton2 onClick={() => handleEditPost(post.id)}>Salvar</PostButton2>
              <PostButton2 onClick={handleCancelEdit}>Cancelar</PostButton2>
            </>
          ) : (
            <>
              {post.content}
              <PostButton2 onClick={() => handleDeletePost(post.id)}>Excluir</PostButton2>
              <PostButton2 onClick={() => handleStartEditing(post.id, post.content)}>Editar</PostButton2>
            </>
          )}
        </PostMessage>
      ))}
    </Container>
  )
}




