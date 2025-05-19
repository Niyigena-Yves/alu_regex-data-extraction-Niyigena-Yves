// 1. Email Address Validator
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

/**
 * Validates if the input is a valid email address.
 * @param {string} email - The email to validate
 * @returns {boolean} - True if the email is valid, false otherwise
 */
function validateEmail(email) {
  return emailRegex.test(email);
}

// 2. URL Validator
const urlRegex = /^(https?:\/\/)(www\.)?([a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+)(\/[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=]*)?$/;

/**
 * Validates if the input is a valid URL.
 * @param {string} url 
 * @returns {boolean}
 */
function validateURL(url) {
  return urlRegex.test(url);
}

// 3. Phone Number Validator
const phoneRegex = /^(\(\d{3}\)\s?|\d{3}[-.])\d{3}[-.]?\d{4}$/;

/**
 * Validates if the input is a valid phone number in formats like:
 * (123) 456-7890, 123-456-7890, or 123.456.7890
 * @param {string} phone 
 * @returns {boolean} 
 */
function validatePhone(phone) {
  return phoneRegex.test(phone);
}

// 4. HTML Tag Validator
const htmlTagRegex = /<([a-z][a-z0-9]*)\b[^>]*>|<\/([a-z][a-z0-9]*)\b[^>]*>/i;

/**
 * Validates if the input contains an HTML tag.
 * @param {string} html 
 * @returns {boolean} 
 */
function validateHTMLTag(html) {
  return htmlTagRegex.test(html);
}


// Export all validator functions
module.exports = {
  validateEmail,
  validateURL,
  validatePhone,
  validateHTMLTag,
};