function writeBubbles(kiekis, dalykas) {
    document.write('<div class="bubble-text">' + dalykas + '</div>');
    for (var i = 10; i > 0; i--) {
        if (i > kiekis)
            document.write('<div class="bubble-empty"></div>');
        else
            document.write('<div class="bubble-full"></div>');
    }
    document.write('<br>');
}