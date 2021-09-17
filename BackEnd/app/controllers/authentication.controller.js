const fs = require('fs');
const fetch = require('node-fetch');

let authData = {};

fs.readFile(__dirname +'/../config/authenticate.json', "utf-8", (err, jsonString) => {
    if(err) {
        console.log("File read failed:", err);
        return;
    }  
    authData = JSON.parse(jsonString);
})

exports.generateToken = (req, res) => {

    console.log(authData);

    fetch('http://api.tektravels.com/SharedServices/SharedData.svc/rest/Authenticate',
    {
        method: 'POST',
        body: JSON.stringify(authData),
        headers: {'Content-Type': 'application/json'}
    })
    
    .then(res => res.json())
    
    .then(data => {
        console.log(data);
        if(data.Status != 1) {
            return res.status(201).send({
                errorCode: data.Error.ErrorCode,
                message: data.Error.ErrorMessage
            });
        } else {
            data.tokenId = data.TokenId;
            fs.writeFile(__dirname +'/../config/tokenId.json', JSON.stringify(data), (err) => {
                if(err) {
                    console.log(err);
                    res.status(201).send({
                        error: "Wont able to write into file"
                    });
                    return;
                }
                res.status(200).send(data);
            })
        }
    });
}