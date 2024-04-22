/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, Fragment } from "react";
import { containerStyle, formStyle } from "../../assets/form-style";

const Form = ({ fields, onSubmit }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} css={formStyle}>
      {fields.map((field) => (
        <Fragment key={field.lable}>
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
