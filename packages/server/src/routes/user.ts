import { Router } from "express";
import { Op } from "sequelize";
import { v4 as uuid } from "uuid";
import User from "../schemas/user";

const router = Router();

/** 유저 목록 */
router.get("/", async (req, res) => {
  try {
    const users = await User.findAndCountAll({
      where: {
        id: {
          // @ts-ignore
          [Op.ne]: req.session.userId,
        },
      },
    });
    res.json(users);
  } catch (error) {}
});

/** 세션 조회 */
router.get("/session", (req, res) => {
  try {
    res.json({
      // @ts-ignore
      username: req.session.username,
      // @ts-ignore
      userId: req.session.userId,
      // @ts-ignore
      isLogged: req.session.isLogged,
    });
  } catch (error) {}
});

/** 로그인 */
router.post("/signIn", async (req, res) => {
  try {
    const userId = uuid();
    const username = req.body.username;

    const user = await User.create({
      id: userId,
      username,
    });

    // @ts-ignore
    req.session.username = username;
    // @ts-ignore
    req.session.userId = userId;
    // @ts-ignore
    req.session.isLogged = true;

    // @ts-ignore
    req.session.save(() => {
      res.json({
        statusText: "OK",
        data: user,
      });
    });
  } catch (error) {}
});

/** 로그아웃 */
router.post("/signOut", (req, res) => {
  try {
    // @ts-ignore
    delete req.session.user;

    // @ts-ignore
    req.session.save(() => {
      res.redirect("/");
    });
  } catch (error) {}
});

export default router;
