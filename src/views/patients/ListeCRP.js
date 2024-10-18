import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Rating,
  Tooltip,
  IconButton,
  Button,
  TextField,
  CardActions,
  Drawer
} from "@mui/material";
import { Stack } from "@mui/system";
import { jsPDF } from "jspdf";
import { Link } from "react-router-dom";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ChatIcon from "@mui/icons-material/Chat";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DownloadIcon from "@mui/icons-material/CloudDownload";
import CloseIcon from "@mui/icons-material/Close";

// Sample data for exercise reports
const ecoCard = [
  {
    title: "Exo OE0",
    subheader: "September 14, 2023",
    doneAt: "12/10/2024 10:23",
    level: 1,
    rating: 4,
    content: "Détails du compte rendu OE0 : exercices, progrès, etc.",
    comments: [
      {
        author: "Orthophoniste",
        date: "12/10/2024 14:30",
        text: "Très bon progrès sur cet exercice.",
      },
      {
        author: "Médecin",
        date: "12/10/2024 15:00",
        text: "Continuez à pratiquer cet exercice quotidiennement.",
      },
    ],
  },
  {
    title: "Exo OE1",
    subheader: "September 14, 2023",
    doneAt: "12/10/2024 10:23",
    level: 7,
    rating: 5,
    content: "Détails du compte rendu OE1 : exercices, progrès, etc.",
    comments: [
      {
        author: "Orthophoniste",
        date: "12/10/2024 14:45",
        text: "L'exercice a été bien réalisé.",
      },
      {
        author: "Médecin",
        date: "12/10/2024 15:10",
        text: "Bonne récupération sur cet exercice.",
      },
    ],
  },
  {
    title: "Exo OE2",
    subheader: "September 14, 2023",
    doneAt: "12/10/2024 10:23",
    level: 5,
    rating: 3,
    content: "Détails du compte rendu OE2 : exercices, progrès, etc.",
    comments: [
      {
        author: "Orthophoniste",
        date: "12/10/2024 16:00",
        text: "Besoin d'amélioration.",
      },
      {
        author: "Médecin",
        date: "12/10/2024 16:30",
        text: "Renforcez les exercices respiratoires.",
      },
    ],
  },
];

// Function to download the report as PDF with all details
const downloadPDF = (report, patientComment) => {
  const doc = new jsPDF();

  // Title of the exercise
  doc.setFontSize(16);
  doc.text(report.title, 10, 10);

  // Content of the report
  doc.setFontSize(12);
  doc.text(`\nDétails du compte rendu :\n\n${report.content}`, 10, 30);

  // Comments from Orthophoniste and Médecin
  doc.text(`\nCommentaires :`, 10, 50);
  report.comments.forEach((comment, index) => {
    doc.text(
      `\n- ${comment.author} (${comment.date}) : ${comment.text}`,
      10,
      60 + index * 10
    );
  });

  // Adding the patient comment if any
  if (patientComment) {
    doc.text(
      `\n\nCommentaire du patient :`,
      10,
      90 + report.comments.length * 10
    );
    doc.text(`${patientComment}`, 10, 100 + report.comments.length * 10);
  }

  // Save the PDF
  doc.save(`${report.title}.pdf`);
};

