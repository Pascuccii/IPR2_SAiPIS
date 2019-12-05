paths = Array(
    "antique-theater-france.jpg",
    "big-theater.jpg",
    "cathedral-christ-moscow.jpg",
    "gov-museum-moscow.jpg",
    "st-marks-cathedral-italy.jpg",
    "sun-temple-india.jpg",
    "blue-mosque-istanbul.jpg"
);


var selectedImage = "antique-theater-france.jpg";

function printSelectedImageUnderList() {
    document.images[7].src = selectedImage;
}

function selectImage(path) {
    document.images[0].src = path;
    selectedImage = path;
}

function clearAll() {
    document.images[0].src = "";
    document.images[7].src = "";
}

function showAllImages() {

    if (paths[0] !== selectedImage)
        for (var p in paths)
            if (paths[p] === selectedImage) {
                paths[p] = paths[0];
                paths[0] = selectedImage;
            }

    var win = window.open("/allImages.html", "Картинки", "scrollbars=yes,width=1500px,height=150px");
    win.document.write("<!DOCTYPE html>\n" +
        "<html lang=\"ru\">\n" +
        "<head>\n" +
        "<meta charset=\"UTF-8\">\n" +
        "<link href=\"style.css\" type=\"text/css\" rel=\"stylesheet\" >\n" +
        "<script type=\"text/javascript\" src=\"script.js\"></script>\n" +
        "<title>Все памятники архитектуры</title>\n" +
        "</head>\n" +
        "<body>\n" +
        "\n" +
        "<img width=\"200px\" height=\"130px\" src=\"" + paths[0] + "\" >\n" +
        "<img width=\"200px\" height=\"130px\" src=\"" + paths[1] + "\" >\n" +
        "<img width=\"200px\" height=\"130px\" src=\"" + paths[2] + "\" >\n" +
        "<img width=\"200px\" height=\"130px\" src=\"" + paths[3] + "\" >\n" +
        "<img width=\"200px\" height=\"130px\" src=\"" + paths[4] + "\" >\n" +
        "<img width=\"200px\" height=\"130px\" src=\"" + paths[5] + "\" >\n" +
        "<img width=\"200px\" height=\"130px\" src=\"" + paths[6] + "\" >\n" +
        "\n" +
        "</body>\n" +
        "</html>");
}