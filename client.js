const net = require("net");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    port: 50542, 
    host: '135.23.223.133'
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on('connect', () => {
    console.log('connected');
    conn.write("Name: 0v0");
  });

  conn.on('data', (data) => {
    console.log(data);
  });
  
  return conn;  
};

module.exports = connect;