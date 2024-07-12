import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomePage: React.FC = () => {
    return (
        <PageContainer>
            <div>Welcome to the Home Page</div>
        </PageContainer>
    );
};

export default HomePage;
