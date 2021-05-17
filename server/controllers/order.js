const {Order} =require('../database/order')

module.exports.createOrder = async (req, res)=>{
    const newOrder = await Order.create({ 
        date: req.body.date,
        hour: req.body.hour,
        user_id: req.body.user_id,
        parking_id: req.body.parking_id
      });
        try {
            const saveOrder = await newOrder.save();
            console.log();
            res.json(saveOrder);
        }catch (err) {
            console.log(err);
        }
}


module.exports.getOrders = async (req, res)=>{
    try {
        const AllOrders = await Order.findAll();
        res.send(AllOrders);
      
    }catch (err) {
        console.log(err);
    }
}