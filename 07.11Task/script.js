import { fakeTranslate } from './fakeTranslate.js';

let favorites = [];

// Функция для перевода слова с использованием fakeTranslate
async function translateWord() {
    const word = document.getElementById("wordInput").value.trim();
    if (!word) {
        alert("Введите слово для перевода.");
        return;
    }
    try {
        const translation = await fakeTranslate(word);
        document.getElementById("translationResult").innerText = translation;

        // Разблокировать кнопку сохранения
        document.getElementById("saveButton").disabled = false;
    } catch (error) {
        document.getElementById("translationResult").innerText = "";
        alert(error);
    }
}