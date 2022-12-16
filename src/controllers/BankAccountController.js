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
    const {id_user,id_tiket,account_number,account_type,type_balance,evidence} = req.body;
    try {
        let newBankAccount = await BankAccount.create({
        id_user,
        id_tiket,
        account_number,
        account_type,
        type_balance,
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