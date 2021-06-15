"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("../providers/express");
const app_1 = require("../providers/app");
class Factory {
    static CreateServer(type, port) {
        if (type === "Express") {
            return new express_1.default(port);
        }
    }
    static CreateApp(type) {
        if (type === "basic") {
            return new app_1.default();
        }
    }
}
exports.default = Factory;
