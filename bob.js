console.clear();

function typingEffect(element, speed) {
    let text = element.innerHTML;
    element.innerHTML = "";
    var i = 0;
    var timer = setInterval(function () {
        if (i < text.length) {
            element.append(text.charAt(i))
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed)

}


const h1 = document.querySelector('.content1');
typingEffect(h1, 150);
const h2 = document.querySelector('.content2');
typingEffect(h2, 150);
const h3 = document.querySelector('.content3');
typingEffect(h3, 150);
const h4 = document.querySelector('.content4');
typingEffect(h4, 150);
const h5 = document.querySelector('.content5');
typingEffect(h5, 150);
const h6 = document.querySelector('.content6');
typingEffect(h6, 150);
