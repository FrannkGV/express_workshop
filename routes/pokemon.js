const express = require('express');
const pokemon = express.Router();
//const pokemonData = require('../pokedex.json').pokemon;
const db = require('../config/database');

pokemon.post("/", (req, res, next) => {
    return res.status(200).send(req.body);
});

pokemon.get("/", async (req, res, next) =>{
    const pokemonDB = await db.query("SELECT * FROM pokemon");
    return res.status(200).json(pokemonDB);
});

pokemon.get('/:id([0-9]{1,3})', async (req, res, next) =>{
    const id = req.params.id;
    (id >= 0 && id <= 150) ? res.status(200).send(pokemonData[id]) : res.status(404).send("Pokemon no encontrado!");
});

pokemon.get('/:name([A-Za-z]+)', (req, res, next) =>{
    const name = req.params.name;
    const pk = pokemonData.filter((p) =>{
        return (p.name.toUpperCase() == name.toUpperCase()) && p;
    });

    (pk.length > 0) ? res.status(200).send(pk) : res.status(404).send("Pokemon no encontrado!");
});

module.exports = pokemon;