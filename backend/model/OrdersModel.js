const {model}=require('mongoose');
const {OrderSchema}=require('../schemas/OrdersSchema');

const orderModel=new model('Order', OrderSchema);
module.exports={orderModel};