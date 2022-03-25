import NavBarAdmin from "../../components/navBar/NavBarAdmin";
import * as React from "react";
import { useState, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getAllDatesAsync } from "../../slices/dateSlice.js";
import { convertTime24to12 } from "../../utils/functions";

const ReservedTours = () => {
  const dispatch = useDispatch();
  const [allDatesInformation, setAllDatesInformation] = useState([]);
  const allDates = useSelector((state) => state.dates.allDates);

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

  const callingAllDates = async () => {
    const resAllDates = await dispatch(getAllDatesAsync());
    return resAllDates;
  };

  useEffect(() => {
    const obteinAllDates = callingAllDates();
  }, []);

  useEffect(() => {
    if (typeof allDates != "undefined") {
      let arr = [];
      arr.push(
        allDates.map((date) => {
          return date;
        })
      );
      setAllDatesInformation(arr);
    }
  }, [allDates]);

  return (
    <div className="ReservedTours">
      <NavBarAdmin />
      <div className="reservedToursContainer">
        <h1 style={{ marginBottom: "2rem", fontWeight: "400" }}>
          Paseos Reservados
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
                {allDatesInformation &&
                  allDatesInformation[0] &&
                  allDatesInformation[0].map((date, i) => (
                    <StyledTableRow key={i}>
                      <StyledTableCell
                        className="cell"
                        align="left"
                        component="th"
                        scope="row"
                      >
                        {date.walker_name}
                      </StyledTableCell>
                      <StyledTableCell
                        className="cell"
                        align="left"
                        component="th"
                        scope="row"
                      >
                        {date.user_name}
                      </StyledTableCell>
                      <StyledTableCell className="cell" align="left">
                        {date.date_day.split("-").reverse().join("-")}
                      </StyledTableCell>
                      <StyledTableCell className="cell" align="left">
                        {convertTime24to12(date.date_hour)}
                      </StyledTableCell>
                      <StyledTableCell className="cell" align="left">
                        {date.date_state}/{date.paid ? "Pagado" : "No Pagado"}
                      </StyledTableCell>
                      <StyledTableCell className="cell" align="left">
                        <OptionsAdmin dateId={date._id} />
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
