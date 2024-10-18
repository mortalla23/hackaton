import { getDatabaseConnection } from './connection.js'; // Assurez-vous que le chemin est correct

// Exécuter le code directement dans un bloc try...catch
try {
  // Obtenir une connexion à la base de données
  const connection = await getDatabaseConnection();

  // Exécuter la requête SQL pour récupérer les utilisateurs
  const [rows] = await connection.execute('SELECT id, nom AS lastname, prenom AS firstname FROM user');

  // Stocker les utilisateurs récupérés dans une constante `patients` en ajoutant des valeurs par défaut pour les autres champs
  const patients = rows.map(row => ({
    id: row.id.toString(),                 // Convertir l'ID en chaîne de caractères
    photo: '',                             // Ajouter une valeur par défaut pour 'photo'
    lastname: row.lastname,                // Utiliser les noms récupérés depuis la BDD
    firstname: row.firstname,              // Utiliser les prénoms récupérés depuis la BDD
                              // Ajouter un budget par défaut
  }));

  // Afficher la liste `patients` dans le terminal pour vérification
  console.log('Liste des patients formatée :', patients);

  // Fermer la connexion à la base de données
  await connection.end();

} catch (err) {
  console.error('Erreur lors de la récupération des utilisateurs :', err);
}
