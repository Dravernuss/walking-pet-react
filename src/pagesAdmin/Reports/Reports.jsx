import NavBarAdmin from "../../components/navBar/NavBarAdmin";
import * as React from "react";
import { useEffect,useState } from "react";
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

import { useDispatch, useSelector } from "react-redux";
import {
  getAllReportsAsync,
} from "../../slices/commentSlice.js";

const Reports = () => {
  const dispatch = useDispatch();
  const allReports = useSelector((state) => state.comments.reports)
  const [allReportsInformation, setAllReportsInformation] = useState([])

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#C4C4C4",
      color: "black",
      fontSize: 20,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 18,
    }
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    }
  }));

  const  callingAllReports = async () => {
    const resAllReports = await dispatch(getAllReportsAsync());
    return resAllReports
  };

  useEffect(() => {
    const obteinAllReports = callingAllReports() 
  }, [])

  
  useEffect(() => {
    if (typeof allReports != "undefined") {
      let arr =[]
      arr.push(allReports.map((date) => {
        return date
      })) 
      console.log(arr)
      setAllReportsInformation(arr)
    }
  }, [allReports])

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
                {allReportsInformation && allReportsInformation[0] &&
                  allReportsInformation[0].map((report,index) => (
                  <StyledTableRow key={index}>
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
                      {report.user_name}
                    </StyledTableCell>
                    <StyledTableCell className="cell" align="left">
                      {report.created_at}
                    </StyledTableCell>
                    <StyledTableCell className="cell" align="left">
                      {report.hora}
                    </StyledTableCell>
                    <StyledTableCell className="cell" align="left">
                      {report.comment_state}
                    </StyledTableCell>
                    <StyledTableCell className="cell" align="left">
                      <OptionsReport reportId={report._id}/>
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
