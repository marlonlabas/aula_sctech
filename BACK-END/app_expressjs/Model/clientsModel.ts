import { Model, DataTypes } from "sequelize";
import sequelize from "../db";

class Clients extends Model {
  public id!: number;
  public name!: string;     // nome da propriedade no JavaScript
  public email!: string;
}

Clients.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "nome"           // ← Nome REAL da coluna no banco
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    field: "email"          // se a coluna também for "email" no banco
  }
}, {
  sequelize,
  modelName: "Clients",
  tableName: "clients",
  timestamps: true,
});

export default Clients;