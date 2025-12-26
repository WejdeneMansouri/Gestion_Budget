const db = require("../config/db");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "Tous les champs sont obligatoires" });
  }

  try {
    const [rows] = await db.promise().query(
      "SELECT id FROM utilisateur WHERE email = ?",
      [email]
    );

    if (rows.length > 0) {
      return res.status(409).json({ message: "Email déjà utilisé" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.promise().query(
      "INSERT INTO utilisateur (nom, email, password) VALUES (?, ?, ?)",
      [username, email, hashedPassword]
    );

    res.status(201).json({ message: "Compte créé avec succès" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur serveur" });
  }
};


exports.login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ message: "Tous les champs sont obligatoires" });

  try {
    const [rows] = await db.promise().query("SELECT * FROM utilisateur WHERE nom = ?", [username]);
    if (rows.length === 0) return res.status(404).json({ message: "Utilisateur non trouvé" });

    const user = rows[0];
    const match = await bcrypt.compare(password, user.password);

    if (!match) return res.status(401).json({ message: "Mot de passe incorrect" });

    res.status(200).json({ message: "Connexion réussie", user: { id: user.id, username: user.nom } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur serveur" });
  }
};