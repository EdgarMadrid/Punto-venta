import React from "react";
import Input from "./component/input/Input";
import Label from "./component/label/Label";
import Title from "./component/title/Title";
import { useState, useEffect } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const history = useNavigate()
  const [login, setLogin] = useState(false)
  const [form, setForm] = useState({
    user: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  console.log(form);

  const validarLogin = async () => {
    const data = {
      user: "",
      password: "",
    };

    data.user = form.user;
    data.password = form.password;

    console.log("validando datos", data);
    setLogin(true)
  };


  useEffect(() => {
    if(login == true){
      history('/Registro')
    }
  }, [login])

  return (
    <div className="container">
      <div className="container-login">
        <Title />

        <div className="form-login">
          <Label label="Usuario" id="user" />
          <Input
            attribute={{
              id: "user",
              type: "text",
              name: "user",
              placeholder: "Ingrese su usuario",
            }}
            handleChange={handleChange}
          />
          <br />
          <Label label="Contraseña" id="password" />
          <Input
            attribute={{
              id: "password",
              type: "password",
              name: "password",
              placeholder: "Ingrese su contraseña",
            }}
            handleChange={handleChange}
          />
          <br />
        </div>
        <br />
        <input  className="button" type="submit" value="Entrar" onClick={() => validarLogin()} />
      </div>
    </div>
  );
};

export default Login;
