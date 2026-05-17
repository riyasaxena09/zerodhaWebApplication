const {model}=require('mongoose');
const {HoldingSchema}=require('../schemas/HoldingsSchema');

const HoldingModel=new model('Holding',HoldingSchema);

module.exports={HoldingModel};