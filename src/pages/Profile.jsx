import React, { useState } from "react";
import EditProfileForm from "../components/EditProfileForm";
import { useSelector } from "react-redux";
import "../styles/Profile.scss";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const [edit, setEdit] = useState(false);

  return (
    <>
      {!edit ? (
        <section className="profile--section">
          <div className="profile--container">
            <div className="profile--entry">
              <h2>Nombre: </h2>
              <p>{user?.name}</p>
            </div>
            <div className="profile--entry">
              <h2>Apellidos: </h2>
              <p>{user?.lastName}</p>
            </div>
            <div className="profile--entry">
              <h2>Región: </h2>
              <p>{user?.region}</p>
            </div>
            <button onClick={() => setEdit(true)}>Editar</button>
          </div>
        </section>
      ) : (
        <EditProfileForm setEdit={setEdit} />
      )}
    </>
  );
};

export default Profile;
