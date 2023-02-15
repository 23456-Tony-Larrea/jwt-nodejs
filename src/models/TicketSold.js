import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Users } from "./Users.js";
import { Tickets } from "./Tickets.js";

export const TicketSold = sequelize.define('ticket_sold', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name_user: {
        type: DataTypes.STRING
    },
    id_ticket: {
        type: DataTypes.INTEGER
    },
    quantity: {
        type: DataTypes.INTEGER
    },
    image: {
        type: DataTypes.STRING
    },
    numTransaction:{
        type: DataTypes.STRING
    },
     state_ticket: {
  type: DataTypes.BOOLEAN,
  defaultValue: false
} 
   }, {
    timestamps: false
});

Tickets.hasMany(TicketSold, { foreignKey: 'id_ticket' });
TicketSold.belongsTo(Tickets, { foreignKey: 'id_ticket' });

TicketSold.prototype.validateAndUpdateTicketStatus = async function(quantity) {
    // Obtener el ticket asociado al registro de ticket vendido actual
    const ticket = await Tickets.findOne({
      where: { id: this.id_ticket }
    });
  
    // Validar que el ticket exista y que haya suficientes unidades disponibles
    if (!ticket || ticket.tickets_Stock < quantity) {
      throw new Error('No hay suficientes tickets disponibles para la venta');
    }
  
    // Actualizar el estado del ticket y la cantidad disponible
    await Tickets.update(
      {
        state_ticket: 'Vendido',
        ticketsStock: ticket.ticketsStock - quantity
      },
      { where: { id: ticket.id } }
    );
  };