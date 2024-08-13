// for $ npm run dev
require('fs')
  .readdirSync(__dirname)
  .filter(n => require('fs').statSync(`${__dirname}/${n}`).isDirectory() && n !== 'docs.baikalplatform.com')
  .forEach(n =>
    require('fs').rm(`${__dirname}/${n}`, { recursive: true }, err => {
      if (err) console.log(err)
    })
  )
