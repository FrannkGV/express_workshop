module.exports = ("/", (req, res, next) => {
    res.status(200).json({code: 1, message: "Bienvenido al pokedex"});
});