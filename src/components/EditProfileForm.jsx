import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { putUser } from "../redux/Auth/auth.functions";
import "../styles/Profile.scss";

const EditProfileForm = ({ setEdit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const dispatch = useDispatch();

  const { error, isLoading, user } = useSelector((state) => state.auth);

  useEffect(() => {
    setValue("name", user?.name);
    setValue("lastName", user?.lastName);
    setValue("region", user?.region);
  }, [user, setValue]);

  const editUser = async (data) => {
    putUser(data, dispatch, user._id, setEdit);
  };

  return (
    <div className="register--box update--profile">
      <div className="register--container">
        {error && <h2 className="error">{error}</h2>}

        {isLoading && <h2 className="loading">Iniciando sesión</h2>}

        <form onSubmit={handleSubmit(editUser)}>
          <h1>Actualiza Tus Datos Personales</h1>
          <label>
            <input
              type="text"
              defaultValue={user?.name}
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
              defaultValue={user?.lastName}
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
            <select
              className="select"
              {...register("region", {
                validate: (value) =>
                  value !== "" || "Tienes que elegir una Comunidad Autónoma para continuar",
              })}
            >
              <option value="">Elige tu Comunidad Autónoma</option>
              <option value="Andalucía" selected={user?.region === "Andalucía" ? true : false}>
                Andalucía
              </option>
              <option value="Aragón" selected={user?.region === "Aragón" ? true : false}>
                Aragón
              </option>
              <option
                value="Principado de Asturias"
                selected={user?.region === "Principado de Asturias" ? true : false}
              >
                Principado de Asturias
              </option>
              <option
                value="Islas Baleares"
                selected={user?.region === "Islas Baleares" ? true : false}
              >
                Islas Baleares
              </option>
              <option
                value="Islas Canarias"
                selected={user?.region === "Islas Canarias" ? true : false}
              >
                Islas Canarias
              </option>
              <option value="Cantabria" selected={user?.region === "Cantabria" ? true : false}>
                Cantabria
              </option>
              <option
                value="Castilla y León"
                selected={user?.region === "Castilla y León" ? true : false}
              >
                Castilla y León
              </option>
              <option
                value="Castilla-La Mancha"
                selected={user?.region === "Castilla-La Mancha" ? true : false}
              >
                Castilla-La Mancha
              </option>
              <option value="Cataluña" selected={user?.region === "Cataluña" ? true : false}>
                Cataluña
              </option>
              <option
                value="Comunidad Valenciana"
                selected={user?.region === "Comunidad Valenciana" ? true : false}
              >
                Comunidad Valenciana
              </option>
              <option value="Extremadura" selected={user?.region === "Extremadura" ? true : false}>
                Extremadura
              </option>
              <option value="Galicia" selected={user?.region === "Galicia" ? true : false}>
                Galicia
              </option>
              <option
                value="Comunidad de Madrid"
                selected={user?.region === "Comunidad de Madrid" ? true : false}
              >
                Comunidad de Madrid
              </option>
              <option
                value="Región de Murcia"
                selected={user?.region === "Región de Murcia" ? true : false}
              >
                Región de Murcia
              </option>
              <option
                value="Comunidad Foral de Navarra"
                selected={user?.region === "Comunidad Foral de Navarra" ? true : false}
              >
                Comunidad Foral de Navarra
              </option>
              <option value="País Vasco" selected={user?.region === "País Vasco" ? true : false}>
                País Vasco
              </option>
              <option value="La Rioja" selected={user?.region === "La Rioja" ? true : false}>
                La Rioja
              </option>
              <option value="Ceuta" selected={user?.region === "Ceuta" ? true : false}>
                Ceuta
              </option>
              <option value="Melilla" selected={user?.region === "Melilla" ? true : false}>
                Melilla
              </option>
            </select>
          </label>
          {errors.region ? (
            <>
              {errors.region.type === "validate" && (
                <p className="error">{errors.region.message}</p>
              )}
            </>
          ) : null}
          <div className="submit--box">
            <button className="button">Actualizar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileForm;
