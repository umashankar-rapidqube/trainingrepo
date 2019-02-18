

let multichain = require("multichain-node")({
    port: 6304,
    host: '127.0.0.1',
    user: "multichainrpc",
    pass: "4aoyBFcVjhwS4TNKLkkVM62Hx61qzeQGVG3Vrsi31EJN"
});



function getInfo(){
    
    return new Promise((resolve, reject)=>{
        multichain.getInfo((err, info) => {
            if(err){
                reject(err);
            }
            resolve(info);
        })
    })
    
}



/*
function createNewAddress()

function transferAsset()

function issueAsset()

function grantpermission()

function getwallerbalance()

*/