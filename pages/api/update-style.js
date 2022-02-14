//imports
const fs = require('fs')

export default function handler(req, res) {
    if(req.body.length === 0) return res.json({error: true})
    let rawdata = fs.readFileSync('db.json')
    let db = JSON.parse(rawdata)
    let new_style = req.body.style
    db.settings.style = new_style
    let data = JSON.stringify(db, null, 2)
    fs.writeFileSync('db.json', data, (err)=>{
        console.log('data added')
    })
    res.status(200).json({error: false})
}