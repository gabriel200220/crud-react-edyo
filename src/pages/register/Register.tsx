import { Box, Paper } from "@mui/material";
import { useEffect, useState } from "react";
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

function Register() {
    const storage = JSON.parse(localStorage.getItem('dados') || '[]')
    
    const [nome,setNome] = useState ('')
    const [email,setEmail] = useState ('')
    const [senha,setSenha] = useState ('')
    const [reSenha,setReSenha] = useState ('')

    useEffect(() => {
        if (storage.length) {
          setNome(storage);
          setEmail(storage);
          setSenha(storage);
          setReSenha(storage);
          console.log(storage)  
        }
      }, [nome, email, senha, reSenha])
      
      const handleKeyDown = (e:any) => {
        if (e.key === 'Enter') {
         
          storage.push(e.target.value);
          localStorage.setItem('dados', JSON.stringify(storage));
          setNome('');
        }
       };

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
          <h2>Cadastro</h2>
         
        </header>
        
          
          <InputOutlined
            type="text"
            label="Nome"
            placeholder="Digite seu nome"
            onKeyDown={(e:any) => handleKeyDown(e)} 
            value={nome}
          />
          <label htmlFor="E-mail"></label>
          <InputOutlined
            type="text"
            label="E-mail"
            placeholder="Digite seu e-mail"
            value={email}
          />
          <label htmlFor="Senha"></label>
          <InputOutlined
            type="password"
            label="Senha"
            placeholder="Digite sua senha"
            value={senha}
          />
          <label htmlFor="Senha"></label>
          <InputOutlined
            type="password"
            label="Repita sua Senha"
            placeholder="Digite sua senha"
            value={reSenha}
          />
          <ButtonOutlined tipoBotao ="button">
            Entrar na conta
          </ButtonOutlined>
        
        <br></br>
        <footer>
          <a href="#">Nao possui conta? Cadastre-se</a>
        </footer>
      </Paper>
    </Box>
  );
}

export default Register;
