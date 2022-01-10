import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import NavBar from "../../components/navBar/NavBar";
import imagenes from "../../components/images/imagenes.jsx";
import Rating from "@mui/material/Rating";
import "./_PrincipalPage.scss";

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
            <div className="card">
              <img className="card-img-top" src={imagenes.img3} alt="..."></img>
              <figcaption>
                <span>S./ 16</span>
              </figcaption>
              <h2 className="card-title">Helen Arias</h2>
              <Rating
                name="read-only"
                value={4.9}
                precision={0.5}
                size="large"
                readOnly
              />
              <p className="card-calification">4.9</p>
              <p className="card-text">
                Los perros tambien son el mejor amigo de las mujeres.
                <br></br>
                <span>15 calificaciones | 19 paseos realizados</span>
              </p>
              <Button className="btn" href=" ">
                <img className="dogButton" src={imagenes.img9} alt="..."></img>
                Quiero un paseo
              </Button>
            </div>

            <div className="card">
              <img className="card-img-top" src={imagenes.img4} alt="..."></img>
              <figcaption>
                <span>S./ 15</span>
              </figcaption>
              <h2 className="card-title">Alex Marino</h2>
              <Rating
                name="read-only"
                value={4.8}
                precision={0.5}
                size="large"
                readOnly
              />
              <p className="card-calification">4.8</p>
              <p className="card-text">
                Entrenador de perros profesional.
                <br></br>
                <br></br>
                <span>7 calificaciones | 13 paseos realizados</span>
              </p>
              <Button className="btn" href=" ">
                <img className="dogButton" src={imagenes.img9} alt="..."></img>
                Quiero un paseo
              </Button>
            </div>

            <div className="card">
              <img className="card-img-top" src={imagenes.img5} alt="..."></img>
              <figcaption>
                <span>S./ 18</span>
              </figcaption>
              <h2 className="card-title">Javier Sandoval</h2>
              <Rating
                name="read-only"
                value={5.0}
                precision={0.5}
                size="large"
                readOnly
              />
              <p className="card-calification">5.0</p>
              <p className="card-text">
                El más confiable para tu amigo canino!
                <br></br>
                <br></br>
                <span>21 calificaciones | 24 paseos realizados</span>
              </p>
              <Button className="btn" href=" ">
                <img className="dogButton" src={imagenes.img9} alt="..."></img>
                Quiero un paseo
              </Button>
            </div>

            <div className="card">
              <img className="card-img-top" src={imagenes.img6} alt="..."></img>
              <figcaption>
                <span>S./ 20</span>
              </figcaption>
              <h2 className="card-title">Susan Avila</h2>
              <Rating
                name="read-only"
                value={5.0}
                precision={0.5}
                size="large"
                readOnly
              />
              <p className="card-calification">5.0</p>
              <p className="card-text">
                Tu perruno y yo nos vamos a llevar muy bien!
                <br></br>
                <span>15 calificaciones | 19 paseos realizados</span>
              </p>
              <Button className="btn" href=" ">
                <img className="dogButton" src={imagenes.img9} alt="..."></img>
                Quiero un paseo
              </Button>
            </div>

            <div className="card">
              <img className="card-img-top" src={imagenes.img7} alt="..."></img>
              <figcaption>
                <span>S./ 18</span>
              </figcaption>
              <h2 className="card-title">Nestor Magariño</h2>
              <Rating
                name="read-only"
                value={4.9}
                precision={0.5}
                size="large"
                readOnly
              />
              <p className="card-calification">4.9</p>
              <p className="card-text">
                El mejor cuidador de perros!
                <br></br>
                <br></br>
                <span>7 calificaciones | 13 paseos realizados</span>
              </p>
              <Button className="btn" href=" ">
                <img className="dogButton" src={imagenes.img9} alt="..."></img>
                Quiero un paseo
              </Button>
            </div>

            <div className="card">
              <img className="card-img-top" src={imagenes.img8} alt="..."></img>
              <figcaption>
                <span>S./ 15</span>
              </figcaption>
              <h2 className="card-title">Helen Arias</h2>
              <Rating
                name="read-only"
                value={4.5}
                precision={0.5}
                size="large"
                readOnly
              />
              <p className="card-calification">4.5</p>
              <p className="card-text">
                Solo un alma buena simpatiza con el alma de un perro.
                <br></br>
                <span>21 calificaciones | 24 paseos realizados</span>
              </p>
              <Button className="btn" href=" ">
                <img className="dogButton" src={imagenes.img9} alt="..."></img>
                Quiero un paseo
              </Button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default PrincipalPage;
