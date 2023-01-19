import app from './app.js';
import {sequelize} from './database/database.js';
import './models/Users.js';

async function main() {
    try{
    await sequelize.sync({force: false});
    console.log('Database is connected');
    await app.listen(4000);
    console.log('Server on port 4000');
    }catch(e){
        console.log("the error is: ", e);
    }
}
main();