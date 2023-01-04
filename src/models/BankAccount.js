import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Users } from "./Users.js";
import { Tickets } from "./Tickets.js";

export const BankAccount = sequelize.define('bank_account', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_user: {
        type: DataTypes.INTEGER
    },
    id_tiket: {
        type: DataTypes.INTEGER
    },
    evidence: {
        type: DataTypes.STRING
    },
    
    
   }, {
    timestamps: false
});

Users.hasMany(BankAccount, { foreignKey: 'id_user' });
BankAccount.belongsTo(Users, { foreignKey: 'id_user' });
Tickets.hasMany(BankAccount, { foreignKey: 'id_tiket' });
BankAccount.belongsTo(Tickets, { foreignKey: 'id_tiket' });
