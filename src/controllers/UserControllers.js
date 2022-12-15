import {Users} from '../models/Users.js'
export const getUser = async (req, res) => {
    try{
        const users = await Users.findAll(); 
        res.json({
            data: users
        });
    }catch(e){
        console.log("the error is: ", e);
    }
}

export const getUserById = async (req, res) => {
    let {id} = req.params;
    try{
        const user = await Users.findOne({
            where: {
                id
            }
        });
        res.json(user);
    }catch(e){
        console.log("the error is: ", e);
    }
}

export const updateUser = async (req, res) => {
    const {id} = req.params;
    const {username, password, email, role} = req.body;
    try{
        const users = await Users.findAll({
            attributes: ['id', 'username', 'password', 'email', 'role'],
            where: {
                id
            }
        });
        if(users.length > 0){
            users.forEach(async user => {
                await user.update({
                    username,
                    password,
                    email,
                    role
                });
            });
        }
        return res.json({
            message: 'User updated successfully',
            data: users
        });
    }catch(e){
        console.log("the error is: ", e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

export const deleteUser = async (req, res) => {
    const {id} = req.params;
    try{
        const deleteRowCount = await Users.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'User deleted successfully',
            count: deleteRowCount
        });
    }catch(e){
        console.log("the error is: ", e);
    }
}

