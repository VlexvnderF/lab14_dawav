import { useState, useEffect } from "react";
import { Container, Typography, Button, TextField } from "@mui/material";
import Swal from "sweetalert2";
import { post } from "../../services";

const Login = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value,
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(values)

        const response = await post("users/login", values)

        if (response.ok) {
            Swal.fire({
                text: "Usuario logeado",
                icon: "success",
            });
        }else {
            Swal.fire({
                text:"Error",
                icon: "error",
            });
        }
    };

    return (
        <Container sx={{display: 'flex', flexDirection: 'column'}}>
            <Typography align="center" mb={3} variant="h4">Iniciar Sesión</Typography>
            <TextField 
                name="email" 
                value={values.email} 
                onChange={handleInputChange} 
                sx={{marginBottom: '20px', backgroundColor:'white'}}
                placeholder="Correo">
            </TextField>
            <TextField 
                name="password"
                value={values.password}
                onChange={handleInputChange}
                sx={{marginBottom: '20px', backgroundColor:'white'}}
                placeholder="Contraseña">
            </TextField>
            <Button
                size="large"
                variant="contained"
                color="warning"
                onClick={handleSubmit}>
                Iniciar Sesión
            </Button>
        </Container>
    )
};

export default Login;