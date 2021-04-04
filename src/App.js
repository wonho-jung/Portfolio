import styled from "styled-components";
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    <AppContainer>
      <Header />
      <Home />
    </AppContainer>
  );
}

export default App;
const AppContainer = styled.div`
  margin: 0;
`;
