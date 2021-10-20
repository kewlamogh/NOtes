let lsData = load();
let notes = lsData.notes;
let opennote = "";
let deleted = lsData.deleted;

function deleteNote(name) {
    if (!confirm(`Are you sure you want to delete \"${name}\"?`)) {

    }

    delete notes[name];
    deleted.push(name);
    document.getElementById("notes").innerHTML = "";
    populate();
}

function addNote(text) {
    let lns = text.split("\n");
    let firstLine = lns[0].replace("# ", "");
    notes[firstLine] = text;
    document.getElementById("notes").innerHTML += "<br><div class = 'note' onclick = 'openNote(\""+firstLine+"\")'><span onclick = 'deleteNote(\""+firstLine+"\")'>🚮</span>"+firstLine+"</div>";
    openNote(firstLine);
}

function populate() {
    let items = [];
    for (let i in notes) {
        if (deleted.includes(i)) {
            continue;
        }
        items.push(i);
        addNote(notes[i]);
    }
}

function openNote(title) {
    notes[opennote] = document.getElementById("editor").value; // hmm
    opennote = title;
    document.getElementById("editor").value = notes[opennote];
}

document.getElementById("editor").onkeydown = (e) => {
    notes[opennote] = document.getElementById("editor").value;
}

window.addEventListener("unload", () => {
    save(notes, deleted);
});

populate();