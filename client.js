const net = require("net");
const {IP, PORT, NAME, MOVE, MSG} = require('./constants');

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    port: PORT, 
    host: IP
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on('connect', () => {
    console.log('connected');
    conn.write(NAME);
    conn.write("Move: up");
  });

  // conn.on('connect', () => {
  //   conn.write("Move: up");
  //   conn.write("Move: down");
  //   conn.write("Move: left");
  //   conn.write("Move: right");
  // });

  conn.on('data', (data) => {
    console.log(data);
  });
  
  return conn;
};

module.exports = {connect};