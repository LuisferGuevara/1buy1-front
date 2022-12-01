import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postUser } from '../redux/Auth/auth.actions';
import "../styles/Register.scss";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors},
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
              required: "Enter an email",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i,
                message: "Thats not a valid email",
              },
            })}
          />
        </label>
        {errors.email ? (
          <>
            {errors.email.type === "required" && <p>{errors.email.message}</p>}
            {errors.email.type === "pattern" && <p>{errors.email.message}</p>}
          </>
        ) : null}
        <label>
          Password
          <input type="password" {...register("password")} />
        </label>
        <button className="glow-on-hover">Send</button>
      </form>
    </div>
    </div>
  );
}

export default Register