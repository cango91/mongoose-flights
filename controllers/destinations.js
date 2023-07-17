const Flight = require('../models/flight');

const create = async (req,res)=>{
    try{
        const flight = await Flight.findById(req.params.id);
        flight.destinations.push(req.body);
        await flight.save();
        res.redirect(`/flights/${flight._id}`);
    }catch(e){
        console.log(e);
    }
}

module.exports = {
    create
}