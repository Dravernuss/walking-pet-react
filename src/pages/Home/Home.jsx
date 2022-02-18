import "./_Home.scss";
import LayoutInicial from "../../components/LayoutInicial/LayoutInicial";
import imagenes from "../../images/imagenes.jsx";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <LayoutInicial>
      <div className="home__box">
        <h1 className="home__box-title">WALKINGPET</h1>
        <p className="home__box-description">
          La aplicación web donde puedes encontrar de manera segura a alguien
          que cuide y pasee a tu canino favorito.
        </p>

        <button className="home__box-button">
          <Link to="/login">Ingresar a</Link>
          <img className="logoPerrito" src={imagenes.img1} alt="..."></img>
        </button>
      </div>
    </LayoutInicial>
  );
};

export default Home;
