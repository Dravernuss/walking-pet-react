import NavBarAdmin from "../../components/navBar/NavBarAdmin";
import * as React from "react";
import { useEffect, useState } from "react";
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
import { getAllReportsAsync } from "../../slices/commentSlice.js";

const Reports = () => {
  const dispatch = useDispatch();
  const allReports = useSelector((state) => state.comments.reports);
  const [allReportsInformation, setAllReportsInformation] = useState([]);

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
  const callingAllReports = async () => {
    const resAllReports = await dispatch(getAllReportsAsync());
    return resAllReports;
  };

  useEffect(() => {
    const obteinAllReports = callingAllReports();
  }, []);

  useEffect(() => {
    if (typeof allReports != "undefined") {
      let arr = [];
      arr.push(
        allReports.map((date) => {
          return date;
        })
      );
      setAllReportsInformation(arr);
    }
  }, [allReports]);

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
                    Fecha del Reporte
                  </StyledTableCell>
                  <StyledTableCell className="cell" align="left">
                    Hora del Reporte
                  </StyledTableCell>
                  <StyledTableCell className="cell" align="left">
                    Estado
                  </StyledTableCell>
                  <StyledTableCell className="cell" align="left">
                    Opciones
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody data-test-id="reports-list">
                {allReportsInformation &&
                  allReportsInformation[0] &&
                  allReportsInformation[0].map((report, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell
                        className="cell"
                        align="left"
                        component="th"
                        scope="row"
                      >
                        {report.walker_name}
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
                        {
                          new Date(report.created_at)
                            .toLocaleString()
                            .split(" ")[0]
                        }
                      </StyledTableCell>
                      <StyledTableCell className="cell" align="left">
                        {
                          new Date(report.created_at)
                            .toLocaleString()
                            .split(" ")[1]
                        }
                      </StyledTableCell>
                      <StyledTableCell className="cell" align="left">
                        {report.comment_state}
                      </StyledTableCell>
                      <StyledTableCell className="cell" align="left">
                        <OptionsReport reportId={report._id} />
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
