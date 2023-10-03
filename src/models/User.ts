import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/pg";

export interface UserInterface extends Model {
  id: number;
  name: string;
  age: number;
}

export const User = sequelize.define<UserInterface>(
  "User",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
      defaultValue: 18,
    },
  },
  { tableName: "users", timestamps: false }
);
