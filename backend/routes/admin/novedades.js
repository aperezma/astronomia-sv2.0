var express = require('express');
const { route } = require('./login');
var router = express.Router();
var novedadesModel = require('./../../models/novedadesModel');

// router.get('/', function(req, res, next) {
//     res.render('admin/novedades', {
//         layout: 'admin/novedades',
//         usuario: req.session.nombre,
//     }
//     );
// });

router.get('/', async function(req, res, next){
    var novedades = await novedadesModel.getNovedades();
    res.render('admin/novedades',{
       layout: 'admin/novedades',
       usuario: req.session.nombre,
       novedades 
    });
});

router.get('/agregar', async (req, res, next) => {
    res.render('admin/agregar', {
        layout: 'admin/agregar',
    });
});

router.post('/agregar', async (req, res, next) => {    
    try{
        if(req.body.titulo !='' && req.body.subtitulo != '' && req.body.cuerpo !=''){
            await novedadesModel.insertNovedad(req.body);
            res.redirect('/admin/novedades')
        } else {
            res.render('admin/agregar',{
                layout: 'admin/agregar',
                erro: true, message: 'Todos los campos son requeridos',
            })
        }
    } catch (error){
        console.log(error);
        res.render('admin/agregar',{
            layout: 'admin/novedades',
            error: true, message: 'No se cargo la novedad'
        })
    }
});

router.get('/modificar/:id', async (req, res) => {
    let id = req.params.id;
    let novedad = await novedadesModel.getNovedadById(id);
    res.render('admin/modificar', {
        layout: 'admin/modificar',
        novedad
    })
});

router.get('/eliminar/:id', async (req, res, next) => {
    var id = req.params.id;
    await novedadesModel.deleteNovedadById(id);
    res.redirect('/admin/novedades')
})
module.exports = router;