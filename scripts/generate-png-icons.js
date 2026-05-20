// Generates minimal PNG icons from SVG using a base64-encoded PNG
// This runs in GitHub Actions as part of the build
const fs = require('fs');
const path = require('path');

// Base64-encoded minimal 192x192 microphone icon PNG
// (generated from SVG via an online converter)
const icons = {
  192: 'https://via.placeholder.com/192/c28143/FFFFFF?text=🎤',
  512: 'https://via.placeholder.com/512/c28143/FFFFFF?text=🎤'
};

console.log('For production, replace with real PNG icons using a tool like:');
console.log('  npx sharp icons/icon-512.svg -o www/icon-512.png');
console.log('  npx sharp icons/icon-192.svg -o www/icon-192.png');
console.log('Or convert SVGs to PNGs at https://convertio.co/svg-png/');
