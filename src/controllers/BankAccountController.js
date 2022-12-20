import { BankAccount } from "../models/BankAccount.js";
import { Users } from "../models/Users.js";
import { Tickets } from "../models/Tickets.js";

export const getBankAccount = async (req, res) => {
    try {
        const bankAccount = await BankAccount.findAll();
        res.json({
        data: bankAccount,
        });
    } catch (e) {
        console.log("the error is: ", e);
    }
    }

export const getBankAccountById = async (req, res) => {
    let { id } = req.params;
    try {
        const bankAccount = await BankAccount.findOne({
        where: {
            id,
        },
        });
        res.json(bankAccount);
    } catch (e) {
        console.log("the error is: ", e);
    }
    }

    export const createBankAccount = async (req, res) => {
      const {id_user, id_tiket, evidence } = req.body;
       if(!id_user || !id_tiket){
        return res.status(500).json({
          message: "Missing data",
        });
      }
      const user = await Users.findOne({
        where: {
          id: id_user,
        },
      });
      if (!user) {
        return res.status(500).json({
          message: "User not found",
        });
      }
      const ticket = await Tickets.findOne({
        where: {
          id: id_tiket,
        },
      });
      if (!ticket) {
        return res.status(500).json({
          message: "Ticket not found",
        });
      }
      if(!user && !ticket){
        return res.status(500).json({
          message: "User and Ticket not found",
        });
      }
        try {
          let newBankAccount = await BankAccount.create({
            id_user,
            id_tiket,
            evidence,
          },{
            fields: ["id_user","id_tiket","account_number","account_type","type_balance","evidence"]
          });
          
      
          if (newBankAccount) {
            return res.json({
              message: "BankAccount created successfully",
              data: newBankAccount,
            });
          }
        } catch (e) {
          console.log("the error is: ", e);
          res.status(500).json({
            message: "Something goes wrong",
            data: {},
            });
        }
}
export const updateBankAccount = async (req, res) => {
    const { id } = req.params;
    const {id_user, id_tiket, account_number, account_type, type_balance, evidence } = req.body;
  
    try {
    
      const user = await Users.findOne({
        where: {
          id: id_user,
        },
      });
  
      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }
  
      const ticket = await Tickets.findOne({
        where: {
          id: id_tiket,
        },
      });
     
      if (!ticket) {
        return res.status(404).json({
          message: "Ticket not found",
        });
      }
  
      const bankAccounts = await BankAccount.findAll({
        attributes: ["id_user","id_tiket","account_number","account_type","type_balance","evidence"],
        where: {
            id,
          },
        });
    
        if (bankAccounts.length > 0) {
          bankAccounts.forEach(async (bankAccount) => {
            await bankAccount.update({
              id_user,
              id_tiket,
              account_number,
              account_type,
              type_balance,
              evidence,
            });
          });
        }
            return res.json({
          message: "BankAccount updated successfully",
          data: bankAccounts,
        });
      } catch (e) {
        console.log("the error is: ", e);
        res.status(500).json({
          message: "Something goes wrong",
          data: {},
        });
      }
}