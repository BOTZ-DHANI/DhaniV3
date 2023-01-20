const fs = require('fs')
const chalk = require('chalk')

exports.rulesbot = (prefix) => {
return `
*Rules BOT*

  ❏ Dilarang spam bot wajib jeda 5detik
  ❏ Dilarang keras copy paste teks sc bot WhatsApp ini!
  ❏ Dilarang memasukan group ke group lain!
`
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
