import { useState } from "react";
import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
import { SurveyModal } from "./components/SurveyModal/indext";
import { GlobalStyle } from "./styles/global";

export function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenSurveyModal() {
    setIsModalOpen(true);
  }

  function handleCloseSurveyModal() {
    setIsModalOpen(false);
  }
  return (
    <>
      <Header isOpenSurvey={handleOpenSurveyModal} />
      <Summary />
      <SurveyModal isOpen={isModalOpen} onRequestClose={handleCloseSurveyModal} />
      <GlobalStyle />
    </>

  );
}


