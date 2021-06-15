import { Router } from 'express';
import DeparturesController from '../controllers/departures_controller';


class DeparturesRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.mountEndpoints();
    }

    private mountEndpoints() {
        this.router.get('/', DeparturesController.getDepartures);
    }
}

export default new DeparturesRouter();