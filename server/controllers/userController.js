const signup = async (req, res) => {
  try {
    const { email, firstName, lastName, password } = req.body;
    res.send(firstName);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something went wrong. Please try again later.",
    });
  }
};

module.exports = { signup };
