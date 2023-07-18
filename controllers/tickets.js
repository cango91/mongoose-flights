const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

const deleteOne = async (req, res) => {
    try {
        await Ticket.findByIdAndDelete(req.body.ticketId);
        res.redirect(`/flights/${req.params.id}`);
    } catch (e) {
        console.log(e);
    }
}

const create = async (req, res) => {
    try {
        const flight = await Flight.findById(req.params.id);
        if (!flight) throw new Error("Flight id not found!");
        req.body.flight = flight._id;
        await Ticket.create(req.body);
        res.redirect(`/flights/${flight._id}`);
    } catch (e) {
        console.log(e);
        res.redirect(`/flights/${req.params.id}/tickets/new`);
    }
}

const newTicket = async (req, res) => {
    try {
        const flight = await Flight.findById(req.params.id);
        if (!flight) throw new Error('Flight id not found');
        res.render('tickets/new', {
            flight,
            errMsg: ''
        });
    } catch (e) {
        console.log(e);
        res.render('tickets/new', {
            flight: null,
            errMsg: e
        });
    }
}


module.exports = {
    delete: deleteOne,
    create,
    new: newTicket
}