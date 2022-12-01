import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../styles/Login.scss";
import { loginUser } from "../redux/Auth/auth.functions"

const Login = () => {

  const dispatch = useDispatch();
  const {register, handleSubmit, formState: { errors }} = useForm();
  const navigate = useNavigate();

  const { error, isLoading } = useSelector((state) => state.auth);

  const login = (formdata) => {
    loginUser(formdata, navigate, dispatch);
  };

  return (
    <div className="login page">
      <div className="container">

        {error && <h2 className="error">{error}</h2>}

        {isLoading && <h2 className="loading">Iniciando sesión</h2>}

        <form onSubmit={handleSubmit(login)}>
          <h1>Iniciar sesión</h1>
          <label>
            Email
            <input
              type="email"
              name="email"
              {...register("email", {
                required: "Introduce an email",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "The email does not exist",
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
            Contraseña
            <input
              type="password"
              name="password"
              {...register("password", {required: "Introduce a password",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
                  message: "The password is incorrect",
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
          <button>Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
