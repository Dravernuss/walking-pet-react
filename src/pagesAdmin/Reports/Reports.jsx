import NavBarAdmin from "../../components/navBar/NavBarAdmin";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./_Reports.scss";
import OptionsReport from "../../components/OptionsAdmin/OptionsReport";
import { Paper } from "@mui/material";

const Reports = () => {
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

  const reports = [
    {
      paseador: "Helen Arias",
      cliente: "Manuel Baella",
      fecha: "08/12/2021",
      hora: "4:00 pm",
      estado: "No revisado",
    },
    {
      paseador: "Alex Marino",
      cliente: "Manuel Baella",
      fecha: "08/12/2021",
      hora: "6:00 pm",
      estado: "Revisado",
    },
  ];

  return (
    <div className="Reports">
      <NavBarAdmin />
      <div className="reportsContainer">
        <h1 style={{ marginBottom: "2rem", fontWeight: "400" }}>
          Reportes y Quejas
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
                    Paseador
                  </StyledTableCell>
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
              <TableBody>
                {reports.map((report) => (
                  <StyledTableRow key={report.fecha}>
                    <StyledTableCell
                      className="cell"
                      align="left"
                      component="th"
                      scope="row"
                    >
                      {report.paseador}
                    </StyledTableCell>
                    <StyledTableCell
                      className="cell"
                      align="left"
                      component="th"
                      scope="row"
                    >
                      {report.cliente}
                    </StyledTableCell>
                    <StyledTableCell className="cell" align="left">
                      {report.fecha}
                    </StyledTableCell>
                    <StyledTableCell className="cell" align="left">
                      {report.hora}
                    </StyledTableCell>
                    <StyledTableCell className="cell" align="left">
                      {report.estado}
                    </StyledTableCell>
                    <StyledTableCell className="cell" align="left">
                      <OptionsReport />
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
export default Reports;
