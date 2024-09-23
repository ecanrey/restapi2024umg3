const env = {
    database: 'restapi2024umg',
    username: 'restapi2024umg_user',
    password: 'I21a2JtQhLAovcgoYdPJDxwmS8qhl4tO',
    host: 'dpg-croglto8fa8c738rhgig-a.oregon-postgres.render.com', //cuando aun no este conectado git
    //host: 'dpg-cqc7lng8fa8c73ckr19g-a', //cuando ya esté conectado git
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

module.exports = env;