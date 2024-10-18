import mysql from 'mysql2/promise';

// Fonction pour obtenir une connexion à la base de données
export async function getDatabaseConnection() {
  try {
    const connection = await mysql.createConnection({
      host: '192.168.168.23', // Adresse IP ou nom d'hôte
      user: 'servweb',   // Nom d'utilisateur MySQL
      password: 'Azertyuiop24&$', // Mot de passe MySQL
      database: 'baumann' // Nom de la base de données
    });

    console.log('Connexion à la base de données réussie !');
    return connection; // Retourne la connexion pour la réutiliser ailleurs

  } catch (err) {
    console.error('Erreur lors de la connexion à la base de données :', err);
    throw err; // Renvoie l'erreur pour la gérer dans l'appelant
  }
}
