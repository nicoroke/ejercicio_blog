const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

router.get("/", mainController.index);
router.get("/articulo/:id", mainController.selectArticle);
router.get("/admin", mainController.indexAdmin);
router.get("/admin/crear", mainController.createForm);
router.post("/admin", mainController.createArticle);
router.get("/admin/editar/:id", mainController.editForm);
router.post("/admin/editar/:id", mainController.editArticle);
router.get("/admin/eliminar/:id", mainController.deleteArticle);

router.get("/test", mainController.test);

module.exports = router;
