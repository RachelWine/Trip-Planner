"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = require("body-parser");
const express = require("express");
const departures_router_1 = require("../routes/departures_router");
class Express {
    constructor(port) {
        this.m_port = port;
        this.m_express = express();
        this.setMiddlewares();
        this.mountRoutes();
    }
    init() {
        this.m_express.listen(this.m_port, () => {
            console.log(`Server is Running on port ${this.m_port}`);
        });
    }
    setMiddlewares() {
        this.m_express.use(body_parser_1.urlencoded({ extended: false }));
        this.m_express.use(body_parser_1.json());
    }
    mountRoutes() {
        this.m_express.use('/api', departures_router_1.default.router);
    }
}
exports.default = Express;
