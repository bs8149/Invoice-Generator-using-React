# Invoice-Generator-using-React
# Invoice Generator
This project is a React.js application for generating invoices based on user input. It allows users to input seller details, billing details, shipping details, order details, and item details to create a comprehensive invoice.

# Table of Contents
Features
Installation
Usage
File Structure
Technologies Used
Contributing
License

# Features
Placeholder for the company logo
Input fields for seller details, billing details, shipping details, order details, and item details
Calculation of net amount, tax amount, and total amount payable
Dynamic addition of items
Display of invoice in a structured format
Signature image upload
Amount in words conversion
Option to handle reverse charge

# Installation
Install the dependencies for the server: 
npm install @mui/material @emotion/react @emotion/styled @mui/styled-engine-sc styled-components number-to-words
npm start
Open your browser and navigate to http://localhost:3000.

(
@mui/material @emotion/react @emotion/styled @mui/styled-engine-sc styled-components - For Material UI Components,
number-to-words - Library used for the conversion of numbers to word
)

Fill in the required details in the form to generate an invoice.

# File Structure:
invoice-generator
├── public
├── src
│   ├── components
│   │   └── InvoiceForm.js
│   ├── App.jsx
│   ├── index.jsx
│   └── App.css
|   └── index.css
├── .gitignore
├── README.md
└── package.json

# Technologies Used
React.js
Material-UI

# Utilities:
number-to-words: For converting amounts to words
