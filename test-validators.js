// Import the validator functions
const {
  validateEmail,
  validateURL,
  validatePhone,
  validateHTMLTag,
} = require('./regex-validators');

// Test examples for each validator
function runTests() {
  console.log('=============================================');
  console.log('REGULAR EXPRESSION VALIDATION TEST RESULTS');
  console.log('=============================================\n');

  // Email validation tests
  console.log('1. EMAIL VALIDATION TESTS:');
  const emailTests = [
    'user@example.com',
    'firstname.lastname@company.co.uk',
    'invalid@email',
    '@missing.com',
    'no-domain@.com',
    'spaces not@allowed.com'
  ];
  
  emailTests.forEach(email => {
    console.log(`   "${email}" → ${validateEmail(email) ? 'VALID' : 'INVALID'}`);
  });
  console.log('');

  // URL validation tests
  console.log('2. URL VALIDATION TESTS:');
  const urlTests = [
    'https://www.example.com',
    'https://subdomain.example.org/page',
    'http://example.com',
    'htp://invalid.com',
    'not-a-url',
    'www.missing-protocol.com'
  ];
  
  urlTests.forEach(url => {
    console.log(`   "${url}" → ${validateURL(url) ? 'VALID' : 'INVALID'}`);
  });
  console.log('');

  // Phone validation tests
  console.log('3. PHONE NUMBER VALIDATION TESTS:');
  const phoneTests = [
    '(123) 456-7890',
    '123-456-7890',
    '123.456.7890',
    '1234567890',
    '123-45-7890',
    '(123)4567890'
  ];
  
  phoneTests.forEach(phone => {
    console.log(`   "${phone}" → ${validatePhone(phone) ? 'VALID' : 'INVALID'}`);
  });
  console.log('');

  // HTML tag validation tests
  console.log('4. HTML TAG VALIDATION TESTS:');
  const htmlTests = [
    '<p>',
    '<div class="example">',
    '<img src="image.jpg" alt="description">',
    'not a tag',
    '<123>',
    'just text with < and >'
  ];
  
  htmlTests.forEach(html => {
    console.log(`   "${html}" → ${validateHTMLTag(html) ? 'VALID' : 'INVALID'}`);
  });
  console.log('');
  
  console.log('\n=============================================');
  console.log('END OF TEST RESULTS');
  console.log('=============================================');
}

// Run the tests
runTests();