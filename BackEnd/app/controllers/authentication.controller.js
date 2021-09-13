const fs = require('fs');
const app = require('../app');
const needle = require('needle');

let authData = {};

fs.readFile(__dirname +'/../config/authenticate.json', "utf-8", (err, jsonString) => {
    if(err) {
        console.log("File read failed:", err);
        return;
    }  
    authData = JSON.parse(jsonString);
})

exports.generateToken = (req, res) => {
    needle.post('http://api.tektravels.com/SharedServices/SharedData.svc/rest/Authenticate', authData, {json: true}, (err, resp, body) => {
        if(err) {
            res.status(201).send({
                error: "Won't able to generator the String"
            })
            return;
        }
        let tokenId = {
            "tokenId": body.TokenId
        }
        fs.writeFile(__dirname +'/../config/tokenId.json', JSON.stringify(tokenId), (err) => {
            if(err) {
                console.log(err);
                res.status(201).send({
                    error: "Wont able to write into file"
                });
                return;
            }
            res.status(200).send(body);
        })
        
    })
}