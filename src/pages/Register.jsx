import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
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
        <h1>Register</h1>
        <form onSubmit={handleSubmit(registerUser)}>
          <label>
            Email
            <input
              type="text"
              {...register("email", {
                required: "Introduce un email",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i,
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
            Contraseña
            <input
              type="password"
              {...register("password", {
                required: "Introduce una contraseña",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
                  message:
                    "Mínimo una minúscula, una mayúscula, un número y caracter especial. De 8 a 12 caracteres de largo.",
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
          <button className="glow-on-hover">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Register;