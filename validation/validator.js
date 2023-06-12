const mongoose = require('mongoose');
const validator = require('validator');

// Validation for Name :

// const isValidName=function(name){
//     const regexName=/^[a-zA-Z]+$/;;
//     return regexName.test(name)
// };



// Validation for full name :

// const isValidFullName=function(fullName){
//     const regexFullName="[a-zA-Z]+\\.?";
//     return regexFullName.test(fullName);
// };

// Validation for mobile :

const isValidMobileNo=function(mobile){
    const regexMob=/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/g;
    return regexMob.test(mobile);
};

// Validation for email :

const isValidEmail=function(email){
    const regexEmail=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[com]+)*$/
    return regexEmail.test(email)
};

// Validation for values :

const isValid = function (value) {
    if (typeof value === "undefined" || value === null) return false;
    if (typeof value == "String" && value.trim().length === 0) return false;
    return true;
  };

  // Validation for ObjectId :

  const isValidObjectId = function (objectId) {
    return mongoose.Types.ObjectId.isValid(objectId);
  };
  

  // Validation for logoLink :

  const isValidlogoLink = function (logoLink) {
    const regexLogoLink = /^(http|https):\/\/[^\s/$.?#].[^\s]*$/;
    return regexLogoLink.test(logoLink);
  };
  
  module.exports = {
    isValid,
    // isValidFullName,
    isValidMobileNo,
    isValidEmail,
    // isValidName,
    isValidObjectId,
    isValidlogoLink
  };