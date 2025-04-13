import React from 'react';
import Button from '../Button/Button';
import './UseForm.css'

type InputField = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
};

type Props = {
  fields: InputField[];
  formData: Record<string, string>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
};

const UserForm: React.FC<Props> = ({ fields, formData, onChange, handleSubmit }) => {
  return (
    <div className="form-container">
      {fields.map((field) => (
        <div key={field.name} className="form-group">
          <label htmlFor={field.name}>{field.label}</label>
          <input
            id={field.name}
            name={field.name}
            type={field.type || 'text'}
            value={formData[field.name] || ''}
            placeholder={field.placeholder}
            onChange={onChange}
          />
        </div>
      ))}
      <Button text='Submit' onClick={handleSubmit}/>
    </div>
  );
};

export default UserForm;
