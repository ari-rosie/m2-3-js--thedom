// Preset values
const FROGS = 3;


//creating the track field
const track = document.querySelector('#track');

for (let i = 0; i < FROGS; i++) {
    let lane = document.createElement('LI');
    let span = document.createElement('SPAN');
    
    lane.setAttribute('id', `lane-${i + 1}`);
    span.innerText = `${i + 1}`;
    
    track.appendChild(lane).appendChild(span);
}


//creating the racers array
let racers = [];
let randomN;

for (let i = 0; i < FROGS; i++) {
    randomN = Math.floor(Math.random() * frogStable.length);
    racers.push(frogStable[randomN]);
    frogStable.splice(randomN, 1);
}


//adding each racer to its lane
racers.forEach(function(racer) {
    racer.progress = 0;

    let div = document.createElement('DIV');
    div.classList.add('frog');
    div.innerText = `${racer.name} ${racer.number} ${racer.progress}`;

    let position = racers.indexOf(racer);
    let frogLane = document.querySelector(`#lane-${position + 1}`);
   
    frogLane.appendChild(div);
    div.style.backgroundColor = `${racer.color}`;
    div.setAttribute('id', `frog${position + 1}`);

});




