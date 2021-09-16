function changeBG(){
    let arr = [
        'images/title-bg1.jpg',
        'images/title-bg2.jpg',
        'images/title-bg3.jpg',
    ]

    let r = Math.floor(Math.random() * 3);

    document.body.style.backgroundImage = "url(" + arr[r] +")";

}
setInterval(changeBG, 4000);