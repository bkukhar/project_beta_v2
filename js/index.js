$(document).ready(function() {
    $('.portfolio').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        arrows: true,
        dots: true,
        //   autoplay: true,
        //   autoplaySpeed: 3000,
        variableWidth: true,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});

document.querySelector('.load-family-price-ajax').addEventListener('click', loadHtmlFamilyPrice);

function loadHtmlFamilyPrice() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.querySelector('.family_placeholder').innerHTML = xhr.responseText;
        }
    }
    xhr.open('GET', 'family-price.html', true);
    xhr.send();
}

document.querySelector('.load-wedding-price-ajax').addEventListener('click', loadHtmlWeddingPrice);

function loadHtmlWeddingPrice() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.querySelector('.wedding_placeholder').innerHTML = xhr.responseText;
        }
    }
    xhr.open('GET', 'wedding-price.html', true);
    xhr.send();
}

document.querySelector('.load-individual-price-ajax').addEventListener('click', loadHtmlIndividualPrice);

function loadHtmlIndividualPrice() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.querySelector('.individual_placeholder').innerHTML = xhr.responseText;
        }
    }
    xhr.open('GET', 'individual-price.html', true);
    xhr.send();
}


// document.querySelector('.price_button').addEventListener('click', document.getElementById('buttonX').checked = true);

// document.querySelector('.load-html-ajax').addEventListener('click', loadHtmlAjax);
// document.querySelector('.price_button').addEventListener('click', check)
// function check(){
// document.querySelector('.family').checked = true;
// let .form_left.value = checked;
// }

// function check() {getElementsByClassName
//     document.getElementById("family").checked = true;
// }

// document.getElementById("price_button").addEventListener("click", function(){
//     document.getElementById("family").checked = true;
// });

function checkFamily() {
    document.getElementById("family").checked = true;
}

function checkWedding() {
    document.getElementById("wedding").checked = true;
}