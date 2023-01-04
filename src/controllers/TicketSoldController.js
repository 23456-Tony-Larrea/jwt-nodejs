import { TicketSold } from "../models/TicketSold.js";
import { Tickets } from "../models/Tickets.js";



export const createTicketSold = async (req, res) => {
  try {
    const { id_user, id_ticket, quantity} = req.body;
     const image = req.file.path;

      const ticketSold = await TicketSold.create({
        id_user,
        id_ticket,
        quantity,
        image
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