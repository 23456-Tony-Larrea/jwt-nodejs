import { TicketSold } from "../models/TicketSold.js";
import { Tickets } from "../models/Tickets.js";



export const createTicketSold = async (req, res) => {
  try {
    const { name_user, id_ticket, quantity,numTransaction} = req.body;
     const image = req.file.path;

      const ticketSold = await TicketSold.create({
        name_user,
        id_ticket,
        quantity,
        image,
        numTransaction
      });
      console.log(ticketSold);
      const ticket = await Tickets.findOne({
        where: {
          id: id_ticket,
        },
      });
      if (!ticket) {
        throw new Error("Ticket not found in stock");
      }
      if (ticket.tickets_Stock < quantity) {
        throw new Error("No hay suficientes tickets en stock");
      }
      ticket.tickets_Stock -= quantity;
      await ticket.save();

      res.json({
        message: "Ticket sold successfully",
        data: ticketSold,
      });

  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const getTicketSold = async (req, res) => {
  try {
    const ticketSold = await TicketSold.findAll();
    res.json({
      data: ticketSold,
    });
  } catch (e) {
    console.log("the error is: ", e);
  }
}

export const getTicketsNotSold  = async (req, res) => {
  try {
    const tickets = await Tickets.findAll({
      where: {
        state_ticket: false,
      },
    });
    res.json({
      data: tickets,
    });
  } catch (e) {
    console.log("the error is: ", e);
  }
}

export const getTicketsSold  = async (req, res) => {
  try {
    const tickets = await Tickets.findAll({
      where: {
        state_ticket: true,
      },
    });
    res.json({
      data: tickets,
    });
  } catch (e) {
    console.log("the error is: ", e);
  }
}
// Actualiza el estado de un registro
export const updateTicketStatus = async (req, res) => {
  const id = req.params.id;
  const newStatus = req.body.state_ticket;

  TicketSold.findByPk(id)
    .then(ticket => {
      if (ticket) {
        ticket.state_ticket = newStatus;
        return ticket.save();
      } else {
        res.status(404).json({ message: 'Ticket no encontrado.' });
      }
    })
    .then(updatedTicket => {
      if (updatedTicket) {
        res.json(updatedTicket);
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: 'Error al actualizar el estado del ticket.' });
    });
};