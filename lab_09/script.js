function toggleFolder(element) {
    element.classList.toggle('open');
    event.stopPropagation(); 
}

function openFile(event, fileName) {
    alert(fileName);
    event.stopPropagation(); 
}