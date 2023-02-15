const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");
const commentController = require("../controllers/commentController");
const userController = require("../controllers/userController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

router.get("/", mainController.index);
router.get("/articulo/:id", mainController.selectArticle);
router.post("/articulo/:id", commentController.createComment);

router.get("/admin", ensureAuthenticated, mainController.indexAdmin);
router.get("/admin/crear", ensureAuthenticated, mainController.createForm);
router.post("/admin", ensureAuthenticated, mainController.createArticle);
router.get("/admin/editar/:id", ensureAuthenticated, mainController.editForm);
router.post("/admin/editar/:id", ensureAuthenticated, mainController.editArticle);
router.get("/admin/eliminar/:id", ensureAuthenticated, mainController.deleteArticle);

router.get("/registro", userController.createForm);
router.post("/registro", userController.createUser);
router.get("/login", userController.loginForm);
router.post("/login", userController.authenticate);
router.get("/logout", userController.logout);

module.exports = router;
