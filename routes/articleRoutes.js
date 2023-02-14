const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");
const commentController = require("../controllers/commentController");
const userController = require("../controllers/userController");

router.get("/", mainController.index);
router.get("/articulo/:id", mainController.selectArticle);
router.post("/articulo/:id", commentController.createComment);

router.get("/admin", mainController.indexAdmin);
router.get("/admin/crear", mainController.createForm);
router.post("/admin", mainController.createArticle);
router.get("/admin/editar/:id", mainController.editForm);
router.post("/admin/editar/:id", mainController.editArticle);
router.get("/admin/eliminar/:id", mainController.deleteArticle);

router.get("/registro", userController.createForm);
router.post("/registro", userController.storeUser);
router.get("/login", userController.loginForm);
router.post("/login", userController.authenticate);
router.get("/logout", userController.logout);

module.exports = router;
