/*
Movie Kiosk:  Write the code to run a kiosk at a movie theater. Program should loop infinitely to
allow users to either see average rating of previous user entries, or enter their own review.

    Requirements:

Should store movie --title--, --current user rating--, --total rating--, and --number of ratings--
Should display a --list of movies-- to --review-- or an option to --rate a new movie--
Should allow user to --select-- a movie to --see average-- rating
Should allow --sorting-- of highest to lowest rated movies
*/

/*
Star Wars - Maze Runner
*/


"use strict";
const PROMPT = require (`readline-sync`);

let continueResponse;
let menu, list;
let newThing = [];

//totalStarRating, totalMazeRating, numberOfStarRatings, numberOfMazeRatings, StarAverage, MazeAverage;

function main() {
    setContinueResponse();
    while (continueResponse === 1) {
        setMenu();
        setList();
        setNew();
        setRated();
    }
}

main();

function setContinueResponse() {
    if (continueResponse === 1 || continueResponse === 0) {
        continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        while (continueResponse !== 0 && continueResponse !== 1) {
            console.log(`${continueResponse} is an incorrect value. Please try again.`);
            continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        }
    } else {
        continueResponse = 1;
    }
}

function setMenu() {
    menu = Number(PROMPT.question(`\nIf you would like to see a list of movies to review slect 1. If you would like to input a new movie to rate select 2.`))
    if (menu = 1) {
        setList();
    } else if (menu = 2) {
        setNew();
    } else {
        setRated();
    }
}

function setList() {
    for (let i = 0; i < 1; i++) {
        list[i] = []
}

function setNew() {

}





function setMenu() {
    if (menu === 1 || menu === 2) {
        menu = Number(PROMPT.question(`\nWould you like to view current movie ratings or rate one for yourself? Press 1 to view current movie rating or press 2 to rate your own movie.:`));
        while (menu !== 1 && menu !== 2) {
            console.log(`${menu} is an incorrect value. Please try again.`);
            menu = Number(PROMPT.question(`\nWould you like to view current movie ratings or rate one for yourself? Press 1 to view current movie rating or press 2 to rate your own movie.:`));
        }
    }
}


