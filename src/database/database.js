import  Sequelize  from 'sequelize';

export const sequelize = new Sequelize(
    'roles',
    'postgres',
    '123456',
    {
    host: 'localhost',
    dialect: 'postgres',

});

