const router = require('express').Router();
let Form = require('../models/form.model');

router.route('/').get((req, res) => {
  Form.find()
    .then(forms => res.json(forms))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const phone = req.body.phone;
  const email = req.body.email;
  const street = req.body.street;
  const city = req.body.city;
  const state = req.body.state;
  const zip = req.body.zip;
  

  const newForm = new Form({
    firstName,
    lastName,
    phone,
    email,
    street,
    city,
    state,
    zip
  });

  newForm.save()
  .then(() => res.json('Form added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;