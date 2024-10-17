import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Rating,
  Tooltip,
  Fab,
  Button,
  TextField,
  CardActions,
} from "@mui/material";
import { Stack } from "@mui/system";
import { jsPDF } from "jspdf";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

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

const ListeCR = () => {
  const [selectedReport, setSelectedReport] = useState(null);
  const [patientComment, setPatientComment] = useState("");

  const handleReportClick = (report) => {
    setSelectedReport(report);
    setPatientComment(""); // Clear patient comment when selecting a new report
  };

  const handleCommentChange = (event) => {
    setPatientComment(event.target.value);
  };

  return (
    <div>
      <Grid container spacing={3}>
        {ecoCard.map((product, index) => (
          <Grid item sm={12} md={4} lg={3} key={index}>
            <Card
              onClick={() => handleReportClick(product)}
              sx={{ cursor: "pointer" }}
            >
              <Tooltip title="Niveau d'exercice">
                <Fab
                  size="small"
                  color="primary"
                  sx={{
                    bottom: "75px",
                    right: "15px",
                    position: "absolute",
                  }}
                >
                  <Typography>{product.level}</Typography>
                </Fab>
              </Tooltip>

              <CardContent sx={{ p: 3, pt: 2 }}>
                <Typography variant="h6">{product.title}</Typography>
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

              {/* Button to download the report as PDF */}
              <Button
                variant="contained"
                color="primary"
                startIcon={<CloudDownloadIcon />}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent Card onClick
                  downloadPDF(product, patientComment);
                }}
                sx={{ margin: 2 }}
              >
                Télécharger le compte rendu
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Display selected report details and comments */}
      {selectedReport && (
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <Typography
            variant="h5"
            style={{ marginBottom: "10px", fontWeight: "600", color: "#333" }}
          >
            {selectedReport.title}
          </Typography>
          <Typography
            variant="body1"
            paragraph
            style={{ marginBottom: "20px", lineHeight: "1.6", color: "#555" }}
          >
            {selectedReport.content}
          </Typography>

          {/* Comments from Orthophoniste and Médecin */}
          <Typography
            variant="h6"
            style={{ marginBottom: "10px", fontWeight: "500", color: "#333" }}
          >
            Commentaires :
          </Typography>
          {selectedReport.comments.map((comment, index) => (
            <div
              key={index}
              style={{
                marginBottom: "15px",
                padding: "10px",
                backgroundColor: "#f0f0f0",
                borderRadius: "10px",
                maxWidth: "75%",
              }}
            >
              <Typography
                variant="body2"
                style={{ fontWeight: "bold", color: "#333" }}
              >
                {comment.author}{" "}
                <span
                  style={{
                    fontWeight: "normal",
                    color: "#999",
                    fontSize: "12px",
                  }}
                >
                  le {comment.date}
                </span>
              </Typography>
              <Typography variant="body2" style={{ color: "#555" }}>
                {comment.text}
              </Typography>
            </div>
          ))}

          {/* Section for the patient's comment */}
          <Typography
            variant="h6"
            style={{
              marginTop: "20px",
              marginBottom: "10px",
              fontWeight: "500",
              color: "#333",
            }}
          >
            Votre commentaire :
          </Typography>
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
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              style={{ padding: "10px 20px", fontWeight: "bold" }}
            >
              Soumettre le commentaire
            </Button>
          </CardActions>
        </div>
      )}
    </div>
  );
};

export default ListeCR;
