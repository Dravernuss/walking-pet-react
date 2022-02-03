import NavBar from "../../components/navBar/NavBar";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import OptionsClient from "../../components/OptionsClient/OptionsClient";
import "./_DatesClient.scss";

const DatesClient = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "rgba(249, 186, 62, 0.2)",
      color: "black",
      fontSize: 20,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 18,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  }));

  const dates = [
    {
      paseador: "Helen Arias",
      fecha: "08/12/2021",
      hora: "4:00 pm",
      estado: "Realizado",
      calificado: false,
    },
    {
      paseador: "Helen Arias",
      fecha: "14/12/2021",
      hora: "4:00 pm",
      estado: "En curso",
      calificado: true,
    },
    {
      paseador: "Helen Arias",
      fecha: "16/12/2021",
      hora: "4:00 pm",
      estado: "Confirmado",
      calificado: true,
    },
    {
      paseador: "Helen Arias",
      fecha: "18/12/2021",
      hora: "4:00 pm",
      estado: "Sin confirmar",
      calificado: true,
    },
    {
      paseador: "Helen Arias",
      fecha: "19/12/2021",
      hora: "3:00 pm",
      estado: "Rechazado",
      calificado: true,
    },
    {
      paseador: "Helen Arias",
      fecha: "20/12/2021",
      hora: "5:00 pm",
      estado: "Cancelado",
      calificado: true,
    },
  ];

  return (
    <div className="DatesClient">
      <NavBar />
      <div className="datesClientContainer">
        <h1 style={{ marginBottom: "2rem", fontWeight: "400" }}>
          Mis Reservas
        </h1>
        <TableContainer>
          <Table
            style={{ border: "1px solid #DADADA" }}
            sx={{ minWidth: 700, maxWidth: 1800 }}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow>
                <StyledTableCell style={{ width: "20%" }} align="left">
                  Paseador
                </StyledTableCell>
                <StyledTableCell style={{ width: "20%" }} align="left">
                  Fecha
                </StyledTableCell>
                <StyledTableCell style={{ width: "20%" }} align="left">
                  Hora
                </StyledTableCell>
                <StyledTableCell style={{ width: "20%" }} align="left">
                  Estado
                </StyledTableCell>
                <StyledTableCell style={{ width: "20%" }} align="left">
                  Opciones
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dates.map((date) => (
                <StyledTableRow key={date.fecha}>
                  <StyledTableCell align="left" component="th" scope="row">
                    {date.paseador}
                  </StyledTableCell>
                  <StyledTableCell align="left">{date.fecha}</StyledTableCell>
                  <StyledTableCell align="left">{date.hora}</StyledTableCell>
                  <StyledTableCell align="left">{date.estado}</StyledTableCell>
                  <StyledTableCell align="left">
                    <OptionsClient
                      calificado={date.calificado}
                      estado={date.estado}
                    />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Button className="botonB" href="/clientprofile">
        Regresar a mi Perfil
      </Button>
    </div>
  );
};

export default DatesClient;
