const {model}=require('mongoose');
const {PositionSchema}=require('../schemas/PositionsSchema');

const positionModel=new model('Position', PositionSchema);
module.exports={positionModel};