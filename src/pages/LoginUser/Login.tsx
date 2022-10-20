import { Box, Paper } from "@mui/material";
import React from "react";
import ButtonOutlined from "../../Components/Button/Button";
import InputOutlined from "../../Components/Input/Input";

const boxStyled = {
  display: "flex",
  direction: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "100vh",
};

function Login() {
  return (
    <Box sx={boxStyled}>
      <Paper
        elevation={3}
        sx={{
          width: "30%",
          height: "70%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <header>
          <h2>Pagina de Login</h2>
          <h4>entre no seu Login</h4>
        </header>
        <form>
          <label htmlFor="E-mail"></label>
          <InputOutlined
            type="text"
            label="E-mail"
            placeholder="Digite seu e-mail"
          />
          <label htmlFor="Senha"></label>
          <InputOutlined
            type="password"
            label="Senha"
            placeholder="Digite sua senha"
          />
          <ButtonOutlined tipoBotao ="button">
            Entrar na conta
          </ButtonOutlined>
        </form>
        <footer>
          <a href="#">Nao possui conta? Cadastre-se</a>
        </footer>
      </Paper>
    </Box>
  );
}

export default Login;
