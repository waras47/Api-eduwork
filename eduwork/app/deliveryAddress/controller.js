const DeliveryAdresss = require('./model');

const store = async (req, res, next ) => {
  try {

    let payload = req.body;
    let user = req.user;
    let address = new DeliveryAdresss({...payload, user: user._id});

    await address.save();
    return res.json(address);
  
  } catch (err) {
    if(err && err.name === 'ValidationError') {
      return res.json({
        error : 1,
        message : err.message,
        fields : err.errors
      });
    }
    next(err);
  }
}

//update

const update = async (req, res, next) => {
  try{
    let payload = req.body;
    let address = await DeliveryAdresss.findByIdAndUpdate(req.params.id, payload, {new: true, runValidators: true});
    return res.json(address);

  }catch (err) {
    if(err && err.name === 'ValidationError') {
      return res.json({
        error : 1,
        message : err.message,
        fields : err.errors
      });
    }
    next(err);
  }
}

//insert
const index = async (req, res, next) => {
  try {

    let address = await DeliveryAdresss.find();
    return res.json(address);
  }catch (err) {
    if(err && err.name === 'ValidationError') {
      return res.json({
        error : 1,
        message : err.message,
        fields : err.errors
      });
    }
    next(err);
  }
}

//delete
const destroy = async (req, res, next) => {
  try{
    let address = await DeliveryAdresss.findByIdAndDelete(req.params.id);
    return res.json(address);

  }catch (err) {
    if(err && err.name === 'ValidationError') {
      return res.json({
        error : 1,
        message : err.message,
        fields : err.errors
      });
    }
    next(err);
  }
}
module.exports = {
  store,
  index,
  update,
  destroy
}