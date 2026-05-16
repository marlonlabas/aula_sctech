import { Model, DataTypes } from "sequelize";
import sequelize from "../db";

class Users extends Model {
  public id!: number;
  public user!: string;     // nome da propriedade no JavaScript
  public password!: string;
}

Users.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: "Users",
  tableName: "users",
  timestamps: true,
});

export default Users;