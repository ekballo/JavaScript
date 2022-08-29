//const events = require('events')

//console.log(events)

const { inherits } = require('util')
const { EventEmitter } = require('events')
//const ev = new EventEmitter()
function Charecter(name) {
    this.name = name
}
inherits(Charecter, EventEmitter)

const chapolin = new Charecter('Chapolin');
chapolin.on('help', () => console.log(`Eu! o ${chapolin.name} colorado!`))

console.log('Oh! e agora, quem poderá me defender?')
chapolin.emit('help')