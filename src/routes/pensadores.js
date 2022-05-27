const {Router} = require("express");
const router = Router();
const _ = require("underscore");

const pensadores = require("../sample.json");


router.get("/", (req, res) => {
    res.json(pensadores);
});

router.post("/", (req,res) => {
const {id, nombre, frase } = req.body;
    if(id && nombre && frase) {
        const id = pensadores.length + 1;
        const newPensador=
         {...req.body, id};
         pensadores.push(newPensador);
      res.json(pensadores);
    } else {
        res.status(500).json({error: "There was an error."});
    }
});


router.delete("/:id", (req,res) => {
    const {id} = req.params;
    _.each(pensadores, (pensador, i) => {
        if(pensador.id == id) {
            pensadores.splice(i, 1);
        }
    });
    res.send(pensadores);
});

router.put("/:id", (req, res) => {
    const {nombre, frase} = req.body;
    const {id} = req.params;
    if(id && nombre && frase) {
        _.each(pensadores, (pensador, i) => {
            if(pensador.id ==id) {
                pensador.nombre = nombre;
                pensador.frase = frase;
                pensador.id = id;
            }
        });
        res.json(pensadores);
    } else {
        res.status(500).json({error: "There was an error"});
    }
   
});


module.exports = router;