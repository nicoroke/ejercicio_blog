const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");
const commentController = require("../controllers/commentController");
const userController = require("../controllers/userController");
const authenticatorController = require("../controllers/authenticatorController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const makeUserAvailableInViews = require("../middlewares/makeUserAvailableInViews");

router.get("/", mainController.index);
router.get("/articulo/:id", makeUserAvailableInViews, mainController.selectArticle);
router.post("/articulo/:id", makeUserAvailableInViews, commentController.createComment);

router.get("/admin", ensureAuthenticated, makeUserAvailableInViews, mainController.indexAdmin);
router.get(
  "/admin/crear",
  ensureAuthenticated,
  makeUserAvailableInViews,
  mainController.createForm,
);
router.post("/admin", ensureAuthenticated, makeUserAvailableInViews, mainController.createArticle);
router.get(
  "/admin/editar/:id",
  ensureAuthenticated,
  makeUserAvailableInViews,
  mainController.editForm,
);
router.post(
  "/admin/editar/:id",
  ensureAuthenticated,
  makeUserAvailableInViews,
  mainController.editArticle,
);
router.get(
  "/admin/eliminar/:id",
  ensureAuthenticated,
  makeUserAvailableInViews,
  mainController.deleteArticle,
);

router.get("/registro", makeUserAvailableInViews, userController.createForm);
router.post("/registro", userController.createUser);
router.get("/login", makeUserAvailableInViews, authenticatorController.index);
router.post("/login", authenticatorController.login);
router.get("/logout", makeUserAvailableInViews, userController.logout);

module.exports = router;
