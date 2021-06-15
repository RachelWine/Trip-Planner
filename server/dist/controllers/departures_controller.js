"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../providers/db");
const departures = db_1.default.GetDb();
class DeparturesController {
    static getDepartures(req, res) {
        return res.json(departures);
    }
}
exports.default = DeparturesController;
