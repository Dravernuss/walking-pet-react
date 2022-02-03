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
        <TableContainer>
          <Table
            style={{ border: "1px solid #DADADA" }}
            sx={{ minWidth: 700, maxWidth: 1800 }}
            aria-label="customized table"
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
              {reports.map((report) => (
                <StyledTableRow key={report.fecha}>
                  <StyledTableCell align="left" component="th" scope="row">
                    {report.paseador}
                  </StyledTableCell>
                  <StyledTableCell align="left" component="th" scope="row">
                    {report.cliente}
                  </StyledTableCell>
                  <StyledTableCell align="left">{report.fecha}</StyledTableCell>
                  <StyledTableCell align="left">{report.hora}</StyledTableCell>
                  <StyledTableCell align="left">
                    {report.estado}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <OptionsReport />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
export default Reports;
