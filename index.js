var button=document.querySelectorAll(".drum");
for (var i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {
        alert('hello');
    }, false);
}

