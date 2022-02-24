import "./_LandingPage.scss";
import imagenes from "../../images/imagenes.jsx";
import { Button } from "@mui/material";
import CarouselLanding from "../../components/CarouselLanding/CarouselLanding.jsx";

const LandingPage = () => {
  return (
    <div>
      <section className="section__One">
        <img src={imagenes.img18} className="logoBlanco" alt=""></img>
        <div className="buttonGroup">
          <Button variant="contained" className="botonHome" href="/login">
            Ingresar
          </Button>
          <Button variant="contained" className="botonHome" href="/register">
            Registrate
          </Button>
        </div>
      </section>
      <section className="section__Two">
        <img src={imagenes.img19} className="pataCirculo" alt=""></img>
        <div className="whatIs">
          <h1>¿Qué es WalkingPet?</h1>
          <br></br>
          <p>
            La aplicación web donde puedes encontrar de manera segura a alguien
            que cuide y pasee a tu canino favorito.
          </p>
        </div>
      </section>
      <section className="section__Three">
        <CarouselLanding />
      </section>
      <footer className="footerHome">
        <div className="footerImages">
          <p>Síguenos</p>
          <img src={imagenes.img20} className="redesSociales" alt=""></img>
          <img src={imagenes.img21} className="redesSociales" alt=""></img>
          <img src={imagenes.img22} className="redesSociales" alt=""></img>
        </div>
        <p className="footerEnd">WalkingPet - 2022 ©</p>
      </footer>
    </div>
  );
};

export default LandingPage;
