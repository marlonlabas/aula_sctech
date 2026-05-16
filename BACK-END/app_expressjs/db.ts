import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// 🔥 Força carregar SOMENTE o .env da raiz (ignora .env.local etc)
dotenv.config({ 
  path: ".env",           // força usar apenas este arquivo
  override: true          // sobrescreve qualquer variável anterior
});

console.log("🔍 DB_NAME carregado:", process.env.DB_NAME);
console.log("🔍 DB_USER carregado:", process.env.DB_USER);
console.log("🔍 DB_HOST carregado:", process.env.DB_HOST);

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbHost = process.env.DB_HOST;

if (!dbName || !dbUser || !dbHost) {
  throw new Error("❌ Variáveis de ambiente não encontradas!");
}

const sequelize = new Sequelize(dbName, dbUser, dbPass, {
  host: dbHost,
  dialect: "mysql",
  logging: false,
});

export default sequelize;