const express = require("express");
const app = express();
const server = require("http").Server(app);
const { v4: uuidv4 } = require("uuid");
app.set("view engine", "ejs");
const io = require("socket.io")(server, {
    cors: {
        origin: '*'
    }
});


var students_details = {
    
}
io.on("connection", (socket) => {
    socket.on("join-room", (roomId, userId, userName) => {
        socket.join(roomId);
        if (students_details[roomId]==undefined) students_details[roomId]={}
        students_details[roomId][userId] = { "name": userName, "points": 0 }

        io.to(roomId).emit("stu-details", students_details[roomId]);
        console.log(students_details[roomId])

        socket.on("question_done", (userId,points) => {
            // io.to(roomId).emit("createMessage", message, userName);
            students_details[roomId][userId]["points"] += points;
            console.log(students_details[roomId])
            io.to(roomId).emit("stu-details", students_details[roomId]);

        });
        socket.on('disconnect', function () {
            console.log("disconnected");
            delete students_details[roomId][userId]; 
            console.log(students_details[roomId])
            io.to(roomId).emit("stu-details", students_details[roomId]);

            // io.to(roomId).emit('user disconnected');
        });
    });
});

server.listen(process.env.PORT || 3030);
