let title = document.querySelector('h1')

title.innerHTML = 'Challenge time'

function consoleButton() { 
    console.log('The button has been activated')
};

function alertButton() {
    alert('I love JS!');
}

function promptButton() {
    let brazilCity = prompt('Choose a city from Brazil that you like!')
    alert(`I've been in Brazil at ${brazilCity} and i had you in my mind!`)
}

function sumButton() {
    let sum = 0
    let number
    let count = 1

    while (count < 3) {
        number = parseInt(prompt('Pick a number'));
        sum += number;
        count++;
    }
    alert(`The sum is equal to ${sum}`)
}