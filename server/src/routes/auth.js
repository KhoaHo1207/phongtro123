import express from "express";

const router = express.Router(); // viet nhung cai route lien quan den xac thuc

router.get("/login", (req, res) => {
  res.send('ok')
});
export default router;
