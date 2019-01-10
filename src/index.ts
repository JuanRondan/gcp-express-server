import * as express from 'express';
import * as path from 'path';

const app: express.Express = express();
const env: string = process.env.NODE_ENV || "localhost";
const PORT = process.env.PORT || 3000;

app.use( express.static(path.join(__dirname + '/../public')));

app.get('/*', (req: express.Request, res: express.Response) => {
    res.sendFile(path.join(__dirname + '/../public'));
});

app.listen( PORT, () => {
    console.log( `Server listening on port ${PORT}` );
    console.log(path.join(__dirname + '/../public') );
});