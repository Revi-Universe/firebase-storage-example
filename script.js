const dropHere = document.getElementById('dropHere');
const dropFile = document.getElementById('dropFile');

function preventDefaults(event) {
    event.preventDefault();
    event.stopPropagation();
}

function dragOn(event) {
    preventDefaults(event);
    dropHere.classList.add('on');
}

function dragOff(event) {
    preventDefaults(event);
    dropHere.classList.remove('on');
}

function dragFile(event) {
    dragOff(event);
    var file = event.dataTransfer.files;
}

dropHere.addEventListener('dragenter', dragOn);

dropHere.addEventListener('drop', dragFile)

dropHere.addEventListener('dragleave', dragOff)

document.body.addEventListener('dragover', preventDefaults);
