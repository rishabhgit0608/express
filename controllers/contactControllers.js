//@desc GET all contacts
//@route GET /api/contacts
//@access public

const getAllContact = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};

//@desc GET a contacts
//@route GET /api/contacts/:id
//@access public

const getContact = (req, res) => {
  res.status(200).json({ message: `Get a contact ${req.params.id}` });
};

//@desc POST a contact
//@route POST /api/contacts
//@access public

const postContact = (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: `Create a contact` });
};

//@desc PUT all contacts
//@route PUT /api/contacts/:id
//@access public

const updateContact = (req, res) => {
  res.status(200).json({ message: `Update a contact ${req.params.id}` });
};

//@desc DELETE all contacts
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete a contact ${req.params.id}` });
};

module.exports = {
  getAllContact,
  postContact,
  updateContact,
  deleteContact,
  getContact,
};
