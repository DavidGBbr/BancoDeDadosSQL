import { Request, Response } from "express";
import { Product } from "../models/Product";
import { User } from "../models/User";
import { Op } from "sequelize";

export const home = async (req: Request, res: Response) => {
  const [usuario, created] = await User.findOrCreate({
    where: { name: "Bonieky" },
    defaults: { age: 80 },
  });

  if (created) {
    console.log("Usuário criado com sucesso!");
  } else {
    console.log(`Achamos o usuário: ${usuario.name}`);
  }

  const users = await User.findAll();

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
    users,
  });
};

export const novoUsuario = async (req: Request, res: Response) => {
  let { name, age } = req.body;

  if (name) {
    const newUser = User.build({ name });

    if (age) {
      newUser.age = parseInt(age);
    }

    await newUser.save();
  }

  res.redirect("/");
};
