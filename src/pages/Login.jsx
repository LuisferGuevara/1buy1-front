import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Login.scss";
import { loginUser } from "../redux/Auth/auth.functions";

const Login = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const { error, isLoading } = useSelector((state) => state.auth);

  const login = (formdata) => {
    loginUser(formdata, navigate, dispatch);
  };

  return (
    <div className="login">
      <div className="login--container">
        {error && <h2 className="error">{error}</h2>}

        {isLoading && <h2 className="loading">Iniciando sesión</h2>}

        <form onSubmit={handleSubmit(login)}>
          <h1>Acceso a Mi cuenta</h1>
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
              {errors.email.type === "required" && <p className="error">{errors.email.message}</p>}
              {errors.email.type === "pattern" && <p className="error">{errors.email.message}</p>}
            </>
          ) : null}

          <label>
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              className="input"
              {...register("password", {
                required: "Introduce una contraseña",
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
                  message:
                    "Mínimo una minúscula, una mayúscula, un número y caracter especial. De 8 a 12 caracteres de largo.",
                },
              })}
            />
          </label>
          {errors.password ? (
            <>
              {errors.password.type === "required" && (
                <p className="error">{errors.password.message}</p>
              )}
              {errors.password.type === "pattern" && (
                <p className="error">{errors.password.message}</p>
              )}
            </>
          ) : null}
          <p className="form--register">
            ¿Eres nuevo? <NavLink to="/register">Crear cuenta</NavLink>
          </p>
          <button className="button">Enviar</button>
        </form>

        <div className="login--links">
          <a href="/" target="_blank">
            <img
              src="https://res.cloudinary.com/dfxn0bmo9/image/upload/v1670173557/icons/socialMedia-03_ohyzkf.svg"
              alt="logo de Google"
            />
            Accede con GOOGLE
          </a>
          <a href="/" target="_blank">
            <img
              src="https://res.cloudinary.com/dfxn0bmo9/image/upload/v1670173557/icons/socialMedia-04_jekc42.svg"
              alt="logo de Google"
            />
            Accede con FACEBOOK
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
