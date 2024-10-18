import React, { useState } from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import DashboardCard from "../../../components/shared/DashboardCard";

const patients = [
  {
    id: "1",
    photo: "",
    lastname: "Sunil Joshi",
    firstname: "cDown",
    birthdate: "10/10/2023",
    level: "Low",
    pbg: "primary.main",
    budget: "3.9",
  },
  {
    id: "2",
    photo: "",
    lastname: "Andrew McDownland",
    firstname: "Real Homes",
    birthdate: "15/10/2001",
    level: "Medium",
    pbg: "secondary.main",
    budget: "24.5",
  },
];

const randomComments = [
  { id: 1, text: "C'est un bon patient, continuez !", sender: "Orthophoniste" },
  { id: 2, text: "Besoin de plus d'exercices.", sender: "Docteur" },
  { id: 3, text: "Très bon progrès la semaine dernière.", sender: "Enseignant" },
];

const ListPatients = () => {
  const [openChat, setOpenChat] = useState(false); // Gérer l'état d'ouverture du chat
  const [selectedPatient, setSelectedPatient] = useState(null); // Stocke le patient sélectionné
  const [messages, setMessages] = useState([]); // Messages de chat
  const [newMessage, setNewMessage] = useState(''); // Nouveau message

  // Fonction pour ouvrir le chat et afficher des commentaires aléatoires
  const handleOpenChat = (patient) => {
    setSelectedPatient(patient);

    // Générer 2 commentaires aléatoires à partir de randomComments
    const randomSelectedComments = [
      randomComments[Math.floor(Math.random() * randomComments.length)],
      randomComments[Math.floor(Math.random() * randomComments.length)],
    ];

    setMessages(randomSelectedComments);
    setOpenChat(true); // Ouvrir le chat
  };

  // Fonction pour fermer le chat
  const handleCloseChat = () => {
    setOpenChat(false);
    setSelectedPatient(null);
  };

  // Fonction pour ajouter un nouveau message
  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const newChatMessage = {
      id: messages.length + 1,
      sender: "Vous",
      text: newMessage,
    };
    
    setMessages([...messages, newChatMessage]); // Ajouter le message aux messages existants
    setNewMessage(''); // Vider l'input du message
  };

  return (
    <DashboardCard title="Liste des patients">
      <Box sx={{ overflow: "auto", width: { xs: "280px", sm: "auto" } }}>
        <Table
          aria-label="simple table"
          sx={{
            whiteSpace: "nowrap",
            mt: 2,
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  #
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Nom
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Prenom
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Niveau
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="subtitle2" fontWeight={600}>
                  Exercices
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography>Actions</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography>Commenter</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patients.map((patient) => (
              <TableRow key={patient.id}>
                <TableCell>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    {patient.id}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <Typography variant="subtitle2" fontWeight={600}>
                        {patient.lastname}
                      </Typography>
                      <Typography
                        color="textSecondary"
                        sx={{
                          fontSize: "13px",
                        }}
                      >
                        {patient.birthdate}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography
                    color="textSecondary"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                    {patient.firstname}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Chip
                    sx={{
                      px: "4px",
                      backgroundColor: patient.pbg,
                      color: "#fff",
                    }}
                    size="small"
                    label={patient.level}
                  />
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6">{patient.budget}k</Typography>
                </TableCell>
                <TableCell align="right">
                  <Button variant="contained" color="primary" href="/patient">
                    Consulter
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <IconButton
                    color="primary"
                    onClick={() => handleOpenChat(patient)} // Ouvrir le chat
                  >
                    <CommentIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>

      {/* Fenêtre modale pour afficher le chat */}
      <Dialog open={openChat} onClose={handleCloseChat} fullWidth maxWidth="sm">
        <DialogTitle>
          Chat avec {selectedPatient ? selectedPatient.firstname : ''}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ maxHeight: 300, overflowY: 'auto', mb: 2 }}>
            {messages.map((message) => (
              <Box key={message.id} sx={{ mb: 1 }}>
                <Typography
                  variant="body2"
                  color={message.sender === "Vous" ? "primary" : "textSecondary"}
                >
                  {message.sender}: {message.text}
                </Typography>
              </Box>
            ))}
          </Box>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Tapez un message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseChat} color="secondary">
            Fermer
          </Button>
          <Button onClick={handleSendMessage} color="primary" variant="contained">
            Envoyer
          </Button>
        </DialogActions>
      </Dialog>
    </DashboardCard>
  );
};

export default ListPatients;
