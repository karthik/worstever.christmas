;(function() {
    'use strict';

    var urls = [
        'beard-hair-redistribution.png',
        'millerdl_bday.jpg',
        'millerdl_birb_beard_grin.jpg',
        'millerdl_birb_beard.jpg',
        'millerdl_birb.png',
        'millerdl_chewbacca.png',
        'millerdl_kwoo.png',
        'millerdl.png',
        'millerdl_question.png',
        'millerdl_suit.png',
        'millerdl_trotsky.png',
        'millerdl_viking.jpg',
        'president-millerdl.png',
        'santa.png'
    ];

    var link = document.querySelector('.somewhat-unfortunate');
    link.addEventListener('click', function(event) {
        event.preventDefault();
        update();
    });
    update();

    function update() {
        var n = urls.length;
        var i = Math.floor(Math.random() * n);
        var url = 'img/' + urls[i];

        var img = document.createElement('img');
        img.classList.add('really-awful');
        img.onload = function() {
            // Match the top-left pixel's background colour
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            var data = ctx.getImageData(0, 0, 1, 1);
            var r = data.data[0];
            var g = data.data[1];
            var b = data.data[2];
            var a = data.data[3];  // though alpha is really over-egging the pudding
            var rgba = 'rgba(' + [r, g, b, (a / 255).toFixed(3)].join(',') + ')';
            document.body.style.backgroundColor = rgba;

            link.replaceChild(img, link.firstElementChild);
        };
        img.onerror = function(e) {
            console.error("extremely unfortunate", i, url, e);
        };
        img.src = url;
    }
}());
