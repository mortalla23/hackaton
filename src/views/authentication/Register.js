import React, { useState } from "react";
import {
  Grid,
  Box,
  Card,
  Typography,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import PageContainer from "src/components/container/PageContainer";
import logo from "../../assets/images/logos/monlogo.png";

const Register2 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    birthDate: "",
    address: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegister = () => {
    // Logic for registration form submission
    console.log(formData);
  };

  return (
    <PageContainer title="Register" description="this is Register page">
      <Box
        sx={{
          position: "relative",
          "&:before": {
            content: '""',
            background: "radial-gradient(#d2f1df, #d3d7fa, #bad8f4)",
            backgroundSize: "400% 400%",
            animation: "gradient 15s ease infinite",
            position: "absolute",
            height: "100%",
            width: "100%",
            opacity: "0.3",
          },
        }}
      >
        <Grid
          container
          spacing={0}
          justifyContent="center"
          sx={{ height: "100vh" }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            lg={4}
            xl={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Card
              elevation={9}
              sx={{ p: 4, zIndex: 1, width: "100%", maxWidth: "500px" }}
            >
              <Box display="flex" alignItems="center" justifyContent="center">
                <Typography>
                  <img src={logo} style={{ height: "64px", width: "64px" }} />
                </Typography>
              </Box>

              <Typography variant="h5" textAlign="center" mt={2} mb={4}>
                Inscription
              </Typography>

              <Grid container spacing={2}>
                {/* Champ Nom */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Nom"
                    variant="outlined"
                    name="lastName"
                    fullWidth
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </Grid>

                {/* Champ Prénom */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Prénom"
                    variant="outlined"
                    name="firstName"
                    fullWidth
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </Grid>

                {/* Champ Date de naissance */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Date de naissance"
                    type="date"
                    name="birthDate"
                    fullWidth
                    value={formData.birthDate}
                    onChange={handleInputChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>

                {/* Champ Sexe */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    select
                    label="Sexe"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    fullWidth
                  >
                    <MenuItem value="Male">Homme</MenuItem>
                    <MenuItem value="Female">Femme</MenuItem>
                    <MenuItem value="Other">Autre</MenuItem>
                  </TextField>
                </Grid>

                {/* Champ Adresse */}
                <Grid item xs={12}>
                  <TextField
                    label="Adresse"
                    variant="outlined"
                    name="address"
                    fullWidth
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </Grid>

                {/* Champ Téléphone */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Téléphone"
                    variant="outlined"
                    name="phone"
                    fullWidth
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </Grid>

                {/* Champ Email */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    name="email"
                    fullWidth
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </Grid>
              </Grid>

              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 3 }}
                onClick={handleRegister}
              >
                S'inscrire
              </Button>

              <Box display="flex" justifyContent="center" mt={3}>
                <Typography color="textSecondary" variant="h6" fontWeight="400">
                  Déjà un compte ?
                </Typography>
                <Typography
                  component={Link}
                  to="/auth/login"
                  fontWeight="500"
                  sx={{
                    textDecoration: "none",
                    color: "primary.main",
                    ml: 1,
                  }}
                >
                  Se connecter
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Register2;
