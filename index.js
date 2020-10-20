"use strict";


let replaceAccentedCharacters = (function () {
  let translate_re = /[öäüÖÄÜ]/g;
  let translate = {
    "ä": "a",
    "á": "a",
    "à": "a",
    "â": "a",
    "ã": "a",
    "å": "a",
    "Á": "A",
    "À": "A",
    "Â": "A",
    "Ä": "A",
    "Ã": "A",
    "Å": "A",
    "æ": "ae",
    "Æ": "AE",
    "ç": "c",
    "Ç": "C",
    "é": "e",
    "É": "E",
    "è": "e",
    "È": "e",
    "ê": "e",
    "Ê": "e",
    "ë": "e",
    "Ë": "e",
    "í": "i",
    "Í": "I",
    "ì": "i",
    "Ì": "I",
    "î": "i",
    "Î": "i",
    "ï": "i",
    "Ï": "i",
    "ñ": "n",
    "Ñ": "n",
    "ó": "o",
    "Ó": "o",
    "ò": "o",
    "Ò": "O",
    "ô": "o",
    "Ô": "O",
    "ö": "o",
    "Ö": "O",
    "õ": "o",
    "Õ": "O",
    "ø": "o",
    "Ø": "O",
    "œ": "oe",
    "Œ	": "OE",
    "ú": "u",
    "Ú": "U",
    "ù": "u",
    "Ù": "U",
    "û": "u",
    "Û": "U",
    "ü": "u",
    "Ü": "U",
    "ž": "z",
    "Ž": "Z",
    "š": "s",
    "Š": "S",
    "Ý": "Y",
    "ý": "y",
    "Ÿ": "y",
    "ÿ": "y",
    "aaaaa": "aaaaa",
  };
  return function (s = "") {
    return (s.replace(translate_re, function (match) {
      return translate[match];
    }));
  }
})();


let doRemoveExtraSpaces = function (given = "") {
  return (given + "").replaceAll("  ", " ").replaceAll("  ", " ").replaceAll("  ", " ").trim();
}

const doTruncate = function (pre = "", firstName = "", middleName = "", lastName = "", post = "") {

  firstName = replaceAccentedCharacters(firstName).toUpperCase();
  middleName = replaceAccentedCharacters(middleName).toUpperCase();
  lastName = replaceAccentedCharacters(lastName).toUpperCase();


  let resp;
  resp = doRemoveExtraSpaces(pre + " " + firstName + " " + (middleName ? middleName + " " : "") + lastName + " " + post)
  if (resp.length <= 21) return resp;

  resp = doRemoveExtraSpaces(firstName + " " + (middleName ? middleName + " " : "") + lastName + " " + post)
  if (resp.length <= 21) return resp;

  resp = doRemoveExtraSpaces(firstName + " " + (middleName ? middleName + " " : "") + lastName)
  if (resp.length <= 21) return resp;

  resp = doRemoveExtraSpaces(pre + " " + firstName + " " + (middleName ? middleName[0] + " " : "") + lastName + " " + post)
  if (resp.length <= 21) return resp;

  resp = doRemoveExtraSpaces(firstName + " " + (middleName ? middleName[0] + " " : "") + lastName + " " + post)
  if (resp.length <= 21) return resp;

  resp = doRemoveExtraSpaces(firstName + " " + (middleName ? middleName[0] + " " : "") + lastName);
  if (resp.length <= 21) return resp;

  resp = doRemoveExtraSpaces(pre + " " + firstName.split(" ")[0] + " " + (middleName ? middleName[0] + " " : "") + lastName + " " + post);
  if (resp.length <= 21) return resp;

  resp = doRemoveExtraSpaces(firstName.split(" ")[0] + " " + (middleName ? middleName[0] + " " : "") + lastName + " " + post);
  if (resp.length <= 21) return resp;

  resp = doRemoveExtraSpaces(firstName.split(" ")[0] + " " + (middleName ? middleName[0] + " " : "") + lastName);
  if (resp.length <= 21) return resp;

  resp = doRemoveExtraSpaces((firstName[0] || "") + " " + (middleName ? middleName[0] + " " : "") + lastName);
  if (resp.length <= 21) return resp;

  resp = doRemoveExtraSpaces((firstName || "") + " " + lastName.split(" ")[0]);
  if (resp.length <= 21) return resp;

  resp = doRemoveExtraSpaces((firstName.split(" ")[0] || "") + " " + lastName.split(" ")[0]);
  if (resp.length <= 21) return resp;

  resp = doRemoveExtraSpaces((firstName.split(" ")[0] || "") + " " + lastName.split(" ")[0].split("-")[0]);
  if (resp.length <= 21) return resp;

  resp = doRemoveExtraSpaces((firstName[0] || "") + " " + lastName);
  if (resp.length <= 21) return resp;

  resp = doRemoveExtraSpaces((firstName[0] || "") + " " + lastName.split(" ")[0].split("-")[0]).substr(0, 21);
  if (resp.length <= 21) return resp;

  resp = doRemoveExtraSpaces((firstName.split(" ")[0] || "") + " " + lastName.split(" ")[0]);
  if (resp.length <= 21) return resp;

  resp = doRemoveExtraSpaces((firstName || "") + " " + lastName.split(" ")[0]);
  if (resp.length <= 21) return resp;

  resp = doRemoveExtraSpaces((firstName[0] || "") + " " + lastName.split(" ")[0]);
  if (resp.length <= 21) return resp;

  resp = doRemoveExtraSpaces((firstName[0] || "") + " " + lastName.split(" ")[0]);
  if (resp.length <= 21) return resp;

  resp = doRemoveExtraSpaces((firstName[0] || "") + " " + lastName.split(" ")[0].split("-")[0]).substr(0, 21);
  return resp;
};


module.exports = doTruncate;