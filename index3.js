const events=require('events');
const { EventEmitter } = require('stream');

 const em = new events.EventEmitter();
em.on("firstevent",(data)=>{
    console.log('subscribe',data);
});

em.emit('firstevent','Thanks for Subscribing to PW');


//--------------------get default event listeners--------------
console.log("The default maximum number of event listeners are:",em.getMaxListeners());

//------------------update event listeners----------------
EventEmitter.defaultMaxListeners=5;

//-------------------get updated event listeners-------------
console.log("The update maximum number of event listeners are:",em.getMaxListeners());
