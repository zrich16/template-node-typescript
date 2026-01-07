"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsersController = void 0;
const user_service_1 = require("../service/user.service");
const getAllUsersController = async (req, res) => {
    try {
        const users = await (0, user_service_1.getAllUsers)();
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ message: "Error interno" });
    }
};
exports.getAllUsersController = getAllUsersController;
