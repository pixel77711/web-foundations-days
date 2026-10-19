

const noteText = document.getElementById("note-text");
const charCount = document.getElementById("char-count");
const wordCount = document.getElementById("word-count");
const clearBtn = document.getElementById("clear-btn");
const themeToggle = document.getElementById("theme-toggle");


const DRAFT_KEY = "day4-note-draft";
const THEME_KEY = "day4-theme";


function updateCounts() {
    const text = noteText.value;
    const characters = text.length;


    const words = text.trim() === ""
        ? 0
        : text.trim().split(/\s+/).length;


    charCount.textContent = `${characters} / 200 characters`;
    wordCount.textContent = `${words} words`;


    charCount.classList.toggle("warning", characters > 180);
    charCount.classList.toggle("over", characters > 200);
}

noteText.addEventListener("input", function () {
    updateCounts();
    localStorage.setItem(DRAFT_KEY, noteText.value);
});


function clearNote() {
    noteText.value = "";
    localStorage.removeItem(DRAFT_KEY);
    updateCounts();
}

clearBtn.addEventListener("click", clearNote);

// Pressing the Escape key will clear the note
noteText.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        clearNote();
    }
});


function updateThemeLabel() {
    const isDark = document.body.classList.contains("dark");

    themeToggle.textContent = isDark ? "Light mode" : "Dark mode";
}

// Toggle dark mode and save the user's choice
themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");

    updateThemeLabel();
});


const savedDraft = localStorage.getItem(DRAFT_KEY);
const savedTheme = localStorage.getItem(THEME_KEY);

if (savedDraft !== null) {
    noteText.value = savedDraft;
}

if (savedTheme === "dark") {
    document.body.classList.add("dark");
} else {
    document.body.classList.remove("dark");
}


updateThemeLabel();
updateCounts();
