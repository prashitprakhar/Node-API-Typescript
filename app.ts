import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';

class App {
    public express : express.Application;
   // public urlEncodedParser : bodyParser.urlencoded({extended: false});

    constructor(){
        this.express = express();
        this.middleware();
        this.routes();
    }

    private middleware(): void{

    }

    private routes(){
        let router = express.Router();
        router.get('/', (req, res) => {
            res.json({
                message : 'Hello World'
            });
        });
        this.express.use('/', router);
    }
}

export default new App().express;