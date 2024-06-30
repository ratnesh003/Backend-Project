import { Router } from "express";

const router = Router();

router.route("/register").post((req, res) => {
    res.status(200).json({
        message: "Hello to user from register route"
    })
})

export default router;