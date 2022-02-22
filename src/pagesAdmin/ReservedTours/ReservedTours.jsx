import NavBarAdmin from "../../components/navBar/NavBarAdmin";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import OptionsAdmin from "../../components/OptionsAdmin/OptionsAdmin";
import "./_ReservedTours.scss";
import { Paper } from "@mui/material";

const ReservedTours = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#C4C4C4",
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
      cliente: "Manuel Baella",
      fecha: "08/12/2021",
      hora: "4:00 pm",
      estado: "Realizado",
      calificado: false,
    },
    {
      paseador: "Helen Arias",
      cliente: "Manuel Baella",
      fecha: "14/12/2021",
      hora: "4:00 pm",
      estado: "En curso",
      calificado: true,
    },
    {
      paseador: "Helen Arias",
      cliente: "Manuel Baella",
      fecha: "16/12/2021",
      hora: "4:00 pm",
      estado: "Confirmado",
      calificado: true,
    },
    {
      paseador: "Helen Arias",
      cliente: "Manuel Baella",
      fecha: "18/12/2021",
      hora: "4:00 pm",
      estado: "Sin confirmar",
      calificado: true,
    },
    {
      paseador: "Helen Arias",
      cliente: "Manuel Baella",
      fecha: "19/12/2021",
      hora: "3:00 pm",
      estado: "Rechazado",
      calificado: true,
    },
    {
      paseador: "Helen Arias",
      cliente: "Manuel Baella",
      fecha: "20/12/2021",
      hora: "5:00 pm",
      estado: "Cancelado",
      calificado: true,
    },
  ];

  return (
    <div className="ReservedTours">
      <NavBarAdmin />
      <div className="reservedToursContainer">
        <h1 style={{ marginBottom: "2rem", fontWeight: "400" }}>
          Paseos Reservados
        </h1>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 390 }}>
            <Table
              stickyHeader
              style={{ border: "1px solid #DADADA" }}
              aria-label="sticky table"
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell style={{ width: "16.5%" }} align="left">
                    Paseador
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "16.5%" }} align="left">
                    Cliente
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "16.5%" }} align="left">
                    Fecha
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "16.5%" }} align="left">
                    Hora
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "16.5%" }} align="left">
                    Estado
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "17.5%" }} align="left">
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
                    <StyledTableCell align="left" component="th" scope="row">
                      {date.cliente}
                    </StyledTableCell>
                    <StyledTableCell align="left">{date.fecha}</StyledTableCell>
                    <StyledTableCell align="left">{date.hora}</StyledTableCell>
                    <StyledTableCell align="left">
                      {date.estado}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <OptionsAdmin />
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    </div>
  );
};

export default ReservedTours;
