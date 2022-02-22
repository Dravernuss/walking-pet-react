import NavBarAdmin from "../../components/navBar/NavBarAdmin";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./_WalkerRegistration.scss";
import OptionsRegisterWalker from "../../components/OptionsAdmin/OptionsRegisterWalker";
import { Paper } from "@mui/material";

const WalkerRegistration = () => {
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

  const walkers = [
    {
      nombre: "Helen Arias",
      correo: "helenarias@gmail.com",
      telefono: "997684321",
      estado: "Sin Revisar",
    },
    {
      nombre: "Alex Marino",
      correo: "alexmarino@gmail.com",
      telefono: "987684654",
      estado: "Aceptado",
    },
  ];

  return (
    <div className="WalkerRegistration">
      <NavBarAdmin />
      <div className="walkerRegistrationContainer">
        <h1 style={{ marginBottom: "2rem", fontWeight: "400" }}>
          Registro de Paseadores
        </h1>
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
                    Nombre
                  </StyledTableCell>
                  <StyledTableCell className="cell" align="left">
                    Correo
                  </StyledTableCell>
                  <StyledTableCell className="cell" align="left">
                    Teléfono
                  </StyledTableCell>
                  <StyledTableCell className="cell" align="left">
                    Estado
                  </StyledTableCell>
                  <StyledTableCell className="cell" align="left">
                    Ver Información
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {walkers.map((walker) => (
                  <StyledTableRow key={walker.nombre}>
                    <StyledTableCell
                      className="cell"
                      align="left"
                      component="th"
                      scope="row"
                    >
                      {walker.nombre}
                    </StyledTableCell>
                    <StyledTableCell
                      className="cell"
                      align="left"
                      component="th"
                      scope="row"
                    >
                      {walker.correo}
                    </StyledTableCell>
                    <StyledTableCell className="cell" align="left">
                      {walker.telefono}
                    </StyledTableCell>
                    <StyledTableCell className="cell" align="left">
                      {walker.estado}
                    </StyledTableCell>
                    <StyledTableCell className="cell" align="left">
                      <OptionsRegisterWalker estado={walker.estado} />
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

export default WalkerRegistration;
