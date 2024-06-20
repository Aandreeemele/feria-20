function showContent(option) {
    // Oculta todos los contenidos
    var contents = document.querySelectorAll('.content');
    contents.forEach(function(content) {
        content.style.display = 'none';
    });

    // Muestra el contenido correspondiente a la opción seleccionada
    var contentId = 'content' + option;
    var contentToShow = document.getElementById(contentId);
    contentToShow.style.display = 'block';
}