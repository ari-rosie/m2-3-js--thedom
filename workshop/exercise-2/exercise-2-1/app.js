// Preset values
const FROGS = 3;

// 1. Create for loop that makes use of FROGS to know how many lanes to create.
// 2. Create li
// 3. Create span and add it to the li
// 4. Assign an id to each lane

const track = document.querySelector('#track');

for (let i = 0; i < FROGS; i++) {
    let lane = document.createElement('LI');
    let span = document.createElement('SPAN');
    
    lane.setAttribute('id', `lane-${i + 1}`);
    span.innerText = `Lane ${i + 1}`;
    
    track.appendChild(lane).appendChild(span);
}