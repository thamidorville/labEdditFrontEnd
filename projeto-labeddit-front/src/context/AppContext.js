import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [post, setPost] = useState("");
  const [postList, setPostList] = useState([])

  return (
    <AppContext.Provider value={{ post, setPost, postList, setPostList }}>
      {children}
    </AppContext.Provider>
  );
};
