import React, { useState } from "react";
import EditProfileForm from '../components/EditProfileForm'
import { useSelector } from "react-redux";
import "../styles/Profile.scss";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const [ edit, setEdit ] = useState(false);

  return (
    <>
      {!edit ? ( 
        <div>
          <h2>Nombre</h2>
          <p>{user?.name}</p>
          <h2>Apellidos</h2>
          <p>{user?.lastName}</p>
          <h2>Región</h2>
          <p>{user?.region}</p>
          <button onClick={() => setEdit(true)}>Editar</button>
        </div>
      ) : <EditProfileForm setEdit={setEdit}/>
      } 

    </>
  )

};

export default Profile;
