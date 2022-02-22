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
import { Paper } from "@mui/material";

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
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "rgba(249, 186, 62)",
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
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer className="tableContainer">
            <Table
              stickyHeader
              style={{ border: "1px solid #DADADA" }}
              aria-label="sticky table"
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell className="cell" align="left">
                    Cliente
                  </StyledTableCell>
                  <StyledTableCell className="cell" align="left">
                    Fecha
                  </StyledTableCell>
                  <StyledTableCell className="cell" align="left">
                    Hora
                  </StyledTableCell>
                  <StyledTableCell className="cell" align="left">
                    Estado
                  </StyledTableCell>
                  <StyledTableCell className="cell" align="left">
                    Opciones
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody size="small">
                {dates.map((date) => (
                  <StyledTableRow key={date.fecha}>
                    <StyledTableCell
                      className="cell"
                      align="left"
                      component="th"
                      scope="row"
                    >
                      {date.cliente}
                    </StyledTableCell>
                    <StyledTableCell className="cell" align="left">
                      {date.fecha}
                    </StyledTableCell>
                    <StyledTableCell className="cell" align="left">
                      {date.hora}
                    </StyledTableCell>
                    <StyledTableCell className="cell" align="left">
                      {date.estado}
                    </StyledTableCell>
                    <StyledTableCell className="cell" align="left">
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
        </Paper>
      </div>
      <Button className="botonB" href="/walkerprofile">
        Regresar a mi Perfil
      </Button>
    </div>
  );
};

export default DatesWalker;
