require('dotenv').config();
const app = require('./server');
require('./database/connection');

app.listen(app.get('port'), () =>
	console.log('Server on port', app.get('port'))
);
