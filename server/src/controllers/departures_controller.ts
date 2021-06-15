import { Request, Response } from 'express';
import IDeparture from '../interfaces/IDeparture';
import Db from '../providers/db';

const departures: IDeparture[] = Db.GetDb();

class DeparturesController {
    public static getDepartures(req: Request, res: Response): any {
        return res.json(departures);
    }
}


export default DeparturesController;