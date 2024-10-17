import React, { useState } from "react";
import { Typography, TextField, Button, Grid, Divider } from "@mui/material";
import PageContainer from "src/components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";

const AddPatient = () => {
  // États pour les détails du patient
  const [patientDetails, setPatientDetails] = useState({
    prenom: "",
    nom: "",
    age: "",
    genre: "",
    adresse: "",
    telephone: "",
  });

  // États pour les détails de l'anamnèse
  const [anamneseDetails, setAnamneseDetails] = useState({
    historiqueMedical: "",
    allergies: "",
    medicamentsEnCours: "",
    antecedentsFamiliaux: "",
    styleDeVie: "",
  });

  // Gérer les changements pour les détails du patient
  const handlePatientChange = (e) => {
    const { name, value } = e.target;
    setPatientDetails({
      ...patientDetails,
      [name]: value,
    });
  };

  // Gérer les changements pour les détails de l'anamnèse
  const handleAnamneseChange = (e) => {
    const { name, value } = e.target;
    setAnamneseDetails({
      ...anamneseDetails,
      [name]: value,
    });
  };

  // Gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour enregistrer le profil du patient et l'anamnèse
    console.log("Détails du Patient:", patientDetails);
    console.log("Détails de l'Anamnèse:", anamneseDetails);
    // Vider le formulaire après soumission
    setPatientDetails({
      prenom: "",
      nom: "",
      age: "",
      genre: "",
      adresse: "",
      telephone: "",
    });
    setAnamneseDetails({
      historiqueMedical: "",
      allergies: "",
      medicamentsEnCours: "",
      antecedentsFamiliaux: "",
      styleDeVie: "",
    });
  };

  return (
    <PageContainer
      title="Créer un Profil Patient"
      description="Page pour créer un profil patient et gérer l'anamnèse"
    >
      <DashboardCard title="Profil Patient">
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* Informations Générales */}
            <Grid item xs={12}>
              <Typography variant="h6">Informations Générales</Typography>
              <Divider />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Prénom"
                name="prenom"
                value={patientDetails.prenom}
                onChange={handlePatientChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Nom"
                name="nom"
                value={patientDetails.nom}
                onChange={handlePatientChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Âge"
                name="age"
                value={patientDetails.age}
                onChange={handlePatientChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Genre"
                name="genre"
                value={patientDetails.genre}
                onChange={handlePatientChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Adresse"
                name="adresse"
                value={patientDetails.adresse}
                onChange={handlePatientChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Téléphone"
                name="telephone"
                value={patientDetails.telephone}
                onChange={handlePatientChange}
                fullWidth
                required
              />
            </Grid>

            {/* Section Anamnèse */}
            <Grid item xs={12} style={{ marginTop: "20px" }}>
              <Typography variant="h6">
                Anamnèse (Historique Médical)
              </Typography>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Historique Médical"
                name="historiqueMedical"
                value={anamneseDetails.historiqueMedical}
                onChange={handleAnamneseChange}
                fullWidth
                multiline
                rows={3}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Allergies"
                name="allergies"
                value={anamneseDetails.allergies}
                onChange={handleAnamneseChange}
                fullWidth
                multiline
                rows={2}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Médicaments en Cours"
                name="medicamentsEnCours"
                value={anamneseDetails.medicamentsEnCours}
                onChange={handleAnamneseChange}
                fullWidth
                multiline
                rows={2}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Antécédents Familiaux"
                name="antecedentsFamiliaux"
                value={anamneseDetails.antecedentsFamiliaux}
                onChange={handleAnamneseChange}
                fullWidth
                multiline
                rows={3}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Style de Vie (ex: tabagisme, alcool)"
                name="styleDeVie"
                value={anamneseDetails.styleDeVie}
                onChange={handleAnamneseChange}
                fullWidth
                multiline
                rows={3}
              />
            </Grid>

            {/* Bouton de soumission */}
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Enregistrer le Profil
              </Button>
            </Grid>
          </Grid>
        </form>
      </DashboardCard>
    </PageContainer>
  );
};

export default AddPatient;
