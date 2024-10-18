import mysql from 'mysql2/promise'; // Utiliser le sous-module promise pour les async/await

// Connexion à MySQL avec async/await
async function connectToDatabase() {
  try {
    // Créer une connexion à la base de données
    const connection = await mysql.createConnection({
      host: '192.168.168.23', // Remplacez par votre adresse IP ou nom d'hôte
      user: 'servweb',   // Remplacez par votre nom d'utilisateur
      password: 'Azertyuiop24&$', // Remplacez par votre mot de passe
      database: 'baumann' // Remplacez par le nom de la base de données
    });

    console.log('Connexion à la base de données réussie !');

    // Exécuter une requête
    const [rows, fields] = await connection.execute('SHOW TABLES');
    console.log('Tables dans la base de données :', rows);

    // Fermer la connexion
    await connection.end();
  } catch (err) {
    console.error('Erreur lors de la connexion à la base de données :', err);
  }
}

connectToDatabase();
