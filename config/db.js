import mysql from 'mysql2/promise';

async function connect() {
    if (global.connection && global.connection.state !== 'disconnected') {
        return global.connection;
    }

    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'pacf'
    });

    console.log('Conectado ao banco de dados');
    global.connection = connection;

    return connection;
}

export default connect;
