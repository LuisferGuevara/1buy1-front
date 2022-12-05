import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
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

  const { error, isLoading } = useSelector((state) => state.auth);

  const registerUser = async (data) => {
    delete data.tou;
    postUser(data, navigate, dispatch);
  };

  return (
    <div className="register--box">
      <div className="register--container">
      {error && <h2 className="error">{error}</h2>}

      {isLoading && <h2 className="loading">Iniciando sesión</h2>}

        <form onSubmit={handleSubmit(registerUser)}>
          <h1>Regístrate</h1>
          <label>
            <input
              type="text"
              placeholder="Nombre"
              className="input"
              {...register("name", {
                required: "Introduce un nombre",
                pattern: {
                  value: /^(?=.*[a-z])\w{4,16}$/i,
                  message: "El nombre debe tener entre 4 y 16 caracteres",
                },
              })}
            />
          </label>
          {errors.name ? (
            <>
              {errors.name.type === "required" && <p className="error">{errors.name.message}</p>}
              {errors.name.type === "pattern" && <p className="error">{errors.name.message}</p>}
            </>
          ) : null}
          <label>
            <input
              type="text"
              placeholder="Apellidos"
              className="input"
              {...register("lastName", {
                required: "Introduce un apellido",
                pattern: {
                  value: /^(?=.*[a-z])\w{2,40}$/i,
                  message: "Los apellidos deben tener entre 2 y 40 caracteres",
                },
              })}
            />
          </label>
          {errors.lastName ? (
            <>
              {errors.lastName.type === "required" && (
                <p className="error">{errors.lastName.message}</p>
              )}
              {errors.lastName.type === "pattern" && (
                <p className="error">{errors.lastName.message}</p>
              )}
            </>
          ) : null}
          <label>
            <input
              type="email"
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
          <label>
            <select
              className="select"
              {...register("region", {
                validate: (value) =>
                  value !== "" || "Tienes que elegir una Comunidad Autónoma para continuar",
              })}
            >
              <option value="">Elige tu Comunidad Autónoma</option>
              <option value="Andalucía">Andalucía</option>
              <option value="Aragón">Aragón</option>
              <option value="Principado de Asturias">Principado de Asturias</option>
              <option value="Islas Baleares">Islas Baleares</option>
              <option value="Islas Canarias">Islas Canarias</option>
              <option value="Cantabria">Cantabria</option>
              <option value="Castilla y León">Castilla y León</option>
              <option value="Castilla-La Mancha">Castilla-La Mancha</option>
              <option value="Cataluña">Cataluña</option>
              <option value="Comunidad Valenciana">Comunidad Valenciana</option>
              <option value="Extremadura">Extremadura</option>
              <option value="Galicia">Galicia</option>
              <option value="Comunidad de Madrid">Comunidad de Madrid</option>
              <option value="Región de Murcia">Región de Murcia</option>
              <option value="Comunidad Foral de Navarra">Comunidad Foral de Navarra</option>
              <option value="País Vasco">País Vasco</option>
              <option value="La Rioja">La Rioja</option>
              <option value="Ceuta">Ceuta</option>
              <option value="Melilla">Melilla</option>
            </select>
          </label>
          {errors.region ? (
            <>
              {errors.region.type === "validate" && (
                <p className="error">{errors.region.message}</p>
              )}
            </>
          ) : null}
          <label className="tou">
            <input
              type="checkbox"
              {...register("tou", {
                required: "Acepta los Terminos y Condiciones de Uso para continuar",
              })}
            />
            <span>
              He leído y acepto los{" "}
              <a className="tou--link" href="http://www.google.es" target="_blank" rel="noreferrer">
                Términos y Condiciones de Uso
              </a>
            </span>
          </label>
          {errors.tou ? (
            <>{errors.tou.type === "required" && <p className="error">{errors.tou.message}</p>}</>
          ) : null}
          <div className="submit--box">

            <button className="button">Enviar</button>
          </div>
        </form>
        <div className="login--links">
          <a href="/" target="_blank">
            <img
              src="https://res.cloudinary.com/dfxn0bmo9/image/upload/v1670173557/icons/socialMedia-03_ohyzkf.svg"
              alt="logo de Google"
            />
            Regístrate con GOOGLE
          </a>
          <a href="/" target="_blank">
            <img
              src="https://res.cloudinary.com/dfxn0bmo9/image/upload/v1670173557/icons/socialMedia-04_jekc42.svg"
              alt="logo de Google"
            />
            Regístrate con FACEBOOK
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
