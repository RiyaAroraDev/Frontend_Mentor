const jokeText = document.getElementById('jokeText');
const button = document.getElementById('btn');
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,explicit&type=single";

const getJoke = async () => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const item = await response.json();
        jokeText.textContent = item.joke || "No joke found!";
    } catch (error) {
        console.error('Error fetching joke:', error);
        jokeText.textContent = "Sorry, couldn't fetch a joke. Please try again.";
    }
};

button.addEventListener('click', getJoke);

