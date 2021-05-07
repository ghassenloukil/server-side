const Orders =require('../database/order')

module.exports.createOrder = async (req, res)=>{
    const newOrder = await Orders.create({ 
        parkname: req.body.parkname,
        price: req.body.price,
        long: req.body.long,
        latit: req.body.latit,
        totalPlaces: req.body.totalPlaces,
        emptyPlaces: req.body.emptyPlaces,  
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
        const AllOrders = await Orders.findAll();
        res.send(AllOrders);
    }catch (err) {
        console.log(err);
    }
}