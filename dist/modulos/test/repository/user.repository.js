"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsersDB = void 0;
const logger_1 = __importDefault(require("../../../logger/logger"));
const conexionPostgre_1 = __importDefault(require("../../../config/conexionPostgre"));
const getAllUsersDB = async () => {
    let result;
    try {
        result = await conexionPostgre_1.default.query("SELECT username,pass FROM usuarios");
        return result.rows;
    }
    catch (error) {
        logger_1.default.error(`Repository getAllUsersDB `);
        return null;
    }
};
exports.getAllUsersDB = getAllUsersDB;
