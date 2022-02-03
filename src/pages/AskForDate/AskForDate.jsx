import {
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
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { distritos, horasPaseo } from "../../utils/constants";
import "./_AskForDate.scss";
export const AskForDate = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div className="askForDate">
      <NavBar />
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
                <span style={{ lineHeight: "30px" }}>4.9</span>

                <p className="askForDate__container-data-card-description-text-info">
                  Hola soy Helen, me encantan los perritos y pasar tiempo con
                  ellos. En nuestro tiempo juntos pasearemos por algun parque,
                  haremos ejercicio y jugaremos mucho :D
                </p>
              </div>
            </div>
          </div>
          <div class="askForDate__container-data-select">
            <Box sx={{ minWidth: 120, textAlign: "center" }}>
              <FormControl
                variant="standard"
                style={{ width: "30%", margin: "20px 0" }}
              >
                <InputLabel id="demo-simple-select-label">Distrito</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  {distritos.map((distrito) => (
                    <MenuItem value={distrito}>{distrito}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <br />
              <FormControl
                variant="standard"
                style={{ width: "30%", margin: "20px 0" }}
              >
                <InputLabel id="demo-simple-select-label">Fecha</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <br />
              <FormControl
                variant="standard"
                style={{ width: "30%", margin: "20px 0" }}
              >
                <InputLabel id="demo-simple-select-label">Hora</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <br />
              <FormControl
                variant="standard"
                style={{ width: "30%", margin: "20px 0 50px" }}
              >
                <InputLabel id="demo-simple-select-label">
                  Tiempo de paseo
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  {horasPaseo.map((horaPaseo) => (
                    <MenuItem value={horaPaseo}>{horaPaseo}</MenuItem>
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
              Tarifas por hora:{" "}
            </p>
            <div>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="1"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label="1 Perro"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio />}
                    label="2 Perros"
                  />
                  <FormControlLabel
                    value="3"
                    control={<Radio />}
                    label="3 Perros"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
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
          <div className="askForDate__container-fares-confirm"></div>
        </div>
      </div>
    </div>
  );
};
