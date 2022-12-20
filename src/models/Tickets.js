import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Tickets = sequelize.define('tickets', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    numberTikets: {
        type: DataTypes.STRING
    },
    state_ticket: {
        type: DataTypes.STRING
    },
    minTicket: {
        type: DataTypes.INTEGER
    },
    maxTicket: {
        type: DataTypes.INTEGER
    },
    dateTicketSold: {
        type: DataTypes.DATEONLY,
        dateFomat: 'dd/mm/yyyy'
},
}, {
    timestamps: false
});
