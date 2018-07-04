/* eslint no-console: "off" */
const server = require('./server');

const PORT = process.env.PORT || 5000;

server.listen(process.env.PORT || 5000, () => console.log(`Server is listening on ${PORT}`));
