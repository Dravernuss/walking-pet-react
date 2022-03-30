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
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

import { horasPaseo } from "../../utils/constants";
import "./_AskForDate.scss";
import { Price } from "./components/Price";
import { useParams } from "react-router-dom";
import { getOneWalkerAsync } from "../../slices/walkerSlice.js";
import { myPets, getPetsByUserAsync } from "../../slices/petSlice.js";
import { createDateAsync } from "../../slices/dateSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const AskForDate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectDogs, setSelectDogs] = React.useState([]);
  const [dogs, setDogs] = React.useState(0);
  const [district, setDistrict] = React.useState();
  const [hour, setHour] = React.useState();
  const [value2, setValue2] = React.useState();
  const { id } = useParams();
  const userID = JSON.parse(localStorage.getItem("infoUser"))._id;
  const handleChangeDistrict = (event) => {
    setDistrict(event.target.value);
  };
  const handleChangeHour = (event) => {
    setHour(event.target.value);
  };

  const handleSelectDogs = (pet, e) => {
    if (!selectDogs.includes(pet.name)) {
      selectDogs.push(pet.name);
      setDogs(dogs + 1);
    } else {
      let i = 0;
      while (i < selectDogs.length) {
        if (selectDogs[i] === pet.name) {
          selectDogs.splice(i, 1);
          setDogs(dogs - 1);
        } else i++;
      }
    }
  };
  useEffect(async () => {
    await dispatch(getOneWalkerAsync(id));
    await dispatch(getPetsByUserAsync(userID));
  }, []);
  const walker = useSelector((state) => state.walker.walker);
  const user = useSelector((state) => state.user.user);
  const pets = useSelector(myPets);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { elements } = e.target;
    const total_price = () => {
      if (selectDogs.length === 1) {
        return walker.price * elements[6].value;
      } else {
        return selectDogs.length * (walker.price - 1) * elements[6].value;
      }
    };
    const date = {
      user_id: user._id,
      user_name: `${user.firstname} ${user.lastname}`,
      walker_id: walker._id,
      walker_name: `${walker.firstname} ${walker.lastname}`,
      pets_name: selectDogs,
      district_selected: elements[0].value,
      client_address: user.address,
      date_day: elements[2].value,
      date_hour: elements[4].value,
      date_time: elements[6].value,
      total_price: total_price(),
    };
    await dispatch(createDateAsync(date));
    navigate("/dateinfo");
  };
  return (
    <>
      <NavBar />
      <div className="askForDate">
        <form onSubmit={handleSubmit} className="askForDate__container">
          <div className="askForDate__container-title">
            <h1>SOLICITA UNA CITA</h1>
          </div>
          <div className="askForDate__container-data">
            <div className="askForDate__container-data-card">
              <p className="askForDate__container-data-card-selected">
                Paseador seleccionado:
                <span className="askForDate__container-data-card-selected-title">
                  {walker?.firstname} {walker?.lastname}
                </span>
              </p>
              <div className="askForDate__container-data-card-description">
                <Avatar
                  className="card-img-topP"
                  src={walker?.photo_url}
                  alt="..."
                ></Avatar>
                <div className="askForDate__container-data-card-description-text">
                  <Rating
                    name="read-only"
                    value={parseFloat(`${walker?.rating}`)}
                    precision={0.5}
                    size="large"
                    readOnly
                  />
                  <p className="askForDate__container-data-card-description-text-info">
                    {walker?.presentation}
                  </p>
                </div>
              </div>
            </div>
            <div className="askForDate__container-data-select">
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
                  <TextField
                    required
                    id="outlined-read-only-input"
                    type="text"
                    sx={{ width: 200 }}
                    InputProps={{
                      readOnly: true,
                    }}
                    value={user?.district}
                  />
                </FormControl>
                <br />
                <FormControl className="formAsk">
                  <p>Fecha del paseo:</p>

                  <TextField
                    data-test-id="date-date"
                    required
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
                    data-test-id="date-hour"
                    id="time"
                    required
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
                </FormControl>
                <br />
                <FormControl className="formAsk">
                  <p>Cantidad de horas:</p>
                  <Select
                    data-test-id="date-time"
                    required
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    defaultValue=""
                    onChange={handleChangeHour}
                    style={{ width: "200px" }}
                  >
                    <MenuItem value="">
                      <em>Seleccione la cantidad de horas</em>
                    </MenuItem>
                    {horasPaseo.map((horaPaseo, i) => (
                      <MenuItem
                        key={i}
                        value={horaPaseo}
                        data-test-id={horaPaseo}
                      >
                        {horaPaseo === 1
                          ? `${horaPaseo} Hora`
                          : `${horaPaseo} Horas`}
                      </MenuItem>
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
                    defaultValue={1}
                    name="radio-buttons-group"
                  >
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        margin: "5px 0px",
                        justifyContent: "space-around",
                      }}
                    >
                      <label className="labelPrice">1 Perro</label>
                      <Price price={walker?.price} />
                    </div>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        margin: "5px 0px",
                        flexDirection: "row",
                        justifyContent: "space-around",
                      }}
                    >
                      <label className="labelPrice">2 Perros</label>
                      <Price price={2 * walker?.price - 2} />
                    </div>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        margin: "5px 0px",
                        justifyContent: "space-around",
                      }}
                    >
                      <label className="labelPrice">3 Perros</label>
                      <Price price={3 * walker?.price - 3} />
                    </div>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        margin: "5px 0px",
                        justifyContent: "space-around",
                      }}
                    >
                      <label className="labelPrice">4 Perros</label>
                      <Price price={4 * walker?.price - 4} />
                    </div>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        margin: "5px 0px",
                        justifyContent: "space-around",
                      }}
                    >
                      <label className="labelPrice">5 Perros</label>
                      <Price price={5 * walker?.price - 5} />
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
                    {pets?.map((pet, i) => {
                      return (
                        <FormControlLabel
                          key={i}
                          control={
                            <Checkbox
                              data-test-id={pet.name}
                              onChange={(e) => {
                                handleSelectDogs(pet, e);
                              }}
                              name={pet.name}
                            />
                          }
                          label={pet.name}
                        />
                      );
                    })}
                  </FormGroup>
                </FormControl>
              </div>
            </div>
            <div className="askForDate__container-fares-confirm">
              <Button
                data-test-id="reserve-date"
                variant="contained"
                className="botonDisabled"
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
                type="submit"
                disabled={
                  !(
                    walker?.avalaible_districts.includes(user?.district) &&
                    dogs !== 0 &&
                    dogs <= 5 &&
                    walker?.ready &&
                    walker?.avalaible
                  )
                }
              >
                SOLICITAR CITA
              </Button>
              {walker?.avalaible_districts.includes(user?.district) ? (
                <></>
              ) : (
                <p
                  style={{
                    fontFamily: "Rambla-Regular",
                    marginTop: "10px",
                    textAlign: "center",
                  }}
                >
                  Este paseador no está disponible en tu distrito.
                </p>
              )}
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
                onClick={() => navigate("/principalpage")}
              >
                CANCELAR
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
