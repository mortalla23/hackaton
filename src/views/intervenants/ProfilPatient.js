import React, { useState } from "react";

// Composant pour afficher les informations d'un patient
const ProfilPatient = () => {
  // Simuler les données d'un patient
  const [patient, setPatient] = useState({
    name: "Jean Dupont",
    age: 35,
    gender: "Female",
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

  // Fonction pour gérer l'événement du bouton Documents
  const handleDocumentClick = () => {
    alert("Redirection vers la page des documents");
  };

  // Fonction pour gérer l'événement du bouton Anamnèse
  const handleAnamnesisClick = () => {
    alert("Redirection vers la page de l'anamnèse");
  };

  return (
    <div style={styles.container}>
      <h1>Profil Patient</h1>

      {/* Section de téléchargement de l'image de profil */}
      <div style={styles.imageUploadSection}>
        <div style={styles.profileImageContainer}>
          {profileImage ? (
            <img src={profileImage} alt="Profil" style={styles.profileImage} />
          ) : (
            <div style={styles.placeholderImage}>Pas d'image</div>
          )}
        </div>
        <input
          type="file"
          onChange={handleImageChange}
          style={styles.fileInput}
        />
      </div>

      {/* Section des informations générales */}
      <div style={styles.profileSection}>
        <h2>{patient.name}</h2>
        <p>Âge : {patient.age}</p>

        <h2>{patient.name}</h2>
        <p>
          <strong>Âge :</strong> {patient.age} ans
        </p>
        <p>
          <strong>Sexe :</strong> {patient.gender}
        </p>
        <p>
          <strong>Adresse :</strong> {patient.address}
        </p>
        <p>
          <strong>Téléphone :</strong> {patient.phone}
        </p>
        <p>
          <strong>Email :</strong> {patient.email}
        </p>
        <p>
          <strong>Problème de langage :</strong> {patient.speechIssues}
        </p>
        <p>
          <strong>Objectifs de la thérapie :</strong> {patient.therapyGoals}
        </p>
        <p>
          <strong>Fréquence des séances :</strong> {patient.sessionFrequency}
        </p>
        <p>
          <strong>Notes du thérapeute :</strong> {patient.therapistNotes}
        </p>
        <p>
          <strong>Prochain rendez-vous :</strong> {patient.nextAppointment}
        </p>
      </div>

      {/* Section des progrès en langage oral et écrit */}
      <div style={styles.progressSection}>
        <h3>Progrès du langage</h3>
        <p>
          <strong>Langage oral :</strong> {patient.oralLanguageProgress}
        </p>
        <p>
          <strong>Langage écrit :</strong> {patient.writtenLanguageProgress}
        </p>
      </div>

      {/* Section des commentaires des médecins */}
      <div style={styles.commentsSection}>
        <h3>Commentaires des médecins</h3>
        {patient.doctorsComments.map((comment, index) => (
          <div key={index} style={styles.commentBox}>
            <p>
              <strong>{comment.doctor}</strong> ({comment.date})
            </p>
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>

      {/* Section des commentaires des orthophonistes */}
      <div style={styles.commentsSection}>
        <h3>Commentaires des orthophonistes</h3>
        {patient.therapistsComments.map((comment, index) => (
          <div key={index} style={styles.commentBox}>
            <p>
              <strong>{comment.therapist}</strong> ({comment.date})
            </p>
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>

      {/* Boutons Consulter mes documents et Consulter mon anamnèse */}
      <div style={styles.buttonContainer}>
        <button style={styles.documentButton} onClick={handleDocumentClick}>
          Consulter mes documents
        </button>
        <button style={styles.anamnesisButton} onClick={handleAnamnesisClick}>
          Consulter mon anamnèse
        </button>
      </div>
    </div>
  );
};

// Styles basiques pour le composant
const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  imageUploadSection: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },
  profileImageContainer: {
    marginRight: "20px",
  },
  profileImage: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  placeholderImage: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backgroundColor: "#ccc",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
  fileInput: {
    cursor: "pointer",
  },
  profileSection: {
    marginBottom: "20px",
    padding: "10px",
    backgroundColor: "#f0f8ff",
    borderRadius: "8px",
  },
  progressSection: {
    marginBottom: "20px",
    padding: "10px",
    backgroundColor: "#e6f7ff",
    borderRadius: "8px",
  },
  commentsSection: {
    marginBottom: "20px",
    padding: "10px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
  },
  commentBox: {
    border: "1px solid #ccc",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "10px",
  },
  buttonContainer: {
    textAlign: "center",
    marginTop: "20px",
  },
  documentButton: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginRight: "10px",
  },
  anamnesisButton: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default ProfilPatient;
