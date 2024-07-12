import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Tool } from '../types';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  width: 200px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
`;

const Name = styled.h3`
  margin: 10px 0;
`;

const Description = styled.p`
  text-align: center;
  font-size: 14px;
  color: #555;
`;

interface ToolCardProps {
    tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(tool.path);
    };

    return (
        <Card onClick={handleClick}>
            <Image src={tool.imageUrl} alt={tool.name} />
            <Name>{tool.name}</Name>
            <Description>{tool.description}</Description>
        </Card>
    );
};

export default ToolCard;
