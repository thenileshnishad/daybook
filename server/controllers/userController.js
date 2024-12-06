const me = (req, res) => {
  const { email, firstName, lastName } = req.user;
  res.status(200).json({
    message: "Profile fetch successfully!",
    data: { email, firstName, lastName },
  });
};

module.exports = { me };
