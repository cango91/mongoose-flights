const Flight = require('../models/flight');

const getAll = async (req, res) => {
    if (!req.query.sort) {
        req.query.sort = 'desc'
    }
    const flights = await Flight.find({})
        .sort({departs: req.query.sort==='desc' ? -1 : 1});
    console.log(flights);
    res.render('flights/index', {
        flights,
        sort: req.query.sort
    });
}

const _getDefaults = () => {
    const dt = new Flight().departs;
    const airport = new Flight().airport;
    const departs = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
    return { airport, departs };
}

const newFlight = (req, res) => {
    res.render('flights/new', {
        ..._getDefaults(),
        errorMsg: '',
    });
}

const create = async (req, res) => {
    try {
        await Flight.create(req.body);
        res.redirect('/flights');
    } catch (e) {
        res.render('flights/new', {
            ..._getDefaults(),
            errorMsg: e,
        })
    }
}



module.exports = {
    getAll,
    new: newFlight,
    create,
}