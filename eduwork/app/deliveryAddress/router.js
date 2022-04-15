const { police_check } = require('../../middlewares');
const deliveryAddressController = require('./controller');
const router = require('express').Router();

router.get('/delivery-addresses', deliveryAddressController.index);

router.post(
  '/delivery-addresses', 
  police_check('create', 'deliveryAddress'),
  deliveryAddressController.store
  );

router.put('/delivery-addresses/:id',   
  police_check('update', 'deliveryAddress'),
  deliveryAddressControllerr.update
);
router.delete('/delivery-addresses/:id',   
  police_check('delete', 'deliveryAddress'),
  deliveryAddressController.destroy
);


module.exports = router;
