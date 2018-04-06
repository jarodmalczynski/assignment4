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
let newMovie = [];

//totalStarRating, totalMazeRating, numberOfStarRatings, numberOfMazeRatings, StarAverage, MazeAverage;

function main() {
    setContinueResponse();
    while (continueResponse === 1) {
        setMenu();
        switch (menu) {
            case 1: seeList(); setReview();
                break;
            case 2: setNewMovie(); setNewReview();
                break;
            case 3: setRated();
                break;
            default: console.log(`! ERROR !`);
        }
        setContinueResponse();
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
    menu = -1;
    while (menu !== 1 && menu !== 2 && menu !== 3) {
        menu = Number(PROMPT.question(
           `\tPlease make a selection:
           \t\t1) See list of movies to review
           \t\t2) Input a new movie to review
           \t\t3) See list of movies rated high to low
           \t\tCHOOSE: `
        ));
    }
}

function seeList() {
    list = -1;
    while (list !== 1 && list !== 2 && list !== 3 && list !== 4) {
        list = Number(PROMPT.question(
            `\tSelect a movie to review:
            \t\t1) Maze Runner
            \t\t2) Star Wars
            \t\t3) 
            \t\t4) 
            \t\tCHOOSE: `
        ));
    }
}

function setNewMovie() {
    for (let i = 0; i < 1; i++) {
        newMovie[i] = [];
        console.log(`\n ... :`);
        while (! newMovie[i][0] || !/[a-zA-Z -]{1,30}$/.test(newMovie[i][0])) {
            newMovie[i][0] = PROMPT.question(`Please enter the name of yout movie. :`);
            if (! /^[a-zA-Z -]{1,30}$/.test(newMovie[i][0])) {
                console.log(`${newMovie[i][0]} is invalid. Please try again.`);
            }
        }
        while (! newMovie[i][1] || !/[a-zA-Z -]{1,30}$/.test(newMovie[i][1])) {
            newMovie[i][1] = PROMPT.question(`On a scale of 1-5 with 5 being the best, how would you rate this movie? :`);
            if (! /^[a-zA-Z -]{1,30}$/.test(newMovie[i][1])) {
                console.log(`${newMovie[i][1]} is invalid. Please try again.`);
            }
        }
        while (! newMovie[i][2] || !/[a-zA-Z -]{1,30}$/.test(newMovie[i][2])) {
            newMovie[i][2] = PROMPT.question(` ??? :`);
            if (! /^[a-zA-Z -]{1,30}$/.test(newMovie[i][2])) {
                console.log(`${newMovie[i][2]} is invalid. Please try again.`);
            }
        }
        while (! newMovie[i][3] || !/[a-zA-Z -]{1,30}$/.test(newMovie[i][3])) {
            newMovie[i][3] = PROMPT.question(` ??? :`);
            if (! /^[a-zA-Z -]{1,30}$/.test(newMovie[i][3])) {
                console.log(`${newMovie[i][3]} is invalid. Please try again.`);
            }
        }
        while (! newMovie[i][4] || !/[a-zA-Z -]{1,30}$/.test(newMovie[i][4])) {
            newMovie[i][4] = PROMPT.question(` ??? :`);
            if (! /^[a-zA-Z -]{1,30}$/.test(newMovie[i][4])) {
                console.log(`${newMovie[i][4]} is invalid. Please try again.`);
            }
        }



    }
}

function setRated() {

}