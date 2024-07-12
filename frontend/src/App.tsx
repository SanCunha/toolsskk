import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import ToolsPage from './pages/ToolsPage';
import ContactPage from './pages/ContactPage';
import styled from 'styled-components';
import GenerateForm from './pages/GenerateForm';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ContentContainer = styled.div`
  width: 100%;
  flex: 1;
  padding: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 8px;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <NavBar />
      <ContentContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/tools/json-to-html" element={<GenerateForm />} />
        </Routes>
      </ContentContainer>
    </AppContainer>
  );
};

export default App;
