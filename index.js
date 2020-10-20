"use strict";


let replaceAccentedCharacters = (function () {
  let translate_re = /[öäüÖÄÜ]/g;
  let translate = {
    "ä": "a",
    "ö": "o",
    "ü": "u",
    "Ä": "A",
    "Ö": "O",
    "Ü": "U" // probably more to come
  };
  return function (s = "") {
    return (s.replace(translate_re, function (match) {
      return translate[match];
    }));
  }
})();


const doTruncate = function (pre = "", firstName = "", middleName = "", lastName = "", post = "") {

  firstName = replaceAccentedCharacters(firstName).toUpperCase();
  middleName = replaceAccentedCharacters(middleName).toUpperCase();
  lastName = replaceAccentedCharacters(lastName).toUpperCase();

 
  let resp;
  resp = (firstName + " " + (middleName ? middleName + " " : "") + lastName).trim();
  if (resp.length <= 21) return resp.trim();

  resp = (firstName + " " + (middleName ? middleName[0] + " " : "") + lastName).trim();
  if (resp.length <= 21) return resp.trim();


  resp = (firstName.split(" ")[0] + " " + (middleName ? middleName[0] + " " : "") + lastName).trim();
  if (resp.length <= 21) return resp.trim();


  resp = ((firstName[0] || "") + " " + (middleName ? middleName[0] + " " : "") + lastName).trim();
  if (resp.length <= 21) return resp.trim();


  resp = ((firstName || "") + " " + lastName.split(" ")[0]).trim();
  if (resp.length <= 21) return resp.trim();

  resp = ((firstName.split(" ")[0] || "") + " " + lastName.split(" ")[0]).trim();
  if (resp.length <= 21) return resp.trim();

  resp = ((firstName.split(" ")[0] || "") + " " + lastName.split(" ")[0].split("-")[0]).trim();
  if (resp.length <= 21) return resp.trim();

  resp = ((firstName[0] || "") + " " + lastName).trim();
  if (resp.length <= 21) return resp.trim();

  resp = ((firstName[0] || "") + " " + lastName.split(" ")[0].split("-")[0]).substr(0, 21).trim();
  if (resp.length <= 21) return resp.trim();

  resp = ((firstName.split(" ")[0] || "") + " " + lastName.split(" ")[0]).trim();
  if (resp.length <= 21) return resp.trim();

  resp = ((firstName || "") + " " + lastName.split(" ")[0]).trim();
  if (resp.length <= 21) return resp.trim();

  resp = ((firstName[0] || "") + " " + lastName.split(" ")[0]).trim();
  if (resp.length <= 21) return resp.trim();

  resp = ((firstName[0] || "") + " " + lastName.split(" ")[0]).trim();
  if (resp.length <= 21) return resp.trim();

  resp = ((firstName[0] || "") + " " + lastName.split(" ")[0].split("-")[0]).substr(0, 21).trim();
  return resp.trim();
};


module.exports = doTruncate;