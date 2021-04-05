var reasons = [
    "me",
    "my mother",
    "my father",
    "trees are natural medicines"

];

var images = [
    "https://i.postimg.cc/5ymDKL83/bro.jpg",
    "https://i.postimg.cc/bw5W5zSK/mother.jpg",
    "https://i.postimg.cc/wjMnFtMX/father.jpg",
    "https://images.unsplash.com/photo-1473277319276-325d492fca49?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
];






var i = 0;

function nextslide() {
    if (i == 3) { i = 0; }
    document.getElementById("image2").src = images[i];
    document.getElementById("reason").innerHTML = reasons[i];

    i++;
}