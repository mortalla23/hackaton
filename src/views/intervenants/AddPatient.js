import React from 'react';
import { Typography, Box, Divider } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';

const AnamnesePage = () => {
  return (
    <PageContainer title="Consultation de l'Anamnèse" description="Anamnèse du patient">
      <DashboardCard title="Anamnèse du Patient">
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" gutterBottom>Informations Générales</Typography>
          <Typography>Nom : Dupont</Typography>
          <Typography>Prénom : Jean</Typography>
          <Typography>Date de naissance : 12 janvier 2010</Typography>
          <Typography>Niveau scolaire : 6e</Typography>
          <Typography>Droitier ou gaucher : Droitier</Typography>
          <Divider sx={{ my: 2 }} />
          
          <Typography variant="h6" gutterBottom>Situation Familiale</Typography>
          <Typography>Situation familiale : Parents séparés, vit avec sa mère</Typography>
          <Divider sx={{ my: 2 }} />
          
          <Typography variant="h6" gutterBottom>Difficultés Observées</Typography>
          <Typography>
            La personne ressent-elle des difficultés dans le domaine du langage oral, du langage écrit ou des prérequis à la communication ? : Oui, des difficultés en lecture et en écriture.
          </Typography>
          <Typography>Un bilan orthophonique a-t-il déjà été réalisé ? : Oui, en 2022</Typography>
          <Typography>Depuis quand les difficultés ont-elles été observées ? : Depuis la maternelle</Typography>
          <Typography>La personne a-t-elle conscience de ses difficultés ? : Oui, il en parle souvent</Typography>
          <Typography>Exprime-t-elle une souffrance à ce sujet ? : Oui, il se sent frustré</Typography>
          <Divider sx={{ my: 2 }} />
          
          <Typography variant="h6" gutterBottom>Questions supplémentaires</Typography>
          <Typography>Votre enfant a-t-il appris à lire/écrire facilement ? : Non, apprentissage difficile</Typography>
          <Typography>Aime-t-il lire ? : Non, il évite la lecture</Typography>
          <Typography>Aime-t-il compter ? : Oui, il aime les mathématiques</Typography>
          <Typography>Bénéficie-t-il d’un soutien scolaire (à domicile ou à l’école) ? : Oui, soutien scolaire à l'école</Typography>
          <Typography>Certaines matières sont-elles plus problématiques que d’autres ? Si oui, lesquelles ? : Le français et l'orthographe</Typography>
          <Divider sx={{ my: 2 }} />

          <Typography variant="h6" gutterBottom>Secret Médical</Typography>
          <Typography>Antécédents médicaux : Aucune condition médicale grave</Typography>
          <Typography>Antécédents familiaux : Grand-père maternel dyslexique</Typography>
          <Typography>Suivi en cours : Orthophonie hebdomadaire</Typography>
          <Typography>Acuité visuelle : Normale</Typography>
          <Typography>Acuité auditive : Légère perte auditive détectée en 2021</Typography>
          <Typography>Autres bilans : Bilan neuropsychologique en 2020</Typography>
          <Divider sx={{ my: 2 }} />

          <Typography variant="h6" gutterBottom>Développement et Comportement</Typography>
          <Typography>
            Développement de l’alimentation pendant la petite enfance (biberon, allaitement, diversification alimentaire…) : Alimentation normale, allaité jusqu'à 6 mois.
          </Typography>
          <Typography>Existe-t-il des difficultés au contact de certains aliments (avaler, mastiquer…) ? : Non</Typography>
          <Typography>Respire-t-il la bouche ouverte ? : Parfois, surtout la nuit</Typography>
          <Typography>Est-il fatigué le matin ? : Oui, il se réveille souvent fatigué</Typography>
          <Typography>Suce-t-il son pouce ou une tétine ? : A arrêté à 4 ans</Typography>
          <Typography>Ronfle-t-il ? : Oui, léger ronflement</Typography>
          <Divider sx={{ my: 2 }} />

          <Typography variant="h6" gutterBottom>Activités et Temps devant les écrans</Typography>
          <Typography>Activités extrascolaires : Football deux fois par semaine</Typography>
          <Typography>Quel est le temps quotidien passé devant les écrans ? : Environ 2 heures par jour</Typography>
        </Box>
      </DashboardCard>
    </PageContainer>
  );
};

export default AnamnesePage;
