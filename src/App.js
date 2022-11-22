import styled from "styled-components";
import Header from "./components/Header";
import RightSidebar from "./components/RightSidebar";
import LeftSidebar from "./components/LeftSidebar";
import Body from "./components/Body";
import React, { useState } from "react";
import Loading from "./components/Loading";
import { Helmet } from "react-helmet";

function App() {
  const [loading, setLoading] = useState(true);
  const time = () => {
    setLoading(false);
  };

  setTimeout(time, 1000);

  return (
    <>
      <Helmet>
        <title>Won.9 Dev</title>
      </Helmet>
      {loading ? (
        <Loading />
      ) : (
        <AppContainer>
          <Header />
          <AppBodyContainer>
            <LeftSidebar />
            <Body />
            <RightSidebar />
          </AppBodyContainer>
        </AppContainer>
      )}
    </>
  );
}

export default App;
const AppContainer = styled.div`
  color: #eeeeee;
  background-color: #111821;
  a {
    text-decoration: none;
    color: #eeeeee;
    cursor: pointer;
  }
`;
const AppBodyContainer = styled.div`
  display: flex;
  justify-content: center;
`;
