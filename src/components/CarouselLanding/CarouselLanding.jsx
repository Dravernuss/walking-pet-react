import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Grid from "@mui/material/Grid";
import "./_CarouselLanding.scss";
import { useState } from "react";
import imagenes from "../../images/imagenes";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: "Encuentra un paseador por tu zona",
    imgPath: imagenes.img23,
  },
  {
    label: "Selecciona un horario y reserva una cita",
    imgPath: imagenes.img24,
  },
  {
    label: "Espera la confirmacion del paseador",
    imgPath: imagenes.img25,
  },
  {
    label: "Listo! Tu mascota vivirá una gran experiencia",
    imgPath: imagenes.img26,
  },
  {
    label: "Tu opinion es Importante, no olvides calificar al paseador",
    imgPath: imagenes.img27,
  },
];

function CarouselLanding() {
  const theme = useTheme();

  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className="container-c">
      <div className="item-c">
        <Paper
          style={{ padding: "0px 30px", backgroundColor: "rgba(0, 0, 0, 0.0)" }}
          square
          elevation={0}
          className="typoContainer"
        >
          <Typography className="textHeader">
            {tutorialSteps[activeStep].label}
          </Typography>
        </Paper>
      </div>
      <div className="item-c">
        {/* <Button
          className="button-c"
          style={{
            backgroundColor: "rgba(255,255,255)",
            border: "1px solid grey",
          }}
          size="small"
          onClick={handleBack}
          disabled={activeStep === 0}
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
        </Button> */}
        <div className="root">
          <AutoPlaySwipeableViews
            interval={5000}
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {tutorialSteps.map((step, index) => (
              <div key={step.label} className="imgContainer">
                {Math.abs(activeStep - index) <= 2 ? (
                  <img
                    className="imgCarrousel"
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "rgba(0, 0, 0, 0.0)",
            }}
            steps={maxSteps}
            position="static"
            variant="dots"
            activeStep={activeStep}
          />
        </div>
        {/* <Button
          className="button-c"
          size="small"
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button> */}
      </div>
    </div>
  );
}

export default CarouselLanding;
