import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';

export const Users=sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.TEXT,
        unique: true
    },
    password: {
        type: DataTypes.TEXT
    },
    email: {
        type: DataTypes.TEXT,
        unique: true
    },
    role: {
        type: DataTypes.TEXT,
        defaultValue: 'user'
    },
    token: {
        type: DataTypes.TEXT
    },
    token_type: {
        type: DataTypes.TEXT
    }
  
}, {
    timestamps: false
});

