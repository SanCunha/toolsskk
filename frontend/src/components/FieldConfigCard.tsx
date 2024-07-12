import React, { useState } from 'react';
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
import styled from 'styled-components';
import { DropdownButton, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  margin: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Field = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.label`
  font-weight: bold;
`;

interface FieldConfigCardProps {
    initialConfig: FieldConfig;
    onSave: (config: FieldConfig) => void;
}

const FieldConfigCard: React.FC<FieldConfigCardProps> = ({ initialConfig, onSave }) => {
    const [config, setConfig] = useState<FieldConfig>(initialConfig);
    const [showAdvanced, setShowAdvanced] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            const { checked } = e.target as HTMLInputElement;
            setConfig((prevConfig) => ({
                ...prevConfig,
                [name]: checked,
            }));
        } else {
            setConfig((prevConfig) => ({
                ...prevConfig,
                [name]: value,
            }));
        }
    };

    const handleSave = () => {
        onSave(config);
    };

    return (
        <Card>
            <h3>Configurar Campo</h3>
            <Field>
                <Label>Tipo:</Label>
                <Form.Control type="text" name="type" value={config.type} onChange={handleChange} />
            </Field>
            <Field>
                <Label>Seção:</Label>
                <Form.Control type="text" name="section" value={config.section} onChange={handleChange} required />
            </Field>
            <Field>
                <Label>Nome:</Label>
                <Form.Control type="text" name="name" value={config.name || ''} onChange={handleChange} />
            </Field>
            <Field>
                <Label>Rótulo:</Label>
                <Form.Control type="text" name="label" value={config.label || ''} onChange={handleChange} />
            </Field>
            <Field>
                <Label>Obrigatório:</Label>
                <Form.Check type="checkbox" name="required" checked={config.required || false} onChange={handleChange} />
            </Field>

            <DropdownButton id="dropdown-basic-button" title="Opções Avançadas" onClick={() => setShowAdvanced(!showAdvanced)}>
                {showAdvanced && (
                    <div>
                        <Field>
                            <Label>Valor:</Label>
                            <Form.Control type="text" name="value" value={config.value || ''} onChange={handleChange} />
                        </Field>
                        <Field>
                            <Label>Padrão:</Label>
                            <Form.Control type="text" name="pattern" value={config.pattern || ''} onChange={handleChange} />
                        </Field>
                        <Field>
                            <Label>Mín. Caracteres:</Label>
                            <Form.Control type="number" name="minlength" value={config.minlength || ''} onChange={handleChange} />
                        </Field>
                        <Field>
                            <Label>Máx. Caracteres:</Label>
                            <Form.Control type="number" name="maxlength" value={config.maxlength || ''} onChange={handleChange} />
                        </Field>
                        <Field>
                            <Label>Valor Mínimo:</Label>
                            <Form.Control type="number" name="min" value={config.min || ''} onChange={handleChange} />
                        </Field>
                        <Field>
                            <Label>Valor Máximo:</Label>
                            <Form.Control type="number" name="max" value={config.max || ''} onChange={handleChange} />
                        </Field>
                        <Field>
                            <Label>Estilo:</Label>
                            <Form.Control type="text" name="style" value={config.style || ''} onChange={handleChange} />
                        </Field>
                        {config.type === 'select' && (
                            <div>
                                <h4>Opções</h4>
                                {config.options?.map((option, index) => (
                                    <Field key={index}>
                                        <Label>Valor:</Label>
                                        <Form.Control
                                            type="text"
                                            value={option.value}
                                            onChange={(e) => {
                                                const newOptions = [...(config.options || [])];
                                                newOptions[index].value = e.target.value;
                                                setConfig({ ...config, options: newOptions });
                                            }}
                                        />
                                        <Label>Rótulo:</Label>
                                        <Form.Control
                                            type="text"
                                            value={option.label}
                                            onChange={(e) => {
                                                const newOptions = [...(config.options || [])];
                                                newOptions[index].label = e.target.value;
                                                setConfig({ ...config, options: newOptions });
                                            }}
                                        />
                                        <Button
                                            variant="danger"
                                            onClick={() => {
                                                const newOptions = [...(config.options || [])];
                                                newOptions.splice(index, 1);
                                                setConfig({ ...config, options: newOptions });
                                            }}
                                        >
                                            Remover
                                        </Button>
                                    </Field>
                                ))}
                                <Button
                                    variant="primary"
                                    onClick={() => {
                                        const newOptions = [...(config.options || []), { value: '', label: '' }];
                                        setConfig({ ...config, options: newOptions });
                                    }}
                                >
                                    Adicionar Opção
                                </Button>
                            </div>
                        )}
                    </div>
                )}
            </DropdownButton>
            <Button variant="success" onClick={handleSave} style={{ marginTop: '20px' }}>
                Salvar
            </Button>
        </Card>
    );
};

export default FieldConfigCard;
