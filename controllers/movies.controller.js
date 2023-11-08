exports.getMovies = (req, res) => {
    try {
        return res.status(200).json({
            msg: "Exito al Consultar",
        });
    }catch (error) {
        return res.status(500).json({         
            msg: "Error al Consultar",
         
        });
    }
}

exports.getMovieById = (req, res) => {
    try {
        const movieId = req.params.movieId;
        return res.status(200).json({
            msg: "Exito al Consultar con el id: "+movieId,
        });
    }catch (error) {
        return res.status(500).json({         
            msg: "Error al Consultar",
            data: error
         
        });
    }
}

exports.newMovie = (req, res) => {
    try {
        const newMovie = req.body;
        return res.status(200).json({
            msg: "Pelicula Creada",
        });
    }catch (error) {
        return res.status(500).json({         
            msg: "Error al Crear Pelicula",
         
        });
    }
}

exports.updateMovie = (req, res) => {
    try {
        const movieId = req.params.movieId;
        const updateMovie = req.body;
        return res.status(200).json({
            msg: "Actualizar pelicula por id: "+movieId,
            data: updateMovie
        });
    }catch (error) {
        return res.status(500).json({         
            msg: "Error al Actualizar pelicula",
            data: error
        });
    }
}

exports.deleteMovie = (req, res) => {
    try {
        const movieId = req.params.movieId;
        return res.status(200).json({
            msg: "Pelicula eliminada con el id: "+movieId,
        });
    }catch (error) {
        return res.status(500).json({         
            msg: "Error al Eliminar Palicula",
            data: error
        });
    }
}