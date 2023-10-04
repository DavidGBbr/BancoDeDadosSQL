import { Request, Response } from "express";
import { Product } from "../models/Product";
import { User } from "../models/User";
import { Op } from "sequelize";

export const home = async (req: Request, res: Response) => {
  //BUILD + SAVE
  /* 
  const user = User.build({
    name: "Jorginho da Silva",
  });
  await user.save();
  */

  //CREATE
  const user = await User.create({
    name: "Fulano de Tal",
    age: 42,
  });

  console.log(`Nome: ${user.name}`);
  console.log(`Idade: ${user.age}`);

  let age: number = 90;
  let showOld: boolean = false;

  if (age > 50) {
    showOld = true;
  }

  let list = Product.getAll();
  let expensiveList = Product.getFromPriceAfter(12);

  res.render("pages/home", {
    name: "Bonieky",
    lastName: "Lacerda",
    showOld,
    products: list,
    expensives: expensiveList,
    frasesDoDia: [],
  });
};
