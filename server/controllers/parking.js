const Parking =require('../database/parking')

module.exports.createParking = async (req, res)=>{
    const newParking = await Parking.create({ 
        parkname: req.body.parkname,
        price: req.body.price,
        long: req.body.long,
        latit: req.body.latit,
        totalPlaces: req.body.totalPlaces,
        emptyPlaces: req.body.emptyPlaces,  
    });
      try {
          const saveParking = await newParking.save();
          console.log();
          res.json(saveParking);
      }catch (err) {
          console.log(err);
      }
  
}

module.exports.getParkings = async (req, res)=>{
    try {
        const AllParkings = await Parking.findAll();
        res.send(AllParkings);
    }catch (err) {
        console.log(err);
    }
}