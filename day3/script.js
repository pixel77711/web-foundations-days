let notes = [
{ id: 1, text: "Buy milk and bread", category: "personal" },
{ id: 2, text: "Finish the Day 3 assignment", category: "study" },
{ id: 3, text: "Email the project report to Grace", category: "work" },
{ id: 4, text: "Revise JavaScript arrays", category: "study" },
{ id: 5, text: "Call mum", category: "personal" },
];
// 1. Search notes
function searchNotes(text) {
return notes.filter(note =>
note.text.toLowerCase().includes(text.toLowerCase())
);
}

// Tests for searchNotes
console.log(searchNotes("day"));
// Expected: [{ id: 2, text: "Finish the Day 3 assignment", category: "study" }]

console.log(searchNotes("holiday"));
// Expected: []

// 2. Find the longest note
function longestNote() {
if (notes.length === 0) {
return null;
}

return notes.reduce((longest, note) =>
note.text.length > longest.text.length ? note : longest
);
}

// Tests for longestNote
console.log(longestNote());
// Expected: { id: 3, text: "Email the project report to Grace", category: "work" }

// Edge case: temporarily test with an empty array
let savedNotes = notes;
notes = [];
console.log(longestNote());
// Expected: null
notes = savedNotes;

// 3. Count notes by category
function countByCategory() {
let counts = {
personal: 0,
work: 0,
study: 0
};

notes.forEach(note => {
counts[note.category]++;
});

return counts;
}

// Tests for countByCategory
console.log(countByCategory());
// Expected: { personal: 2, work: 1, study: 2 }

console.log(countByCategory().work);
// Expected: 1

// 4. Get summary
function getSummary() {
  let counts = countByCategory();

  let word = notes.length === 1 ? "note" : "notes";

return `${notes.length} ${word}: ${counts.personal} personal, ${counts.work} work, ${counts.study} study.`;
}

// Tests for getSummary
console.log(getSummary());
// Expected: "5 notes: 2 personal, 1 work, 2 study."

// Edge case: exactly one note
savedNotes = notes;
notes = [
{ id: 1, text: "Call mum", category: "personal" }
];

console.log(getSummary());


notes = savedNotes;

// 5. Check for duplicate
function isDuplicate(text) {
let cleanedText = text.trim().toLowerCase();

return notes.some(note =>
note.text.trim().toLowerCase() === cleanedText
);
}

// Tests for isDuplicate
console.log(isDuplicate("Call mum"));


console.log(isDuplicate(" CALL MUM "));
// Expected: true

console.log(isDuplicate("Go to the gym"));
// Expected: false

// 6. Add a new note
function addNote(text, category) {
let cleanedText = text.trim();

if (cleanedText.length < 1 || cleanedText.length > 200) {
console.log("Not added: text must be between 1 and 200 characters.");
return false;
}

if (isDuplicate(cleanedText)) {
console.log("Not added: duplicate note.");
return false;
}

let validCategories = ["personal", "work", "study"];

if (!validCategories.includes(category)) {
console.log("Not added: invalid category.");
return false;
}

let newNote = {
id: notes.length + 1,
text: cleanedText,
category: category
};

notes.push(newNote);

console.log("Note added:", newNote);
return true;
}

// Tests for addNote
console.log(addNote("Complete JavaScript homework", "study"));
// Expected: true

console.log(addNote("Call mum", "personal"));
// Expected: false

console.log(addNote("Go shopping", "random"));
// Expected: false

console.log(addNote("", "personal"));
// Expected: false