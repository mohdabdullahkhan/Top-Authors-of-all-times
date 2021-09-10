window.addEventListener('DOMContentLoaded', (event) => alert("Welcome to the webpage, thanks for the visit."));
window.addEventListener('wheel', function (e) {
    if (e.deltaY < 0) {
        console.log("scrolling up");
    } else if (e.deltaY > 0) {
        console.log("scrolling down");
    }
});

let btn = document.getElementById("btn1");
btn.addEventListener('click', function () {
    var img = document.createElement('img');
    img.src = 'http://beckybeach.net/wp-content/uploads/2014/04/crime-and-punishment.jpg';
    document.getElementById('box1').appendChild(img);

});

let btn5 = document.getElementById("btn2");
btn5.addEventListener('click', function () {
    var img = document.createElement('img');
    img.src = 'https://i.pinimg.com/originals/c5/5e/06/c55e065779131353b71291b92ba63ba4.jpg';
    document.getElementById('box2').appendChild(img);

});

let btn6 = document.getElementById("btn3");
btn6.addEventListener('click', function () {
    var img = document.createElement('img');
    img.src = 'https://walrus-assets.s3.amazonaws.com/img/mylifewithtolstoy-700x490.jpg';
    document.getElementById('box3').appendChild(img);

});

let btn7 = document.getElementById("btn4");
btn7.addEventListener('click', function () {
    var img = document.createElement('img');
    img.src = 'https://tse2.mm.bing.net/th?id=OIP.az0Iu3b_T8-s3-WcyCXkjgHaLM&pid=Api&P=0&w=300&h=300';
    document.getElementById('box4').appendChild(img);

});