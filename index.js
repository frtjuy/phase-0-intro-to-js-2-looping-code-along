// Code your solutions in this file
let names = []
let card = []

function writeCards(names, event) {
    for (let i=0; i < names.length; i++) {
        let name = names
        card.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
        debugger;
    }
    return card
}

function countDown (num) {
    for (let i=num; i > -1 ; --i) {
        console.log(i);
    }
}