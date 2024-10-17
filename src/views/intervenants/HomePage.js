import React, { useState } from "react";
import { Grid, Typography, Card, IconButton, List, ListItem, ListItemText } from "@mui/material";
import PageContainer from "src/components/container/PageContainer";
import ListeCR from "./ListeCR";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DownloadIcon from "@mui/icons-material/Download";
import CommentIcon from "@mui/icons-material/Comment";

const ShowPatient = () => {
  // Exemple de données simulées pour les comptes rendus
  const [documents] = useState([
    { id: 1, name: "Compte rendu 1", date: "12/10/2024", url: "#" },
    { id: 2, name: "Compte rendu 2", date: "05/09/2024", url: "#" },
    { id: 3, name: "Compte rendu 3", date: "01/07/2024", url: "#" },
  ]);

  const handleView = (id) => {
    alert(`Visualiser le document ID: ${id}`);
  };

  const handleDownload = (id) => {
    alert(`Télécharger le document ID: ${id}`);
  };

  const handleComment = (id) => {
    alert(`Ajouter un commentaire pour le document ID: ${id}`);
  };

  return (
    <PageContainer title="Profil du Patient" description="Informations sur le patient et ses documents">
      <Grid container spacing={2} style={{ marginBottom: "25px" }}>
        {/* Champ Nom */}
        <Grid item xs={12} sm={3}>
          <Typography variant="h6"> Nom </Typography>
          <Typography> Dupont </Typography>
        </Grid>

        {/* Champ Prénom */}
        <Grid item xs={12} sm={3}>
          <Typography variant="h6"> Prénom </Typography>
          <Typography> Jean </Typography>
        </Grid>

        {/* Date de naissance */}
        <Grid item xs={12} sm={3}>
          <Typography variant="h6"> Date de naissance </Typography>
          <Typography> 13/09/2024 </Typography>
        </Grid>
      </Grid>

      <Typography variant="h5" style={{ marginBottom: "20px" }}>
        Listes des comptes rendus
      </Typography>

      <Card style={{ padding: "20px" }}>
        <List>
          {documents.map((document) => (
            <ListItem key={document.id} style={{ borderBottom: "1px solid #ddd" }}>
              <ListItemText
                primary={document.name}
                secondary={`Date : ${document.date}`}
              />
              {/* Icône Visualiser */}
              <IconButton color="primary" onClick={() => handleView(document.id)} sx={{ marginRight: 1 }}>
                <VisibilityIcon />
              </IconButton>

              {/* Icône Télécharger */}
              <IconButton color="secondary" onClick={() => handleDownload(document.id)} sx={{ marginRight: 1 }}>
                <DownloadIcon />
              </IconButton>

              {/* Icône Commentaire */}
              <IconButton color="info" onClick={() => handleComment(document.id)}>
                <CommentIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Card>
    </PageContainer>
  );
};
  
export default ShowPatient;
