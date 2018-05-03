module.exports = {
    getPlanes(req, res, next){
        req.app.get('db')
            .get_planes([25])
            .then(planes => res.send(planes))
            .catch(err => {
                console.log(err)
                res.status(500).send(err)
            })
    }

}