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
import { convertTime24to12 } from "../../utils/functions";
import "./_DatesWalker.scss";
import OptionsWalker from "../../components/OptionsWalker/OptionsWalker";
import { Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { datesWalker, getDatesByWalkerAsync } from "../../slices/dateSlice";

// ACCEPTED ESTADOS POSIBLES
//0 : rechazado
//1 : aceptado
//2 : sin confirmar

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

  const userID = JSON.parse(localStorage.getItem("infoUser"))._id;
  //----REDUX-----------------------------------------------------
  const dispatch = useDispatch();
  const dates = useSelector(datesWalker);
  React.useEffect(() => {
    dispatch(getDatesByWalkerAsync(userID));
  }, []);

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
              <TableBody size="small" data-test-id="walker-list-dates">
                {dates?.map((date, i) => (
                  <StyledTableRow key={i}>
                    <StyledTableCell
                      className="cell"
                      align="left"
                      component="th"
                      scope="row"
                    >
                      {date?.user_name}
                    </StyledTableCell>
                    <StyledTableCell className="cell" align="left">
                      {(date?.date_day).split("-").reverse().join("-")}
                    </StyledTableCell>
                    <StyledTableCell className="cell" align="left">
                      {convertTime24to12(date?.date_hour)}
                    </StyledTableCell>
                    <StyledTableCell className="cell" align="left">
                      {date?.date_state} / {date?.paid ? "Pagado" : "No pagado"}
                    </StyledTableCell>
                    <StyledTableCell className="cell" align="left">
                      <OptionsWalker
                        index={i}
                        data-test-id={i}
                        id={date?._id}
                        accepted={date?.accepted}
                        date_state={date?.date_state}
                        paid={date?.paid}
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
