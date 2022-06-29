// Return true if the passed string looks like a valid US phone number.
// The user may fill out the form field any way they choose as long as
// it has the format of a valid US number. The following are examples
// of valid formats for US numbers (refer to the tests for other
// variants):
// Examples:
//   555-555-5555
//   (555)555-5555
//   (555) 555-5555
//   555 555 5555
//   5555555555
//   1 555 555 5555
// For this challenge you will be presented with a string such as
// 800-692-7753 or 8oo-six427676;laskdjf. Validate or reject the
// US phone number based on any combination of the formats provided
// above. The area code is required. If the country code is provided,
// you must confirm that the country code is 1. Return true if the
// string is a valid US phone number; otherwise return false.

// Summary of Valid Phone Number
// -----------------------------
// 1. Starts with optional 1 USA country code: /^1?
// 2. Optional space: \s?
// 3. 3-digit Area Code - (Group) 3 digits enclosed in parentheses followed
//    by optional dash or space OR 3 digits (no parentheses) followed by
//    optional dash or space:
//    (\([0-9]{3}\)[- ]?|[0-9]{3}[- ]?)
// 4. 3-digit Exchange/Prefix followed by optional dash or space:
//    [0-9]{3}[- ]?
// 5. 4 digit Line Number ending the string: [0-9]{4}$/

function telephoneCheck (str) {
  return /^1?\s?(\([0-9]{3}\)[- ]?|[0-9]{3}[- ]?)[0-9]{3}[- ]?[0-9]{4}$/.test(str);
}

module.exports = telephoneCheck;
