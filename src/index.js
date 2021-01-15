console.log("%c HI", "color: firebrick");
const dogImageContainer = document.querySelector("#dog-image-container");
const dogBreedUl = document.querySelector("#dog-breeds");

const renderImage = (photo) => {
  const imageTag = document.createElement("img");
  imageTag.src = photo;
  dogImageContainer.append(imageTag);
};

const renderBreed = (breed) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = breed;
  dogBreedUl.append(listItem);
  listItem.addEventListener("click", () => {
    listItem.style.color = "blue";
  });
};

fetch("https://dog.ceo/api/breeds/image/random/4")
  .then((response) => response.json())
  .then((photoData) =>
    photoData.message.forEach((photo) => renderImage(photo))
  );

fetch("https://dog.ceo/api/breeds/list/all")
  .then((response) => response.json())
  .then((breedData) =>
    Object.keys(breedData.message).forEach((breed) => renderBreed(breed))
  );
