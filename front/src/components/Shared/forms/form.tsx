/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, Fragment } from "react";
import { containerStyle, formStyle } from "../../../assets/form-style";

export interface FormField {
  name: string;
  label: string;
  type: string;
}

export interface FormData {
  [key: string]: string;
}

interface FormProps {
  fields: FormField[];
  onSubmit: (data: FormData) => void;
}

const Form: React.FC<FormProps> = ({ fields, onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} css={formStyle}>
      {fields.map((field) => (
        <Fragment key={field.name}>
          <label htmlFor={field.name}>{field.label}</label>
          <input
            type={field.type}
            id={field.name}
            name={field.name}
            value={formData[field.name] || ""}
            onChange={handleChange}
          />
        </Fragment>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
