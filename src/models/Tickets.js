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
        type: DataTypes.STRING,
        validate: {
            isValidState: function (value) {
            const states = ['Vendido', 'Disponible', 'Reservado'];
            if(!states.includes(value)) {
                throw new Error('El estado del ticket no es valido');
            }
        }
    }
    },
    minTicket: {
        type: DataTypes.INTEGER,
        validate: {
            isMinTicketLessThanMaxTicket: function(value) {
                if (value > this.maxTicket) {
                throw new Error('minTicket debe ser menor o igual a maxTicket');
                }
            }
        }
    },
    maxTicket: {
        type: DataTypes.INTEGER,
        validate: {
            isMaxTicketGreaterThanMinTicket: function(value) {
                if (value < this.minTicket) {
                    throw new Error('maxTicket debe ser mayor o igual a minTicket');
                } 
            }
        }
    },          
    tickets_Stock:{
        type: DataTypes.INTEGER,
        validate: {
            isStock: function (value) {
            if (value < 0) {
                throw new Error('El stock no puede ser negativo');
            }
        }
    },
    
},

    price:{
        type: DataTypes.DECIMAL(10,2),
        defaultValue: 0.00
    },

    dateTicketSold: {
        type: DataTypes.DATEONLY,
        dateFomat: 'YYYY-MM-DD',
        validate: {
          isDateInPast: function(value) {
            if (value > new Date()) {
              throw new Error('La fecha no puede ser mayor a la fecha actual');
            }
          }
        }
},
},
{
    timestamps: false
});
