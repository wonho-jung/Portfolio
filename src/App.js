import styled from "styled-components";
import Header from "./components/Header";
import RightSidebar from "./components/RightSidebar";
import Home from "./components/Home";
import LeftSidebar from "./components/LeftSidebar";
import Body from "./components/Body";
import React, { useEffect, useState } from "react";
import Loading from "./components/Loading";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  const [loading, setLoading] = useState(true);
  const time = () => {
    setLoading(false);
  };

  setTimeout(time, 2600);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <AppContainer>
            <Header />
            <AppBodyContainer>
              <LeftSidebar />
              <Body />
              <RightSidebar />
            </AppBodyContainer>
          </AppContainer>
        </>
      )}
    </>
  );
}

export default App;
const AppContainer = styled.div`
  margin: 0;
  background-color: #222831;
`;
const AppBodyContainer = styled.div`
  display: flex;
  @media (min-width: 320px) and (max-width: 480px) {
    display: grid;
  }
`;
