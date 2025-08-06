var Mycards = [
    {
        "Image" : "./Bird.png",
        "Price" : 300,
        "Brand" : "Labubu"
    },
    {
        "Image" : "https://tse3.mm.bing.net/th/id/OIP.4c81ksUoq1gIMNy-0UdsygHaEo?pid=Api&P=0&h=220",
        "Price" : 499,
        "Brand" : "Ocean"
    },
    {
        "Image" : "https://tse2.mm.bing.net/th/id/OIP.hEQYO5Dd4w-5XCggeI2-EAHaEQ?pid=Api&P=0&h=220",
        "Price" : 699,
        "Brand" : "Livon"
    },
    {
        "Image" : "https://tse3.mm.bing.net/th/id/OIP.yA7QHtMooG9_ty_WekA64AHaFj?pid=Api&P=0&h=220",
        "Price" : 1000,
        "Brand" : "Yk"
    },
    {
        "Image" : "https://tse3.mm.bing.net/th/id/OIP.2TBlFmTmCrCphzvo4qo-gQHaHa?pid=Api&P=0&h=220",
        "Price" : 1299,
        "Brand" : "Everyuth"
    },
    {
        "Image" : "http://127.0.0.1:5500/images/Slippers.png",
        "Price" : 6299,
        "Brand" : "Puma"
    },
    {
        "Image" : "http://127.0.0.1:5500/images/Shirt.png",
        "Price" : 400,
        "Brand" : "Philipines"
    },
    {
        "Image" : "http://127.0.0.1:5500/images/Saree.png",
        "Price" : 399,
        "Brand" : "Vishal"
    },
];

var card=Mycards.map((ele)=>{
return (`<div class="card">
    <div class="image-section">
        <img src="${ele.Image}" alt="">
    </div>
    <div class="content">
        <div class="price">Price:${ele.Price}</div>
        <div class="brand">Brand:${ele.Brand}</div>
    </div>
</div>`)
});
card=card.join(" ");
var parent=document.getElementsByClassName("cards-parent")[0];
parent.innerHTML=card;
