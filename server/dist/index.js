"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const factory_1 = require("./interfaces/factory");
const server = factory_1.default.CreateServer("Express", 8000);
const app = factory_1.default.CreateApp("basic");
app.LoadServer(server);
