"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var appointments_routes_1 = __importDefault(require("./appointments.routes"));
var routes = express_1.Router();
routes.use('/appointments', appointments_routes_1.default);
routes.post('/users', function (request, response) {
    var _a = request.body, name = _a.name, email = _a.email;
    var user = {
        name: name,
        email: email,
    };
    return response.json(user);
});
exports.default = routes;
