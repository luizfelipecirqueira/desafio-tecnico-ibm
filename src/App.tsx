import { AppContainer } from "./AppContainer";
import React from "react";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <AppContainer />
      <Footer />
    </div>
  );
}

export default App;
