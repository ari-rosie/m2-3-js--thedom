// Preset values
const FROGS = 3;
let raceEnd = false;

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


//makes the frogs hop and stop when there is a winner
const racingFrog = function (racerFrog) {
    const race = setInterval(function() {
        let racerNum = racers.indexOf(racerFrog) + 1;
        let frog = document.querySelector(`#frog${racerNum}`);
        
        if (raceEnd)
            clearInterval(race);
        else
            frog.style.left = `${racerFrog.progress}%`;
            if (racerFrog.progress >= 100) {
                raceEnd = true;
            } else
                racerFrog.progress += racerFrog.hopDistance;
    }, racerFrog.hopInterval);
    
}

//calls the racing function for each frog
racers.forEach(function(racer) {
    racer.hopInterval = Math.floor(Math.random() * 5000);
    racer.hopDistance = Math.floor(Math.random() * 30);
    racer.progress = racer.hopDistance;

    racingFrog(racer);
    
});



