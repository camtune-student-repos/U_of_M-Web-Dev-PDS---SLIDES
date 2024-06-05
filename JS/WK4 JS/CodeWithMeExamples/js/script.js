function pickImage(){
    options = ["bacon_in_the_woods.png", "munising.jpg","hollow_tree.png", 
    "lake_view.JPG", "bend_in_the_road.png"]
    randomImg = "images/" + options[Math.floor(Math.random() * options.length)];
    img = document.querySelector("#header_img");
    img.setAttribute("src",randomImg);
    img.setAttribute("alt","");

    /* fucntion above"
    1. array called options"
       a. contains 5 strings of image src. 
    2. We want to grab one of thos images:
       a. Math.random() - returns a number between 0 & 1 (.25, .5 , .75)
       b. take that number & length of array (options.length)... * MAth.random()...(number between 0
        & 1)
       c. Math.floor...change it into the integer
       d. it will take one of those images in the options array
       e. Rememeber...in our HTML code..we need that folder name...images
       f. We take images and we concatenate the word images with one of those files names
       g. grab id #header_img in the DOM:
          ...Set its first attribute "src" to my randomImg
          ...for now setting Alt attribuite to blank.. saying its not IMP you can skip over
     
    */

}


function setImages(){
    options = ["bacon_in_the_woods.png", "bacon_near_the_fort.png", "hollow_tree.png", "lake_view.JPG", "bend_in_the_road.png","BaconGallupPark.jpg"]
    currentImages = document.querySelectorAll(".flex img")
    for (var i = 0; i < xs.length; i++) { 
        randomImg = "images/" + options[Math.floor(Math.random() * options.length)];
        i.setAttribute("src",randomImg);
        i.setAttribute("alt","");  
    }

}
