const swaggerAutogen = require('swagger-autogen')();
const router = require('express').Router();
const swaggerDocument = require('swagger-ui-express');
router.use('/api-docs', swaggerUI.serve);
router.get('/api-docs', swaggerUI.setup(swaggerDocument));

module.exports = router;

const doc = {
  info: {
    version: '',      // by default: '1.0.0'
    title: 'Contacts API',        // by default: 'REST API'
    description: 'CSE 341 Wpring 23 Contacts API',  // by default: ''
  },
  host: 'cse-342-spring23-w03.onrender.com',      // by default: 'localhost:3000'
  basePath: '',  // by default: '/'
  schemes: [https],   // by default: ['http']
  consumes: [],  // by default: ['application/json']
  produces: [application/json],  // by default: ['application/json']
  tags: [        // by default: empty Array
    {
      name: '',         // Tag name
      description: '',  // Tag description
    },
    // { ... }
  ],
  securityDefinitions: {},  // by default: empty object
  definitions: {},          // by default: empty object (Swagger 2.0)
  components: {}            // by default: empty object (OpenAPI 3.x)
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/index.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as: index.js, app.js, routes.js, ... */

// generate(outputFile, endpointsFiles, doc);
swaggerAutogen(outputFile, endpointsFiles, doc);

// Run server after it gets generated
// swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
//     await import('./routes/index.js'); // Your project's root file
// )};
