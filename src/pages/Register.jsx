import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { postUser } from "../redux/Auth/auth.functions";
import "../styles/Register.scss";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registerUser = async (data) => {
    postUser(data, navigate, dispatch);
  };

  return (
    <div className="register--box">
      <div className="register--container">
        <form onSubmit={handleSubmit(registerUser)}>
        <h1>Registrate</h1>
          <label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input"
              {...register("email", {
                required: "Introduce un email",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Introduce un email válido",
                },
              })}
            />
          </label>
          {errors.email ? (
            <>
              {errors.email.type === "required" && (
                <p>{errors.email.message}</p>
              )}
              {errors.email.type === "pattern" && <p>{errors.email.message}</p>}
            </>
          ) : null}

          <label>
            <input
              type="password"
              name="password"
            placeholder="Contraseña"
            className="input"
              {...register("password", {required: "Introduce una contraseña",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
                  message: "Mínimo una minúscula, una mayúscula, un número y caracter especial. De 8 a 12 caracteres de largo.",
                },
                })}
            />
          </label>
          {errors.password ? (
            <>
              {errors.password.type === "required" && (
                <p>{errors.password.message}</p>
              )}
              {errors.password.type === "pattern" && (
                <p>{errors.password.message}</p>
              )}
            </>
          ) : null}
          <button className="button">Enviar</button>
        </form>
        <div className="login--links">
            <a href="/" target="_blank">
              <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="logo de Google" /> 
              Registrate con GOOGLE
            </a>
            <a href="/" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png" alt="logo de Google" /> 
            Resgistrate con FACEBOOK</a>
          </div>
      </div>
    </div>
  );
};

export default Register;