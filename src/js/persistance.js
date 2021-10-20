function save(notes, deletedNotes) {
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("deletedNotes", JSON.stringify(deletedNotes));
}

function load() {
    let notes = localStorage.getItem("notes") || {};
    let deletedNotes = localStorage.getItem("deletedNotes") || [];
    if (typeof deletedNotes != typeof []) {
        deletedNotes = JSON.parse(deletedNotes);
    }
    if (typeof notes != typeof {}) {
        notes = JSON.parse(notes);
    }
    return {
        "notes": notes,
        "deleted": deletedNotes || []
    };
}