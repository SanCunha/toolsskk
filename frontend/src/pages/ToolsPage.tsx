import React from 'react';
import styled from 'styled-components';
import ToolCard from '../components/ToolCard';
import { Tool } from '../types';

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;


// src/pages/ToolsPage.tsx


const ToolsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const toolsData: Tool[] = [
    {
        id: 1,
        name: 'JSON to HTML',
        description: 'Convert JSON to static HTML forms.',
        imageUrl: 'https://img.icons8.com/?size=200&id=122843&format=png&color=000000',
        path: '/tools/json-to-html',
    },
    {
        id: 2,
        name: 'API Requester',
        description: 'Make requests in JSON or XML.',
        imageUrl: 'https://img.icons8.com/?size=200&id=Oz14KBnT7lnn&format=png&color=000000',
        path: '/tools/api-requester',
    },
    {
        id: 3,
        name: 'Self ORM',
        description: 'Test your database with self ORMs.',
        imageUrl: 'https://img.icons8.com/?size=200&id=64502&format=png&color=000000',
        path: '/tools/self-orm',
    },
    // Adicione mais ferramentas conforme necessário
];

const ToolsPage: React.FC = () => {
    return (
        <PageContainer>
            <ToolsContainer>
                {toolsData.map((tool) => (
                    <ToolCard key={tool.id} tool={tool} />
                ))}
            </ToolsContainer>
        </PageContainer>
    );

};


export default ToolsPage;
