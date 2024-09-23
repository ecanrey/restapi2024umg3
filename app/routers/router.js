let express = require('express');
let router = express.Router();

const customers = require('../controllers/controller.js');
const canciones = require('../controllers/cancion.controller.js');
const libros = require('../controllers/libro.controller.js');

router.post('/api/customers/create', customers.create);
router.get('/api/customers/all', customers.retrieveAllCustomers);
router.get('/api/customers/onebyid/:id', customers.getCustomerById);
router.get('/api/customers/filteringbyage', customers.filteringByAge);
router.get('/api/customers/pagination', customers.pagination);
router.get('/api/customers/pagefiltersort', customers.pagingfilteringsorting);
router.put('/api/customers/update/:id', customers.updateById);
router.delete('/api/customers/delete/:id', customers.deleteById);

router.post('/api/canciones/create', canciones.create);
router.get('/api/canciones/all', canciones.retrieveAllCanciones);
router.get('/api/canciones/onebyid/:id', canciones.getCancionById);
router.put('/api/canciones/update/:id', canciones.updateById);
router.delete('/api/canciones/delete/:id', canciones.deleteById);

router.post('/api/libros/create', libros.create);

module.exports = router;