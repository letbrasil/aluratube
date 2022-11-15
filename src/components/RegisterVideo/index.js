import React from "react";
import { StyledRegisterVideo } from "./styles";

// Custom Hook
function useForm(formProps) {
  const [values, setValues] = React.useState(formProps.initialValues);

  return {
    values,
    handleChange: (e) => {
      const value = e.target.value;
      const name = e.target.name;
      setValues({ ...values, [name]: value });
    },
    clearForm() {
      setValues({});
    }
  };
}

export default function RegisterVideo() {
  const registerForm = useForm({
    initialValues: { title: "Frost punk", url: "https://youtube.com/" }
  });
  const [visibleForm, setVisibleForm] = React.useState(false);

  return (
    <StyledRegisterVideo>
      <button className="add-video" onClick={() => setVisibleForm(true)}>+</button>
      {/* Ternário; pode ser usado tbm operadores de curto-circuito (&&) */}
      {visibleForm ? (
        <form onSubmit={(e) => {
          e.preventDefault();
          console.log(registerForm.values);
          setVisibleForm(false);
          registerForm.clearForm();
        }}>
          <div>
            <button type="button" className="close-modal" onClick={() => setVisibleForm(false)}>X</button>
            <input
              placeholder="Título do vídeo"
              name="title"
              value={registerForm.values.title}
              onChange={registerForm.handleChange}
            />
            <input
              placeholder="URL"
              name="url"
              value={registerForm.values.url}
              onChange={registerForm.handleChange}
            />
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      ) : false}
    </StyledRegisterVideo>
  );
}
