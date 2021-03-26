const express = require('express');
const pokemon = express.Router();
//const pokemonData = require('../pokedex.json').pokemon;
const db = require('../config/database');

pokemon.post("/", (req, res, next) => {
    return res.status(200).send(req.body);
});

pokemon.get("/", async (req, res, next) =>{
    const pokemonDB = await db.query("SELECT * FROM pokemon");
    return res.status(200).json({code: 1, message: pokemonDB});
});

pokemon.get('/:id([0-9]{1,3})', async (req, res, next) =>{
    const id = req.params.id;
    if(id >= 0 && id <= 722){
        const pokemonDB = await db.query("SELECT * FROM pokemon WHERE pok_id="+id+";");
        return res.status(200).json({code: 1, message: pokemonDB});
    }
    res.status(404).json({ code: 404, message: "Pokemon no encontrado!" }); 
});

pokemon.get('/:name([A-Za-z]+)', async (req, res, next) =>{
    const name = req.params.name;
    const pokemonDB = await db.query("SELECT * FROM pokemon WHERE pok_name="+name+";");

    if(pokemonDB.length > 0){
        return res.status(200).json({code: 1, message: pokemonDB});
    }
    return res.status(404).json({ code: 404, message: "Pokemon no encontrado!" }); 
});

module.exports = pokemon;