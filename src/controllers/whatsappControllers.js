const VerifyToken = (req, res) => {
    res.send("hola verifyToken")
}

const ReceivedMessage = (req, res) => {
    res.send("hola recibido")
}

module.exports = {
   VerifyToken,
   ReceivedMessage 
}