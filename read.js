const fetch = require('node-fetch')
const URL = 'https://raw.githubusercontent.com/idris-maps/heig-datavis-2019/master/20'

fetch(URL)
.then(r=>r.text())
.then(console.log)