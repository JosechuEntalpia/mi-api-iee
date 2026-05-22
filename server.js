const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API IEE funcionando");
});

app.post("/calcular", (req, res) => {
  const { caudal, saltoTermico } = req.body;

  const potencia = 1.2 * caudal * saltoTermico / 3600;

  res.json({
    caudal,
    saltoTermico,
    potencia_kw: Number(potencia.toFixed(2))
  });
});

app.get("/calcular", (req, res) => {
  res.send("La ruta /calcular existe, pero para calcular usa POST");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("API funcionando en puerto " + PORT);
});
