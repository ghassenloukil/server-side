const Parking =require('../database/parking')

module.exports.createParking = async (req, res)=>{
    const newOrder = await Parking.create({ 
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

module.exports.getParkings = async (req, res)=>{
    try {
        const AllOrders = await Parking.findAll();
        res.send(AllOrders);
    }catch (err) {
        console.log(err);
    }
}