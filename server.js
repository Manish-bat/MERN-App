const express = require('express');
const winston = require('winston');
const expressWinston = require('express-winston');
const pino = require('express-pino-logger')();
const connectDB = require('./config/db');
const path = require('path');

const swaggerUi = require('swagger-ui-express');
const openApiDocumentation = require('./openApiDocumentation');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(pino);
// app.use(
//   expressWinston.logger({
//     transports: [new winston.transports.Console()],
//     format: winston.format.combine(
//       winston.format.colorize(),
//       winston.format.json()
//     ),
//     meta: false,
//     msg: 'HTTP  ',
//     expressFormat: true,
//     colorize: false,
//     ignoreRoute: function (req, res) {
//       return false;
//     },
//   })
// );

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiDocumentation));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
