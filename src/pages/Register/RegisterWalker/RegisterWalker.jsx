import React, { useState } from "react";
import LayoutForm from "../../../components/LayoutForm/LayoutForm";
import LayoutInicial from "../../../components/LayoutInicial/LayoutInicial";
import { AboutYou } from "./components/AboutYou";
import { VerifyIdentity } from "./components/VerifyIdentity";

export const RegisterWalker = () => {
  const [title, setTitle] = useState("Verificación de Identidad");
  const handleChange = () => {
    setTitle("Acerca de ti");
  };

  return (
    <div>
      <LayoutInicial>
        <LayoutForm title={title}>
          {/* <VerifyIdentity /> */}
          <AboutYou />
        </LayoutForm>
      </LayoutInicial>
    </div>
  );
};
