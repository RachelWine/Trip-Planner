import { json, urlencoded } from 'body-parser';
import * as express from 'express';

import IServer from '../interfaces/IServer';
import TripsRouter from "../routes/departures_router";


class Express implements IServer {
    private m_express: express.Application;
    private m_port: number;

    constructor(port: number) {
        this.m_port = port;
        this.m_express = express();
        this.setMiddlewares();
        this.mountRoutes();
    }

    public init(): void {
        this.m_express.listen(this.m_port, (): void => {
            console.log(`Server is Running on port ${this.m_port}`);
        })
    }

    private setMiddlewares() {
        this.m_express.use(urlencoded({ extended: false }));
        this.m_express.use(json());
    }

    private mountRoutes(): void {
        this.m_express.use('/api', TripsRouter.router);
    }
}


export default Express;