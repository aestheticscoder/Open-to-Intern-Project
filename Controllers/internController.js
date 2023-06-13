const collegeModel = require("..//Models/collegeModel");
const internModel = require("..//Models/internModel");
const validator = require("../validation/validator");

const createIntern = async (req, res) => {
  try {
    const data = req.body;
    const { name, mobile, email, collegeName } = data;

    if (Object.keys(data) == "") {
      return res
        .status(400)
        .send({ status: false, msg: "Please Provide Some Data" });
    }
    // if (!validator.isValidName(name)) {
    //   return res
    //     .status(400)
    //     .send({ status: false, msg: "Please Provide a Name" });
    // }

    if (!validator.isValidMobileNo(mobile)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please Provide a Valid Mobile Number" });
    }

    isMobileAlreadyUse = await internModel.findOne({ mobile });
    if (isMobileAlreadyUse) {
      return res.status(400).send({
        status: false,
        msg: "This Mobile Number is Already Registered",
      });
    }

    if (!validator.isValidEmail(email)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please Provide a Valid Email Id" });
    }

    isEmailAlreadyUse = await internModel.findOne({ email });
    if (isEmailAlreadyUse) {
      return res.status(400).send({
        status: false,
        msg: "This E-Mail ID is already Registered",
      });
    }

    if (!validator.isValid(collegeName)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please Provide a College Name" });
    }
    const findcollege = await collegeModel.findOne({ name: collegeName }); 
    if (!findcollege) {
      return res
        .status(400)
        .send({ status: false, msg: "No such College with this name exist" });
    }

    const collegeId = findcollege._id;

    const internData = {
      name: name,
      mobile: mobile,
      email: email,
      collegeId: collegeId,
    };

    const findIntern = await internModel.findOne(internData);

    if (findIntern) {
      return res
        .status(400)
        .send({ status: false, msg: "Intern Already Exists" });
    }

    const createIntern = await internModel.create(internData);
    if (createIntern) {
      return res.status(201).send({
        status: true,
        msg: "You are Successfully Enrolled",
        data: createIntern,
      });
    }
  } catch (error) {
    return res.status(500).send({ status: false, msg: error.message });
  }
};

module.exports = { createIntern };