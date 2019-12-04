const express = require("express")
const app = express()
//开启express的静态文件服务
app.use(express.static('public'))

app.listen(4000, () => {console.log('running 4000')})