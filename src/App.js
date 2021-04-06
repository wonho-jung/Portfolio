import styled from "styled-components";
import Header from "./components/Header";
import RightSidebar from "./components/RightSidebar";
import Home from "./components/Home";
import LeftSidebar from "./components/LeftSidebar";
import Body from "./components/Body";
function App() {
  return (
    <AppContainer>
      <Header />
      <LeftSidebar />
      <Body />
      <RightSidebar />
    </AppContainer>
  );
}

export default App;
const AppContainer = styled.div`
  margin: 0;
`;
