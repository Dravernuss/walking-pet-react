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
    label: "Listo! Tu mascota vivirá una gran experiencia.",
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
    <Grid
      container
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontFamily: "Roboto",
      }}
    >
      <Grid lg={6} md={12} item>
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
      </Grid>
      <Grid
        lg={6}
        md={12}
        item
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
        </Button>
        <div className="root">
          <AutoPlaySwipeableViews
            interval={5000}
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {tutorialSteps.map((step, index) => (
              <div key={step.label}>
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
        <Button
          size="small"
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      </Grid>
    </Grid>
  );
}

export default CarouselLanding;
