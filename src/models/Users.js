import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';

export const Users=sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.TEXT
    },
    password: {
        type: DataTypes.TEXT
    },
    email: {
        type: DataTypes.TEXT
    },
    role: {
        type: DataTypes.TEXT
    },
    token: {
        type: DataTypes.TEXT
    },
       
}, {
    timestamps: false
});
