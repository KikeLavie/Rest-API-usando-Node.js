// routes

const {Router} = require("express");
const router = Router();

router.get("/pensadoresfilosoficos", (req, res) => {
    const data = {
        "nombre":"Baruch Spinoza",
        "frase":"Quienes destacan por su inteligencia y la cultivan al máximo, tienen el poder de imaginar más moderado y más controlado, como si lo sujetaran con un freno para que no se confunda con el entendimiento."
    }


    res.json(data);
});

module.exports = router;
