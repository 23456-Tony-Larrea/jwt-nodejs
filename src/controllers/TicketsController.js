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
    const { numberTikets, state_ticket } = req.body;
    try {
        let newTicket = await Tickets.create(
        {
            numberTikets,
            state_ticket,
        },
        {
            fields: ["numberTikets", "state_ticket"],
        }
        );
        if (newTicket) {
        return res.json({
            message: "Ticket created successfully",
            data: newTicket,
        });
        }
    } catch (e) {
        console.log("the error is: ", e);
        res.status(500).json({
        message: "Something goes wrong",
        data: {},
        });
    }
    };