const ListeCRP = () => {
  const [selectedReport, setSelectedReport] = useState(null);
  const [patientComment, setPatientComment] = useState("");
  const [reports, setReports] = useState(ecoCard);
  const [showComments, setShowComments] = useState(false);

  const handleReportClick = (report) => {
    setSelectedReport(report);
    setPatientComment("");
  };

  const handleCommentChange = (event) => {
    setPatientComment(event.target.value);
  };

  const handleSubmitComment = () => {
    if (patientComment.trim()) {
      const updatedReports = reports.map((report) => {
        if (report.title === selectedReport.title) {
          // Add the patient comment to the comments array
          return {
            ...report,
            comments: [
              ...report.comments,
              {
                author: "Patient",
                date: new Date().toLocaleString(),
                text: patientComment,
              },
            ],
          };
        }
        return report;
      });

      setReports(updatedReports);
      setSelectedReport({
        ...selectedReport,
        comments: [
          ...selectedReport.comments,
          {
            author: "Patient",
            date: new Date().toLocaleString(),
            text: patientComment,
          },
        ],
      });

      setPatientComment("");
    }
  };

  return (
    <div>
      <Grid container spacing={3}>
        {reports.map((product, index) => (
          <Grid item sm={12} md={4} lg={3} key={index}>
            <Card
              onClick={() => handleReportClick(product)}
              sx={{
                cursor: "pointer",
                borderRadius: "16px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              {/* <Tooltip title="Niveau d'exercice">
                <IconButton aria-label="Voir">
                  <VisibilityIcon color="primary" />
                </IconButton>
              </Tooltip> */}

              <CardContent sx={{ p: 3, pt: 2 }}>
                <Typography variant="h6" sx={{ color: "#4a4a4a", fontWeight: 'bold' }}>
                  {product.title}
                </Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  mt={1}
                >
                  <Stack direction="row" alignItems="center">
                    <Typography color="textSecondary" ml={1}>
                      {product.doneAt}
                    </Typography>
                  </Stack>
                  <Rating
                    name="read-only"
                    size="small"
                    value={product.rating}
                    readOnly
                  />
                </Stack>
              </CardContent>

              {/* Buttons with icons */}
              <CardActions>
                <IconButton aria-label="Télécharger" onClick={(e) => {
                  e.stopPropagation(); // Prevent Card onClick
                  downloadPDF(product, patientComment);
                }}>
                  <DownloadIcon color="primary" />
                </IconButton>

                <IconButton aria-label="Commentaire" onClick={(e) => {
                  e.stopPropagation(); // Prevent Card onClick
                  setSelectedReport(product); // Mettre à jour le rapport sélectionné
                  setShowComments(true); // Show the comments Drawer
                }}>
                  <ChatIcon color="primary" />
                </IconButton>

              </CardActions>

              {/* Button to redirect to PAP management */}
              <Button
                variant="outlined"
                color="secondary"
                component={Link}
                to="/gererPAP"
                startIcon={<ArrowForwardIcon />}
                sx={{ margin: 2 }}
              >
                Gérer le P.A.P
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Drawer for comments */}
      <Drawer
        anchor="right"
        open={showComments}
        onClose={() => setShowComments(false)}
        sx={{ width: '500px', flexShrink: 0 }}
      >
        <div style={{ width: '300px', padding: '10px' }}>
          <Typography variant="h6">Commentaires</Typography>

          <IconButton
            edge="end"
            color="inherit"
            onClick={() => setShowComments(false)}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>

          {/* Display comments */}
          {selectedReport && selectedReport.comments.map((comment, index) => (
            <div
              key={index}
              style={{
                marginBottom: "15px",
                padding: "10px",
                backgroundColor: "#e0f7fa",
                borderRadius: "8px",
                border: "1px solid #b2ebf2",
              }}
            >
              <Typography
                variant="body2"
                style={{ fontWeight: "bold", color: "#00796b" }}
              >
                {comment.author}{" "}
                <span
                  style={{
                    fontWeight: "normal",
                    color: "#004d40",
                    fontSize: "12px",
                  }}
                >
                  le {comment.date}
                </span>
              </Typography>
              <Typography variant="body2" style={{ color: "#004d40" }}>
                {comment.text}
              </Typography>
            </div>
          ))}

          {/* Add patient comment */}
          <TextField
            label="Ajoutez votre commentaire"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={patientComment}
            onChange={handleCommentChange}
            sx={{
              marginBottom: 2,
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmitComment}
            style={{ padding: "10px 20px", fontWeight: "bold" }}
          >
            Soumettre Le Commentaire
          </Button>
        </div>
      </Drawer>
    </div>
  );
};

export default ListeCRP;
