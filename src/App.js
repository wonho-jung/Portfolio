import styled from "styled-components";
import Header from "./components/Header";
import RightSidebar from "./components/RightSidebar";
import Home from "./components/Home";
import LeftSidebar from "./components/LeftSidebar";
import Body from "./components/Body";
import React, { useState } from "react";
import Loading from "./components/Loading";
function App() {
  const [loading, setLoading] = useState(true);
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
`;
