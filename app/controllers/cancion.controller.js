const db = require('../config/db.config.js');
const Cancion = db.Cancion;

exports.create = (req, res) => {
    let cancion = {};

    try {
        cancion.nombre = req.body.nombre;
        cancion.descripcion = req.body.descripcion;
        cancion.artista = req.body.artista;
        cancion.duracion = req.body.duracion;
        cancion.extension = req.body.extension;
        cancion.album = req.body.album;
        cancion.anio = req.body.anio;

        Cancion.create(cancion).then(result => {
            res.status(200).json({
                message: "Upload Successfully a Cancion with id = " + result.id,
                cancion: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
}

exports.retrieveAllCanciones = (req, res) => {
    Cancion.findAll()
        .then(cancionInfos => {
            res.status(200).json({
                message: "Get all Canciones' Infos Successfully!",
                canciones: cancionInfos
            });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
}

exports.getCancionById = (req, res) => {
    let cancionId = req.params.id;
    Cancion.findByPk(cancionId)
        .then(cancion => {
            res.status(200).json({
                message: "Successfully Get a Cancion with id = " + cancionId,
                cancion: cancion
            });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
}

exports.updateById = (req, res) => {
    let cancionId = req.params.id;
    Cancion.update(req.body, { where: { id: cancionId } })
        .then(() => {
            res.status(200).json({
                message: "Update Successfully a Cancion with id = " + cancionId,
            });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
}

exports.deleteById = (req, res) => {
    let cancionId = req.params.id;
    Cancion.destroy({ where: { id: cancionId } })
        .then(() => {
            res.status(200).json({
                message: "Delete Successfully a Cancion with id = " + cancionId,
            });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
}