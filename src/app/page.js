'use client'
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const onChangeInput = (event) => {
    const inputId = `#${event.target.id}`;
    const viewId = inputId.replace("-input", "-view");
    const inputValue = document.querySelector(inputId).value;
    document.querySelector(viewId).textContent = inputValue;
  }
  return (
    <div className="container">
    <section className="profile-main">
      <div className="profile-main-item profile-main-form">
        <form action="">
          <div className="input-container">
            <label htmlFor="profile-photo">Foto de perfil:</label>
            <input type="file" id="profile-photo" />
          </div>
          <div className="input-container">
            <label htmlFor="name-input">Nombre:</label>
            <input
              type="text"
              className="input-container-text"
              id="name-input"
              onKeyUp={onChangeInput}
            />
          </div>
          <div className="input-container">
            <label htmlFor="email-input">Correo Electónico:</label>
            <input
              type="text"
              className="input-container-text"
              id="email-input"
              onKeyUp={onChangeInput}
            />
          </div>
          <div className="input-container">
            <label htmlFor="phone-input">Teléfono:</label>
            <input
              type="text"
              className="input-container-text"
              id="phone-input"
              onKeyUp={onChangeInput}
            />
          </div>
        </form>
      </div>
      <div className="profile-main-item profile-main-view">
        <div className="profile-main-view-image">
          <img
            src="/images/image.svg"
            alt="Imagen de perfil"
            className="img-profile"
            width="250px"
            height="250px"
          />
        </div>
        <div className="profile-main-view-item">
          <div className="profile-item">
            <h2 id="name-view">Nombre</h2>
          </div>
          <div className="profile-item">
            <img
              src="/images/email.svg"
              alt="Icono deCorreo Electónico"
              width="25px"
              height="25px"
            />
            <span id="email-view">Correo electrónico</span>
          </div>
          <div className="profile-item">
            <img
              src="/images/phone.svg"
              alt="Icono de Teléfono"
              width="25px"
              height="25px"
            />
            <span id="phone-view">Teléfono</span>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
}
