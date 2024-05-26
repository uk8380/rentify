const Property = require('../models/Property');

exports.createProperty = async (req, res) => {
    const { place, area, bedrooms, bathrooms, nearbyHospitals, nearbyColleges,price } = req.body;

    try {
        const newProperty = new Property({
            user: req.user.id,
            place,
            area,
            bedrooms,
            bathrooms,
            nearbyHospitals,
            nearbyColleges,
            price,
        });

        const property = await newProperty.save();
        res.json(property);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getProperties = async (req, res) => {
    try {
        const properties = await Property.find();
        res.json(properties);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getProperty = async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);

        if (!property) {
            return res.status(404).json({ msg: 'Property not found' });
        }

        res.json(property);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.updateProperty = async (req, res) => {
    const { place, area, bedrooms, bathrooms, nearbyHospitals, nearbyColleges,price } = req.body;

    try {
        let property = await Property.findById(req.params.id);

        if (!property) {
            return res.status(404).json({ msg: 'Property not found' });
        }

        if (property.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        property = await Property.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });

        res.json(property);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.deleteProperty = async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);

        if (!property) {
            return res.status(404).json({ msg: 'Property not found' });
        }

        if (property.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        await property.remove();
        res.json({ msg: 'Property removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.likeProperty = async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);

        if (!property) {
            return res.status(404).json({ msg: 'Property not found' });
        }

        property.likes += 1;
        await property.save();

        res.json(property.likes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
