"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = void 0;
const user_repository_1 = require("../repository/user.repository");
const logger_1 = __importDefault(require("../../../logger/logger"));
const getAllUsers = async () => {
    let data;
    try {
        logger_1.default.info(`Servicio   getAllUsers `);
        data = await (0, user_repository_1.getAllUsersDB)();
        return data;
    }
    catch (error) {
        logger_1.default.error(`Service  getAllUsers `);
        return null;
    }
};
exports.getAllUsers = getAllUsers;
