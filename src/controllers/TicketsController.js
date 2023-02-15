import { Tickets } from "../models/Tickets.js";


export const getTickets = async (req, res) => {
    try {
        const tickets = await Tickets.findAll();
        res.json({
        data: tickets,
        });
    } catch (e) {
        console.log("the error is: ", e);
    }
    }

export const getTicketById = async (req, res) => {
    let { id } = req.params;
    try {
        const ticket = await Tickets.findOne({
        where: {
            id,
        },
        });
        res.json(ticket);
    } catch (e) {
        console.log("the error is: ", e);
    }
    }

export const updateTicket = async (req, res) => {
    const { id } = req.params;
    const { numberTikets, state_ticket } = req.body;
    try {
        const tickets = await Tickets.findAll({
        attributes: ["id", "numberTikets", "state_ticket"],
        where: {
            id,
        },
        });
        if (tickets.length > 0) {
        tickets.forEach(async (ticket) => {
            await ticket.update({
            numberTikets,
            state_ticket,
            });
        });
        }
        return res.json({
        message: "Ticket updated successfully",
        data: tickets,
        });
    } catch (e) {
        console.log("the error is: ", e);
        res.status(500).json({
        message: "Something goes wrong",
        data: {},
        });
    }
    }

export const deleteTicket = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteRowCount = await Tickets.destroy({
        where: {
            id,
        },
        });
        res.json({
        message: "Ticket deleted successfully",
        count: deleteRowCount,
        });
    } catch (e) {
        console.log("the error is: ", e);
    }
    }

    export const createTicket = async (req, res) => {
        const { numberTikets, state_ticket, minTicket, maxTicket, dateTicketSold ,tickets_Stock,price} = req.body;
        try {
          let newTicket = await Tickets.create(
            {
              numberTikets,
              state_ticket,
              minTicket,
              maxTicket,
              dateTicketSold,
              tickets_Stock,
              price: price || 0.00
            },
            {
              fields: ['numberTikets', 'state_ticket', 'minTicket', 'maxTicket', 'dateTicketSold','tickets_Stock','price'],
              validate: {
                isValidStatus: function (value) {
                  const statuses = ['Vendido', 'Disponible', 'Reservado'];
                  if(!statuses.includes(value)) {
                    throw new Error('El estado del ticket no es válido');
                  }
                },
                isMinTicketLessThanMaxTicket: function(value) {
                  if (value > this.maxTicket) {
                    throw new Error('minTicket debe ser menor o igual a maxTicket');
                  }
                },
                isMaxTicketGreaterThanMinTicket: function(value) {
                  if (value < this.minTicket) {
                    throw new Error('maxTicket debe ser mayor o igual a minTicket');
                  }
                },
            }
        }
          );
          if (newTicket) {
            return res.json({
              message: 'Ticket created successfully',
              data: newTicket
            });
          }
        } catch (error) {
          console.log('the error is: ', error);
          res.status(500).json({
            message: 'Something goes wrong',
            data: {}
          });
        }
      };
