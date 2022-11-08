import { faker } from "@faker-js/faker";
import arrayShuffle from "array-shuffle";
export function generateEmojis(count) {
    //use a Set to avoid duplicates
    const emojiSet = new Set();
    while (emojiSet.size < count / 2)
        emojiSet.add(faker.internet.emoji())

    const randomEmojis = Array.from(emojiSet);
    //double and shuffle
    return arrayShuffle(randomEmojis.reduce((m, i) => m.concat([i, i]), []));
}
export function areArraysEqual(array1, array2) {
    return array1.length === array2.length && array1.every((v, i) => v === array2[i])
}
export function areSetsEqual(set1, set2) {
    return set1.size === set2.size && [...set1].every(value => set2.has(value))
};


export function randomNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
}