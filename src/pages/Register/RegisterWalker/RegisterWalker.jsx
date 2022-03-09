import React, { useState, useEffect } from "react";
import LayoutForm from "../../../components/LayoutForm/LayoutForm";
import LayoutInicial from "../../../components/LayoutInicial/LayoutInicial";
import { AboutYou } from "./components/AboutYou";
import { VerifyIdentity } from "./components/VerifyIdentity";
import { ThanksForJoin } from "./components/ThanksForJoin";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as _ from "lodash";

export const RegisterWalker = () => {
  const [title, setTitle] = useState("");
  const [step, setStep] = useState(1);
  const [view, setView] = useState("");

  const navigate = useNavigate();
  const handleChangeView = (viewToShow) => {
    setStep(viewToShow);
  };
  const variable = useSelector((state) => state.walker);
  const equal = _.isEqual(variable, {});
  console.log(equal);
  useEffect(() => {
    switch (step) {
      case 1:
        console.log("useeffect step1");
        setView(<VerifyIdentity changeView={handleChangeView} />);
        setTitle("Verificación de Identidad");
        break;
      case 2:
        console.log("useeffect step2");
        setView(<AboutYou changeView={handleChangeView} />);
        setTitle("Acerca de ti");
        break;
      case 3:
        console.log("useeffect step3");
        setView(<ThanksForJoin />);
        setTitle("Gracias por registrarte");
        break;
      default:
        break;
    }
  }, [step]);

  useEffect(() => {
    if (equal) {
      navigate("/register");
    }
  }, []);

  return (
    <div>
      <LayoutInicial>
        <LayoutForm title={title}>{view}</LayoutForm>
      </LayoutInicial>
    </div>
  );
};
