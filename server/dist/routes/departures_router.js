"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const departures_controller_1 = require("../controllers/departures_controller");
class DeparturesRouter {
    constructor() {
        this.router = express_1.Router();
        this.mountEndpoints();
    }
    mountEndpoints() {
        console.log("DeparturesRouter?");
        this.router.get('/', departures_controller_1.default.getDepartures);
    }
}
exports.default = new DeparturesRouter();
