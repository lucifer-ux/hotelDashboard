import React from 'react';
import './UseForm.css';
import Button from '../Button/Button';

type InputField = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  note?: string;
};

type Props = {
  fields: InputField[];
  formData: Record<string, string>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
};

const UserForm: React.FC<Props> = ({ fields, formData, onChange, handleSubmit }) => {
  return (
    <div className="user-form-container">
      <h2 className="form-heading">Create New User</h2>
      <p className="form-subheading">Add a new user to the system</p>
      <form className="user-form">
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
            {field.note && <small className="form-note">{field.note}</small>}
          </div>
        ))}
      </form>
      <div className='userFormButtonContainer'>
        <Button text='Submit' onClick={handleSubmit}/>
      </div>
    </div>
  );
};

export default UserForm;
