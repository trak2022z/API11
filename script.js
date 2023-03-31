"use strict";
(function(){

  const newDogBtn = document.getElementById("new-dog-btn");
      const dogImg = document.getElementById("dog-img");
      
      // Function to fetch a random dog image
      function getDogImage() {
        fetch("https://dog.ceo/api/breeds/image/random")
          .then(response => response.json())
          .then(data => {
            // Update the dog image
            dogImg.src = data.message;
            dogImg.alt = "Dog Image";
          })
          .catch(error => console.error(error));
      }
      
      // Call the function to fetch a random dog image when the page loads
      getDogImage();
      
      // Add an event listener to the "Get New Dog" button to fetch a new image
      newDogBtn.addEventListener("click", getDogImage);

})();

