const express = require('express')
const app = express()
const port = 3000
const crypto = require("crypto");
const { exit } = require('process');

app.get('/sha1', (req, res) => {
    
    const s = req.query.s
    if(s === ""){
        res.status("500").send("<html>ERROR CHAINE VIDE</html>")
    }

    if(s.includes(" ")){
        res.status("500").send("<html>ERROR SPACE</html>")
    }
    
        
      

    const shasum = crypto.createHash('sha1')
    shasum.update(s)
    const charHashed = shasum.digest('hex')

    res.json("hash :"+ charHashed)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



