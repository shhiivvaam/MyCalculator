const express = require('express');
const app = express();
const PORT = 4444;

const path = require('path');

// Inorder to send public OR static file to the client : we have to use this
app.use(express.static(path.join(__dirname, 'static')));
// this __dirname: will follow the directory of this app.js only and since the static folder is in the same route, so `path..join` will locate the static folder path
// this app.use will work for -> '/'    :  and this will automatically take the app.use as the middleware where the path is '/'

app.listen(PORT, () => {
    console.log(`Server listening on PORT : ${PORT}`);
})