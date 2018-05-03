module.exports={
    getPlanes: (res, req, next) =>{
        req.app.get('db').get_planes([25]).then(planes=>{
            res.status(200).send(planes)
        }).catch(err=>{
            console.logg(err)
            res.sendStatus(500)
        })
    },

}