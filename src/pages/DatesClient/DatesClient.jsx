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
import { Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDatesByUserAsync, datesUser } from "../../slices/dateSlice";
import { convertTime24to12 } from "../../utils/functions";

const DatesClient = () => {
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

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userID = JSON.parse(localStorage.getItem("infoUser"))._id;
  //----REDUX-----------------------------------------------------
  const dates = useSelector(datesUser);
  React.useEffect(() => {
    dispatch(getDatesByUserAsync(userID));
  }, []);

  //----------------------------------------------------------

  return (
    <div className="DatesClient">
      <NavBar />
      <div className="datesClientContainer">
        <h1 style={{ marginBottom: "2rem", fontWeight: "400" }}>
          Mis Reservas
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
                  <StyledTableCell className="cell" align="center">
                    Paseador
                  </StyledTableCell>
                  <StyledTableCell className="cell" align="center">
                    Fecha
                  </StyledTableCell>
                  <StyledTableCell className="cell" align="center">
                    Hora
                  </StyledTableCell>
                  <StyledTableCell className="cell" align="center">
                    Estado
                  </StyledTableCell>
                  <StyledTableCell className="cell" align="center">
                    Opciones
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dates?.map((date, i) => (
                  <StyledTableRow key={i}>
                    <StyledTableCell
                      className="cell"
                      align="center"
                      component="th"
                      scope="row"
                    >
                      {date.walker_name}
                    </StyledTableCell>
                    <StyledTableCell className="cell" align="center">
                      {date.date_day.split("-").reverse().join("-")}
                    </StyledTableCell>
                    <StyledTableCell className="cell" align="center">
                      {convertTime24to12(date.date_hour)}
                    </StyledTableCell>
                    <StyledTableCell className="cell" align="center">
                      {date.date_state}
                    </StyledTableCell>
                    <StyledTableCell className="cellOptions" align="center">
                      <OptionsClient date_id={date._id} index={i} />
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
      <Button className="botonB" href="/clientprofile">
        Regresar a mi Perfil
      </Button>
    </div>
  );
};

export default DatesClient;
