const qrcode = require('qrcode-terminal');
const fs = require('fs');

// Prompt the user to enter the data for which they want to generate a QR Code.
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter the data for the QR Code: ', (data) => {
  // Generate the corresponding QR Code and save it as an image file.
  qrcode.generate(data, { small: true }, (qr) => {
    // Save the generated QR Code image file.
    fs.writeFileSync(`qr.png`, qr);
    console.log(`QR Code saved as .png`);
    readline.close();
  });
});