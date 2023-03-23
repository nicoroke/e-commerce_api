require("dotenv").config();

const cors = require("cors");
const express = require("express");
const routes = require("./routes");
const APP_PORT = process.env.APP_PORT || 8000;
const app = express();

/* app.use(methodOverride("_method")); */
app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

routes(app);

app.listen(APP_PORT, () => {
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}.`);
  console.log(`[Express] Ingresar a http://localhost:${APP_PORT}.\n`);
});
