import React, { useState } from "react";
import {
  Grid,
  Typography,
  Card,
  Box,
  Avatar,
  TextField,
  Paper,
} from "@mui/material";

const ProfilPatient = () => {
  // Simuler les données d'un patient
  const [patient] = useState({
    name: "Jean Dupont",
    age: 35,
    gender: "Mâle",
    address: "5678 Maple Ave, Anytown, USA",
    phone: "(555) 123-4567",
    email: "janedoe@example.com",
    speechIssues: "Dysphasie",
    therapyGoals: "Amélioration de la prononciation et de la fluidité verbale",
    sessionFrequency: "2 séances par semaine",
    therapistNotes:
      "Progrès constants, difficulté persistante avec les consonnes.",
    nextAppointment: "22 octobre 2024 à 10h30",
    oralLanguageProgress: "Amélioration continue en oral",
    writtenLanguageProgress: "Progression modérée en écrit",
    doctorsComments: [
      {
        doctor: "Dr. Martin",
        comment: "Le patient a fait des progrès significatifs en langage oral.",
        date: "12 Oct 2024",
      },
    ],
    therapistsComments: [
      {
        therapist: "Mme. Dupuis",
        comment: "La compréhension écrite a légèrement progressé.",
        date: "10 Oct 2024",
      },
    ],
  });

  // State pour gérer l'image de profil
  const [profileImage, setProfileImage] = useState(null);

  // Gestion du changement de l'image de profil
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Profil Patient
      </Typography>

      {/* Section de téléchargement de l'image de profil */}
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <Avatar
          src={profileImage}
          alt="Profil"
          sx={{
            width: "100px",
            height: "100px",
            marginRight: "20px",
          }}
        />
        <TextField type="file" onChange={handleImageChange} variant="outlined" />
      </Box>

      {/* Section des informations générales */}
      <Card sx={{ padding: "20px", marginBottom: "20px" }}>
        <Typography variant="h6">Informations Générales</Typography>
        <Grid container spacing={2} sx={{ marginTop: "10px" }}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Nom"
              value={patient.name}
              fullWidth
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Âge"
              value={`${patient.age} ans`}
              fullWidth
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Sexe"
              value={patient.gender}
              fullWidth
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Adresse"
              value={patient.address}
              fullWidth
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Téléphone"
              value={patient.phone}
              fullWidth
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              value={patient.email}
              fullWidth
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
        </Grid>
      </Card>

      {/* Section des progrès en langage oral et écrit */}
      <Card sx={{ padding: "20px", marginBottom: "20px" }}>
        <Typography variant="h6">Progrès du Langage</Typography>
        <Box sx={{ marginTop: "10px" }}>
          <Typography>
            <strong>Langage oral :</strong> {patient.oralLanguageProgress}
          </Typography>
          <Typography>
            <strong>Langage écrit :</strong> {patient.writtenLanguageProgress}
          </Typography>
        </Box>
      </Card>

      {/* Section des commentaires des médecins */}
      <Card sx={{ padding: "20px", marginBottom: "20px" }}>
        <Typography variant="h6">Commentaires des Médecins</Typography>
        {patient.doctorsComments.map((comment, index) => (
          <Paper
            key={index}
            sx={{
              padding: "10px",
              marginBottom: "10px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <Typography>
              <strong>{comment.doctor}</strong> ({comment.date})
            </Typography>
            <Typography>{comment.comment}</Typography>
          </Paper>
        ))}
      </Card>

      {/* Section des commentaires des orthophonistes */}
      <Card sx={{ padding: "20px", marginBottom: "20px" }}>
        <Typography variant="h6">Commentaires des Orthophonistes</Typography>
        {patient.therapistsComments.map((comment, index) => (
          <Paper
            key={index}
            sx={{
              padding: "10px",
              marginBottom: "10px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <Typography>
              <strong>{comment.therapist}</strong> ({comment.date})
            </Typography>
            <Typography>{comment.comment}</Typography>
          </Paper>
        ))}
      </Card>
    </Box>
  );
};

export default ProfilPatient;
