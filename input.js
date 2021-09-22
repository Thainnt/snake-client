const { MOVE, MSG } = require("./constants");

let connection;

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
    
  const handleUserInput = function (key) {
    if (key === '\u0003') {
      process.exit();
    }

    // if (Object.keys(MOVE).includes(key)) {
    //   connection.write(MOVE[key]);
    //   return;
    // }

    switch (key) {
      case "w":
        connection.write("Move: up");
        break;
      case "a":
        connection.write("Move: left");
        break;
      case "s":
        connection.write("Move: down");
        break;
      case "d":
        connection.write("Move: right");
        break;
    }

    connection.write("Say: go go go")
  };
  
  stdin.on("data", handleUserInput);

  stdin.on("data", (input) => {
    if (Object.keys(MSG).includes(input)) {
      connection.write(MSG.input);
    }
  });

  return stdin;
};

module.exports = {setupInput};