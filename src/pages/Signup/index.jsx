import { useState, useEffect } from "react";
import { Input } from "../../components";
import { Button, Container, TextField, Typography } from "@mui/material";
import Swal from "sweetalert2";
import { post } from "../../services";

const Register = () =>{
    const [values, setValues] = useState({
        name: "",
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

        const response = await post("users/signup", values)

        if(response.ok) {
            Swal.fire({
                text: "Usuario creado correctamente",
                icon: "success",
            });
        }else {
            Swal.fire({
                text: "Error",
                icon: "error",
            });
        }
    };
    return (
        <Container 
        sx={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '50px',
            
            }}>

                <Typography variant="h5" align="center" mb={3}>
                    Registrar Cuenta
                </Typography>
                <TextField
                name="name"
                value={values.name}
                onChange={handleInputChange}
                placeholder="Nombres"
                sx={{marginBottom: '20px', backgroundColor:'white'}}></TextField>
                <TextField
                name="email"
                value={values.email}
                onChange={handleInputChange}
                placeholder="Email"
                sx={{marginBottom: '20px', backgroundColor:'white'}}></TextField>
                <TextField
                name="password"
                value={values.password}
                onChange={handleInputChange}
                placeholder="Contraseña"
                sx={{marginBottom: '20px', backgroundColor:'white'}}></TextField>
                <Button size="large"
                        variant="contained"
                        color="success"
                        onClick={handleSubmit}>
                    Registrar
                </Button>
        </Container>
    );
};

export default Register;