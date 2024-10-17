import React, { useState } from 'react';
import { Typography, Checkbox, FormControlLabel, Button, Box, Card, CardContent } from '@mui/material';
import jsPDF from 'jspdf';
import 'jspdf-autotable'; // Pour des tableaux structurés dans le PDF

const GererPAP = () => {
  const [steps, setSteps] = useState({
    medicalFollowup: false,
    speechTherapy: false,
    pedagogicalAdaptations: false,
    homeSupport: false
  });

  const [generatedPAP, setGeneratedPAP] = useState('');

  const handleCheckboxChange = (event) => {
    setSteps({
      ...steps,
      [event.target.name]: event.target.checked,
    });
  };

  const generatePAP = () => {
    let papContent = 'Plan d\'Accompagnement Personnalisé (PAP) :\n\n';

    if (steps.medicalFollowup) {
      papContent += '1. Suivi médical régulier avec le médecin pour évaluer la santé et le développement global du patient.\n';
    }
    if (steps.speechTherapy) {
      papContent += '2. Séances d\'orthophonie hebdomadaires pour améliorer les compétences linguistiques.\n';
    }
    if (steps.pedagogicalAdaptations) {
      papContent += '3. Adaptations pédagogiques en classe, y compris des outils éducatifs spécifiques et un temps de travail adapté.\n';
    }
    if (steps.homeSupport) {
      papContent += '4. Soutien à domicile avec des exercices linguistiques à faire en famille.\n';
    }

    if (!steps.medicalFollowup && !steps.speechTherapy && !steps.pedagogicalAdaptations && !steps.homeSupport) {
      papContent = 'Aucune étape sélectionnée pour le PAP.';
    }

    setGeneratedPAP(papContent);
  };

  const downloadPDF = () => {
    const doc = new jsPDF();

    // Charger le logo depuis le dossier public
    const logoPath = `${window.location.origin}/logos/baumann.PNG`; // Chemin du logo dans le dossier public

    const img = new Image();
    img.src = logoPath;

    // Attendre que l'image soit chargée avant de générer le PDF
    img.onload = () => {
      // Ajouter le logo
      doc.addImage(img, 'PNG', 10, 10, 50, 20); // Positionner et redimensionner l'image

      // Ajouter le titre
      doc.setFontSize(22);
      doc.setFont('helvetica', 'bold');
      doc.text('Plan d\'Accompagnement Personnalisé (PAP)', 20, 40);

      // Ajouter le contenu du PDF
      doc.setFontSize(12);
      doc.text(generatedPAP, 20, 60);

      // Sauvegarder le PDF
      doc.save('PAP_Généré.pdf');
    };
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', marginBottom: '20px' }}>
        Sélectionnez les étapes à inclure dans le PAP :
      </Typography>

      <Box style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={steps.medicalFollowup}
              onChange={handleCheckboxChange}
              name="medicalFollowup"
              color="primary"
            />
          }
          label="Suivi médical"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={steps.speechTherapy}
              onChange={handleCheckboxChange}
              name="speechTherapy"
              color="primary"
            />
          }
          label="Séances d'orthophonie"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={steps.pedagogicalAdaptations}
              onChange={handleCheckboxChange}
              name="pedagogicalAdaptations"
              color="primary"
            />
          }
          label="Adaptations pédagogiques"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={steps.homeSupport}
              onChange={handleCheckboxChange}
              name="homeSupport"
              color="primary"
            />
          }
          label="Soutien à domicile"
        />
      </Box>

      <Button
        variant="contained"
        color="primary"
        onClick={generatePAP}
        style={{ marginRight: '10px' }}
      >
        Générer Le PAP
      </Button>

      {generatedPAP && (
        <Button
          variant="contained"
          color="secondary"
          onClick={downloadPDF}
          style={{ marginRight: '10px' }}
        >
          Télécharger le PDF
        </Button>
      )}

      {generatedPAP && (
        <Card style={{ marginTop: '30px', padding: '20px' }}>
          <CardContent>
            <Typography variant="h6" style={{ marginBottom: '10px', fontWeight: 'bold' }}>
              PAP généré :
            </Typography>
            <Typography style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>
              {generatedPAP}
            </Typography>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default GererPAP;
