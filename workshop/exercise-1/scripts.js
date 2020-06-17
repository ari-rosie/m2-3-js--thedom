// Add your code here!
const main = document.createElement("MAIN");
const h1 = document.createElement("H1");
const h2 = document.createElement("H2");
const p = document.createElement("P");

const imgRobin = document.createElement("IMG");

document.body.appendChild(main);

// FIRST SINGLE ELEMENTS OF THE PAGE
main.appendChild(h1);
main.appendChild(p).setAttribute('id','intro');
main.appendChild(h2);


// WRITES 3 'P' ELEMENTS
for (let i = 0; i < 3; i++) {
    main.appendChild(document.createElement("P")).setAttribute('id', `paragraph${i + 1}`);
}


//ADDS TEXT TO TITLES
h1.innerText = "The best How I Met Your Mother episode (according to fans)";
h2.innerText = "The Slap Bet (Season 2, Episode 9)";

//ADDS TEXT TO PARAGRAPHS
document.querySelector('#intro').innerText = "As impossible as it seems to name just 1 of the 20\8\ legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…";
document.querySelector('#paragraph1').innerText = "IMDB Rating: 9.5";
document.querySelector('#paragraph2').innerText = "In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.";
document.querySelector('#paragraph3').innerText = "In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).";

//ADDS IMAGE
const p2 = document.querySelector('#paragraph2');
main.insertBefore(imgRobin, p2);
imgRobin.setAttribute('src', 'images/robin-sparkles.jpg');
imgRobin.setAttribute('alt', 'Robin Sparkles');

//ADDS BOTTOM LINK
const link = document.createElement("A");
main.appendChild(link).setAttribute('href', 'https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/');
link.innerText = "Source";

//ADDS STYLE SHEET
const head = document.querySelector('head');
const style = document.createElement("LINK");
style.setAttribute('href', 'styles.css');
style.setAttribute('rel', 'stylesheet');
head.appendChild(style);
