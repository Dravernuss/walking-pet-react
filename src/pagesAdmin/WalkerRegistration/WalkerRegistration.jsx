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
import "./_WalkerRegistration.scss";
import OptionsRegisterWalker from "../../components/OptionsAdmin/OptionsRegisterWalker";
import { Paper } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { getAllWalkersRegistrationAsync } from "../../slices/walkerSlice.js";

const WalkerRegistration = () => {
  const dispatch = useDispatch();
  const [changeMade, setChangeMade] = useState(true);
  const [allWalkersInformation, setAllWalkersInformation] = useState([]);
  const allWalker = useSelector((state) => state.walker.allWalkerRegistration);

  const callingAllWalkers = async () => {
    const resAllWalkers = await dispatch(getAllWalkersRegistrationAsync());
    return resAllWalkers;
  };

  const itHasBeenUploaded = () => {
    setChangeMade(true);
  };

  useEffect(() => {
    if (changeMade) {
      const obteinAllWalkers = callingAllWalkers();
    }
    setChangeMade(false);
  }, [changeMade]);

  useEffect(() => {
    if (typeof allWalker != "undefined") {
      let arr = [];
      arr.push(
        allWalker.map((walker) => {
          return walker;
        })
      );
      setAllWalkersInformation(arr);
    }
  }, [allWalker]);

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
                    Aprobación
                  </StyledTableCell>
                  <StyledTableCell className="cell" align="left">
                    Ver Información
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allWalkersInformation &&
                  allWalkersInformation[0] &&
                  allWalkersInformation[0].map((walker) => (
                    <StyledTableRow key={walker._id}>
                      <StyledTableCell
                        className="cell"
                        align="left"
                        component="th"
                        scope="row"
                      >
                        {`${walker.firstname} ${walker.lastname}`}
                      </StyledTableCell>
                      <StyledTableCell
                        className="cell"
                        align="left"
                        component="th"
                        scope="row"
                      >
                        {walker.email}
                      </StyledTableCell>
                      <StyledTableCell className="cell" align="left">
                        {walker.phone}
                      </StyledTableCell>
                      <StyledTableCell className="cell" align="left">
                        {walker.ready ? "disponible" : "no disponible"}
                      </StyledTableCell>
                      <StyledTableCell className="cell" align="left">
                        {walker.registration_state}
                      </StyledTableCell>
                      <StyledTableCell className="cell" align="left">
                        <OptionsRegisterWalker
                          walker={walker}
                          estado={
                            walker.registration_state === "Sin Revisar"
                              ? true
                              : false
                          }
                          uploaded={() => itHasBeenUploaded()}
                        />
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
