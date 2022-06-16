import { AppContainer } from "./AppContainer";
import React from "react";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <AppContainer />
      <Footer />
    </div>
  );
}

export default App;
