import { getStorage, ref, uploadBytes } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-storage.js';

const storage = getStorage();

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
    fileUpload(file[0]);
}

async function fileUpload(file) {
    return await uploadBytes(ref(storage, '/waangImages/' + file.name), file)
}

dropHere.addEventListener('dragenter', dragOn);

dropHere.addEventListener('drop', dragFile)

dropHere.addEventListener('dragleave', dragOff)

document.body.addEventListener('dragover', preventDefaults);

dropFile.addEventListener('change', e => {
    fileUpload(dropFile.files[0]);
});
