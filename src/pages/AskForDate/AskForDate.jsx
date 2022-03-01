import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  Rating,
} from "@mui/material";
import React from "react";
import NavBar from "../../components/navBar/NavBar";
import imagenes from "../../images/imagenes";
import Box from "@mui/material/Box";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

import { distritos, horasPaseo } from "../../utils/constants";
import "./_AskForDate.scss";
import { Price } from "./components/Price";

export const AskForDate = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <NavBar />
      <div className="askForDate">
        <div className="askForDate__container">
          <div className="askForDate__container-title">
            <h1>SOLICITA UNA CITA</h1>
          </div>
          <div className="askForDate__container-data">
            <div className="askForDate__container-data-card">
              <p className="askForDate__container-data-card-selected">
                Paseador seleccionado:
                <span className="askForDate__container-data-card-selected-title">
                  Helen Arias
                </span>
              </p>
              <div className="askForDate__container-data-card-description">
                <img
                  className="card-img-topP"
                  src={imagenes.img3}
                  alt="..."
                ></img>
                <div className="askForDate__container-data-card-description-text">
                  <Rating
                    name="read-only"
                    value={4.9}
                    precision={0.5}
                    size="large"
                    readOnly
                  />
                  <p className="askForDate__container-data-card-description-text-info">
                    Hola soy Helen, me encantan los perritos y pasar tiempo con
                    ellos. En nuestro tiempo juntos pasearemos por algun parque,
                    haremos ejercicio y jugaremos mucho :D
                  </p>
                </div>
              </div>
            </div>
            <div class="askForDate__container-data-select">
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <FormControl className="formAsk">
                  <p>Distrito del paseo:</p>
                  <Select
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    value={age}
                    onChange={handleChange}
                    style={{ width: "200px" }}
                  >
                    <MenuItem value="">
                      <em>Seleccione un distrito</em>
                    </MenuItem>
                    {distritos.map((distrito, i) => (
                      <MenuItem key={i} value={distrito}>
                        {distrito}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <br />
                <FormControl className="formAsk">
                  <p>Fecha del paseo:</p>
                  {/* <Stack component="form" noValidate spacing={3}> */}
                  <TextField
                    id="date"
                    label="Seleccione una fecha"
                    type="date"
                    sx={{ width: 200 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </FormControl>
                <br />
                <FormControl className="formAsk">
                  <p>Hora de inicio:</p>
                  <TextField
                    id="time"
                    label="Seleccione el horario"
                    type="time"
                    defaultValue="12:00"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      step: 300, // 5 min
                    }}
                    sx={{ width: 200 }}
                  />
                  {/* </Stack> */}
                </FormControl>
                <br />
                <FormControl className="formAsk">
                  <p>Cantidad de horas:</p>
                  <Select
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    value={age}
                    onChange={handleChange}
                    style={{ width: "200px" }}
                  >
                    <MenuItem value="">
                      <em>Seleccione la cantidad de horas</em>
                    </MenuItem>
                    {horasPaseo.map((horaPaseo) => (
                      <MenuItem value={horaPaseo}>{horaPaseo} Hora</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </div>
          </div>
          <div className="askForDate__container-fares">
            <div className="askForDate__container-fares-selected">
              <p
                style={{
                  fontFamily: "Roboto-Regular",
                  fontSize: "1.3rem",
                  margin: "20px 0",
                }}
              >
                TARIFAS: (Por Hora){" "}
              </p>
              <div className="askForDate__container-fares-selected-amount">
                <FormControl style={{ width: "100%" }}>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="1"
                    name="radio-buttons-group"
                  >
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                      }}
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="1 Perro"
                      />
                      <Price price={16} />
                    </div>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                      }}
                    >
                      <FormControlLabel
                        value="2"
                        control={<Radio />}
                        label="2 Perros"
                      />
                      <Price price={30} />
                    </div>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                      }}
                    >
                      <FormControlLabel
                        value="3"
                        control={<Radio />}
                        label="3 Perros"
                      />
                      <Price price={45} />
                    </div>
                  </RadioGroup>
                </FormControl>
              </div>
              <div className="askForDate__container-fares-selected-pets">
                <FormControl
                  sx={{ m: 3 }}
                  component="fieldset"
                  variant="standard"
                >
                  <FormLabel component="legend">Seleccionar mascotas</FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          // checked={gilad}
                          // onChange={handleChange}
                          name="pirata"
                        />
                      }
                      label="Pirata"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          // checked={jason}
                          // onChange={handleChange}
                          name="balto"
                        />
                      }
                      label="Balto"
                    />
                  </FormGroup>
                </FormControl>
              </div>
            </div>
            <div className="askForDate__container-fares-confirm">
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#FFFF",
                  color: "#000",
                  width: "35%",
                  padding: "10px 0",
                  margin: "30px auto 0",
                  borderRadius: "15px",
                  fontSize: "16px",
                  fontFamily: "Roboto-bold",
                }}
                onClick={console.log("submited")}
              >
                SOLICITAR CITA
              </Button>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#FFFF",
                  color: "#000",
                  width: "35%",
                  padding: "10px 0",
                  margin: "30px auto 0",
                  borderRadius: "15px",
                  fontSize: "16px",
                  fontFamily: "Roboto-bold",
                }}
                onClick={console.log("submited")}
              >
                CANCELAR
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
