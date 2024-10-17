import React from "react";
import { Grid, Typography, Card, TextField } from "@mui/material";
import PageContainer from "src/components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";
import ListeCR from "./ListeCR";

const ShowPatient = () => {
  return (
    <PageContainer title="" description="this is Sample page">
      <Grid container spacing={2} style={{ marginBottom: "25px" }}>
        {/* Champ Nom */}
        <Grid item xs={12} sm={3}>
          <Typography variant="h6"> Nom </Typography>
          <Typography> Anne </Typography>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Typography variant="h6"> Prenom </Typography>
          <Typography> Anne </Typography>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Typography variant="h6"> Date de naissance </Typography>
          <Typography> 13/09/24 </Typography>
        </Grid>
      </Grid>

      <Typography variant="h5" style={{ marginBottom: "20px" }}>
        Listes des comptes rendus
      </Typography>

      <ListeCR />
    </PageContainer>
  );
};

export default ShowPatient;
