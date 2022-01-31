import React, { useState } from "react";
import LayoutForm from "../../../components/LayoutForm/LayoutForm";
import LayoutInicial from "../../../components/LayoutInicial/LayoutInicial";
import { VerifyIdentity } from "./components/VerifyIdentity";

export const RegisterWalker = () => {
  const [title, setTitle] = useState("Verificación de Identidad");
  return (
    <div>
      <LayoutInicial>
        <LayoutForm title={title}>
          <VerifyIdentity />
        </LayoutForm>
      </LayoutInicial>
    </div>
  );
};
