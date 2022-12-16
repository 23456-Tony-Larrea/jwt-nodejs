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
    account_number: {
        type: DataTypes.STRING
    },
    account_type: {
        type: DataTypes.STRING
    },
    type_balance: {
        type: DataTypes.FLOAT
    },
    evidence: {
        type: DataTypes.STRING
    },
   }, {
    timestamps: false
});

Users.hasMany(BankAccount, { foreignKey: 'user_id' });
BankAccount.belongsTo(Users, { foreignKey: 'user_id' });
Tickets.hasMany(BankAccount, { foreignKey: 'id_tiket' });
BankAccount.belongsTo(Tickets, { foreignKey: 'id_tiket' });
