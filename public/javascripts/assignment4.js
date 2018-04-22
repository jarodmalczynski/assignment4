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
let menu, list, maze, star;
let newMovie = [];

//totalStarRating, totalMazeRating, numberOfStarRatings, numberOfMazeRatings, StarAverage, MazeAverage;

function main() {
    setThings();
    setContinueResponse();
    while (continueResponse === 1) {
        setMenu();
        switch (menu) {
            case 1: seeList();
            switch (list) {
                case 1: rateMaze();
                    break;
                case 2: rateStar();
                    break;
                default: console.log(`! ERROR !`);
            }
                break;
            case 2: setNewMovie();
                break;
            case 3: setRated();
                break;
            default: console.log(`! ERROR !`);
        }
        setContinueResponse();
    }
}

main();

function setThings() {
    newRatings = 0;
    mazeRatings = 0;
    starRatings = 0;
    yourMovie = 0;
    mazeMovie = 0;
    starMovie = 0;
}

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
    while (list !== 1 && list !== 2) {
        list = Number(PROMPT.question(
            `\tSelect a movie to review:
            \t\t1) Maze Runner
            \t\t2) Star Wars 
            \t\tCHOOSE: `
        ));
    }
}

function rateMaze() {
    maze = Number(PROMPT.question(`\nHow would you rate the movie Maze Runner? [1-5]: `));
    while (maze !== 1 && maze !== 2 && maze !== 3 && maze !== 4 && maze !== 5) {
        console.log(`${maze} is an incorrect value. Please try again. `);
        maze = Number(PROMPT.question(`\nHow would you rate the movie Maze Runner? [1-5]: `));
    }
    mazeMovie = maze + mazeMovie;
    mazeRatings++
}

function rateStar() {
    star = Number(PROMPT.question(`\nHow would you rate the movie Star Wars? [1-5]: `));
    while (star !== 1 && star !== 2 && star !== 3 && star !== 4 && star !== 5) {
        console.log(`${star} is an incorrect value. Please try again. `);
        star = Number(PROMPT.question(`\nHow would you rate the movie Star Wars? [1-5]: `));
    }
    starMovie = star + starMovie;
    starRatings++
}

function setNewMovie() {
    for (let i = 0; i < 1; i++) {
        newMovie[i] = [];
        console.log(`\nnewMovie ${i + 1}:`);
        while (! newMovie[i][0] || !/[a-zA-Z -]{1,30}$/.test(newMovie[i][0])) {
            newMovie[i][0] = PROMPT.question(`Please enter the name of yout movie. :`);
            if (! /^[a-zA-Z -]{1,30}$/.test(newMovie[i][0])) {
                console.log(`${newMovie[i][0]} is invalid. Please try again.`);
            }
        }

        while (! newMovie[i][1] || !/[a-zA-Z -]{1,30}$/.test(newMovie[i][1])) {
            newMovie[i][1] = PROMPT.question(`On a scale of 1-5 with 5 being the best, how would you rate this movie? :`);
            if ((newMovie[i][1]) !== 1 && star !== 2 && star !== 3 && star !== 4 && star !== 5) {
                console.log(`${newMovie[i][1]} is invalid. Please try again.`);
                newMovie[i][1] = PROMPT.question(`On a scale of 1-5 with 5 being the best, how would you rate this movie? :`);
            }
            yourMovie = (newMovie[i][1]) + yourMovie;
            newRatings++
        }
    }

}


function setRated() {
    mazeAverage = mazeMovie / mazeRatings;
    starAverage = starMovie / starRatings;
    newAverage = yourMovie / newRating;

}