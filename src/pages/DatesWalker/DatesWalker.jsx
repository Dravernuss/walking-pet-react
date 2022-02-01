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
import "./_DatesWalker.scss";
import OptionsWalker from "../../components/OptionsWalker/OptionsWalker";

const dates = [
  //0 : rechazado
  //1 : aceptado
  //2 : pendiente
  {
    cliente: "Manuel Baella",
    fecha: "08/12/2021",
    hora: "4:00 pm",
    estado: "Realizado",
    aceptado: 1,
  },
  {
    cliente: "Manuel Baella",
    fecha: "14/12/2021",
    hora: "4:00 pm",
    estado: "En curso",
    aceptado: 1,
  },
  {
    cliente: "Manuel Baella",
    fecha: "16/12/2021",
    hora: "4:00 pm",
    estado: "Confirmado",
    aceptado: 1,
  },
  {
    cliente: "Manuel Baella",
    fecha: "18/12/2021",
    hora: "4:00 pm",
    estado: "Sin confirmar",
    aceptado: 2,
  },
  {
    cliente: "Manuel Baella",
    fecha: "19/12/2021",
    hora: "3:00 pm",
    estado: "Rechazado",
    aceptado: 0,
  },
  {
    cliente: "Manuel Baella",
    fecha: "20/12/2021",
    hora: "5:00 pm",
    estado: "Cancelado",
    aceptado: 0,
  },
];

const DatesWalker = () => {
  const StyledTableCell = styled(TableCell)(() => ({
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

  return (
    <div className="DatesWalker">
      <NavBar />
      <div className="datesWalkerContainer">
        <h1 style={{ marginBottom: "2rem", fontWeight: "400" }}>Mis Citas</h1>
        <TableContainer>
          <Table
            style={{ border: "1px solid #DADADA" }}
            sx={{ minWidth: 700, maxWidth: 1800 }}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow>
                <StyledTableCell style={{ width: "20%" }} align="left">
                  Cliente
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
                    {date.cliente}
                  </StyledTableCell>
                  <StyledTableCell align="left">{date.fecha}</StyledTableCell>
                  <StyledTableCell align="left">{date.hora}</StyledTableCell>
                  <StyledTableCell align="left">{date.estado}</StyledTableCell>
                  <StyledTableCell align="left">
                    <OptionsWalker
                      aceptado={date.aceptado}
                      estado={date.estado}
                    />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Button className="botonB" href="/WalkerProfile">
        Regresar a mi Perfil
      </Button>
    </div>
  );
};

export default DatesWalker;
