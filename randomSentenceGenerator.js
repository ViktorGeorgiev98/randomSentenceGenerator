function randomSentenceGenerator() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    // create names, places, verbs, nouns, adverbs, details
    let names = ['Peter', 'Michael', 'Ivan', 'George'];
    let places = ['Sofia', 'Burgas', 'Plovdiv', 'Varna'];
    let verbs = ['eats', 'sees', 'plays', 'brings'];
    let nouns = ['sones', 'cake', 'apple', 'laptop', 'bike'];
    let adverbs = ['slowly', 'sadly', 'happily', 'fast', 'warmly'];
    let details = ['near the river', 'at home', 'in the park', 'at school'];
    
    // create a method for getting a random word
    
    function getRandomWord(arr) {
        let word = arr[Math.floor(Math.random() * arr.length)];
        return word;
    }
    
    // implement generator login - create the actual generator
    
    let randomName = getRandomWord(names);
    let randomPlace = getRandomWord(places);
    let randomVerb = getRandomWord(verbs);
    let randomNouns = getRandomWord(nouns);
    let randomAdverbs = getRandomWord(adverbs);
    let randomDetails = getRandomWord(details);
    
    let who = `${randomName} from ${randomPlace}`;
    let action = `${randomAdverbs} ${randomVerb} ${randomNouns}`;
    let sentence = `${who} ${action} ${randomDetails}`;
    
    
    console.log('Hello, this is your random generated sentence');
    console.log(sentence);
    
    let recursiveAsyncReadLine = function() {
        readline.question('Click [Enter] to generate a new one.', string => {
            string = string;
            recursiveAsyncReadLine();
        })
    }
    // recursiveAsyncReadLine();
}
randomSentenceGenerator();
