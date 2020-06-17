// Preset values
const FROGS = 3;
const track = document.querySelector('#track');

for (let i = 0; i < FROGS; i++) {
    let lane = document.createElement('LI');
    let span = document.createElement('SPAN');
    
    lane.setAttribute('id', `lane-${i + 1}`);
    span.innerText = `Lane ${i + 1}`;
    
    track.appendChild(lane).appendChild(span);
}

let racers = [];
let randomN;

for (let i = 0; i < FROGS; i++) {
    randomN = Math.floor(Math.random() * frogStable.length);
    racers.push(frogStable[randomN]);
    frogStable.splice(randomN, 1);
}

