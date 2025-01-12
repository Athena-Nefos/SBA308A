import { fetchDogData, searchDogs } from './api.js'; 
import { displayDogs } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
    let page = 1;

    //Load initial dog Data
    loadDogs(page);

    //Search functionality
    document.getElementById('load-more').addEventListener('click', () => {
        page++;
        loadDogs(page);
    });

    async function loadDogs(page) {
        const data = await fetchDogData(page);
        displayDogs(data);
    }
});