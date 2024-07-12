// src/components/HtmlFormRenderer.tsx
import React, { useState } from 'react';
import FieldConfigCard from './FieldConfigCard';

interface FieldConfig {
    type: string;
    name?: string;
    label?: string;
    value?: string;
    required?: boolean;
    pattern?: string;
    minlength?: number;
    maxlength?: number;
    min?: number;
    max?: number;
    options?: { value: string; label: string }[];
    style?: string;
    section: string;
}

const HtmlFormRenderer: React.FC = () => {
    const [fieldConfigs, setFieldConfigs] = useState<FieldConfig[]>([]);

    const handleSaveConfig = (config: FieldConfig) => {
        setFieldConfigs((prevConfigs) => [...prevConfigs, config]);
    };

    return (
        <div>
            <h1>Configuração de Campos</h1>
            <FieldConfigCard
                initialConfig={{
                    type: '',
                    section: 'page1',
                }}
                onSave={handleSaveConfig}
            />
            <div>
                <h2>Configurações Salvas</h2>
                {fieldConfigs.map((config, index) => (
                    <div key={index}>
                        <pre>{JSON.stringify(config, null, 2)}</pre>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HtmlFormRenderer;
