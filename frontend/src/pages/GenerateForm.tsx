import React from 'react';
import styled from 'styled-components';
import HtmlFormRenderer from '../components/HtmlFormRenderer';

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GenerateForm: React.FC = () => {
    return (
        <PageContainer>
            <HtmlFormRenderer />
        </PageContainer>
    );

};

export default GenerateForm;
