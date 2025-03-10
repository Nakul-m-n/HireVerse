var skils = 'nodejs;express'

var m = skils.split(';');
console.log(m)

m.forEach(n => {
    console.log(' [] => ',n)
})