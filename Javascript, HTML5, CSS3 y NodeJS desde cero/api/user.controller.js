const User = {
    list: (req, res) => {
        res.status(200).send('Hola chanchito')
    },
    create: (req, res) => {
        res.status(201).send('Creando un chanchito')
    },
    update: (req, res) => {
        res.status(204).send('Actualizando chanchito')
    },
    destroy: (req, res) => {
        res.status(204).send('Eliminando un chanchito :(')
    },
    get: (req, res) => {
        res.status(200).send('este es un chanchito')
    }
}

module.exports = User