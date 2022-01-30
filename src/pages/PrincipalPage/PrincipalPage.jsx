import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import NavBar from "../../components/navBar/NavBar";
import imagenes from "../../images/imagenes.jsx";
import Rating from "@mui/material/Rating";
import "./_PrincipalPage.scss";
import WalkerCard from "../../components/WalkerCard/WalkerCard";

const PrincipalPage = () => {
  return (
    <div className="home">
      <NavBar />
      <div className="main_container">
        <section>
          <article>
            <h2>Selecciona tu distrito</h2>
            <div className="list-group">
              <ButtonGroup
                orientation="vertical"
                aria-label="vertical outlined button group"
              >
                <Button className="btn">Miraflores</Button>
                <Button className="btn">Breña</Button>
                <Button className="btn">San Isidro</Button>
                <Button className="btn">Barranco</Button>
                <Button className="btn">La Molina</Button>
                <Button className="btn">Callao</Button>
                <Button className="btn">Cercado de Lima</Button>
                <Button className="btn">San Martin de Porres</Button>
                <Button className="btn">San Miguel</Button>
              </ButtonGroup>
            </div>
          </article>
        </section>
        <aside>
          <div className="card_container">
            <WalkerCard
              photo={imagenes.img3}
              price="16"
              name="Helen Arias"
              ratingValue="4.9"
              text="Los perros tambien son el mejor amigo de las mujeres."
              calification="15 calificaciones | 19 paseos realizados"
            />
            <WalkerCard
              photo={imagenes.img4}
              price="15"
              name="Alex Marino"
              ratingValue="4.8"
              text="Entrenador de perros profesional."
              calification="7 calificaciones | 13 paseos realizados"
            />
            <WalkerCard
              photo={imagenes.img5}
              price="18"
              name="Javier Sandoval"
              ratingValue="5.0"
              text="El más confiable para tu amigo canino!"
              calification="21 calificaciones | 24 paseos realizados"
            />
            <WalkerCard
              photo={imagenes.img6}
              price="20"
              name="Susan Avila"
              ratingValue="5.0"
              text="Tu perruno y yo nos vamos a llevar muy bien!"
              calification="15 calificaciones | 19 paseos realizados"
            />
            <WalkerCard
              photo={imagenes.img7}
              price="18"
              name="Nestor Magariño"
              ratingValue="4.9"
              text="El mejor cuidador de perros!"
              calification="7 calificaciones | 13 paseos realizados"
            />
            <WalkerCard
              photo={imagenes.img8}
              price="15"
              name="Luna Agreda"
              ratingValue="4.5"
              text="Solo un alma buena simpatiza con el alma de un perro."
              calification="21 calificaciones | 24 paseos realizados"
            />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default PrincipalPage;
