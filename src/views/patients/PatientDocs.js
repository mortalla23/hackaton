import React, { useState } from "react";
import {
  Box,
  Card,
  Typography,
  IconButton,
  Stack,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DownloadIcon from "@mui/icons-material/Download";
import CommentIcon from "@mui/icons-material/Comment";

// Exemple de documents du patient (données simulées)
const initialDocuments = [
  { id: 1, name: "Séance3 - 2024", url: "#", date: "12/10/2024" },
  { id: 2, name: "Séance2 - 2024", url: "#", date: "05/10/2024" },
  { id: 3, name: "Séance1 - 2024", url: "#", date: "01/09/2024" },
];

const PatientDocs = () => {
  const [documents] = useState(initialDocuments);

  const handleComment = (documentId) => {
    // Logic pour gérer les commentaires (ex: ouvrir un modal, etc.)
    console.log("Ajouter un commentaire pour le document ID:", documentId);
  };

  return (
    <Box
      sx={{
        padding: 4,
        background: "radial-gradient(#f0f8ff, #d3d7fa)",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Mes Documents
      </Typography>

      <Card sx={{ width: "100%", maxWidth: "600px", p: 4 }}>
        <Stack spacing={3}>
          {/* Liste des documents */}
          <List>
            {documents.map((document) => (
              <ListItem
                key={document.id}
                sx={{ borderBottom: "1px solid #ddd" }}
              >
                <ListItemText
                  primary={document.name}
                  secondary={`Date: ${document.date}`}
                />
                {/* Icône Visualiser */}
                <IconButton color="primary" sx={{ marginRight: 1 }}>
                  <VisibilityIcon />
                </IconButton>

                {/* Icône Télécharger */}
                <IconButton color="secondary" sx={{ marginRight: 1 }}>
                  <DownloadIcon />
                </IconButton>

                {/* Icône Commentaire */}
                <IconButton
                  color="info"
                  onClick={() => handleComment(document.id)}
                >
                  <CommentIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
        </Stack>
      </Card>
    </Box>
  );
};

export default PatientDocs;
