//1.1

const agify = async () => {
    const result = await fetch('https://api.agify.io?name=michael');
    const json = await result.json();
    console.log(json);
}

agify();

//2.1? --> 1.1
const baseUrl = 'https://api.nationalize.io';
const input = document.querySelector('input');
const button = document.querySelector('.button');

const nationalize = async () => {
    const result = await fetch(`${baseUrl}?name=${input.value}`);
    const json = await result.json();
    console.log(json);
}

button.addEventListener('click', nationalize);
