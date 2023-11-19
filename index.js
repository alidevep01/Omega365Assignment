const listContainer = document.getElementById("list-container");
const inputName = document.getElementById("input-name");
const inputCharacter = document.getElementById("input-character");
const addItemBtn = document.getElementById("add-Item");
const inputBox = document.querySelectorAll("input");

function addItems() {
  if (inputName.value === "" || inputCharacter.value === "") {
    alert("Enter Both Name and Character");
  } else {
    //create an li wrapper to wrap the 'div-container'
    const liWrapper = document.createElement("li");
    liWrapper.setAttribute("class", "row");

    //create div container for Name-Character-ActionButtons
    const divContainer = document.createElement("div");
    divContainer.setAttribute("class", "row div-container");

    //  Add Name
    const liName = document.createElement("li");
    liName.setAttribute("class", "list-group-item col-4");
    liName.setAttribute("id", "name");
    liName.innerHTML = inputName.value;
    divContainer.appendChild(liName);

    // Add Character
    const liCharacter = document.createElement("li");
    liCharacter.setAttribute("class", "list-group-item col-4");
    liCharacter.setAttribute("id", "character");
    liCharacter.innerHTML = inputCharacter.value;
    divContainer.appendChild(liCharacter);

    //Create Count span
    const countSpan = document.createElement("span");
    countSpan.textContent = 0;

    //Add Like button
    const liActionButtons = document.createElement("li");
    liActionButtons.setAttribute("class", "list-group-item col-4 action-btn");
    liCharacter.setAttribute("id", "action-items");

    const likeButtonInLi = document.createElement("button");
    likeButtonInLi.setAttribute("type", "button");
    likeButtonInLi.setAttribute("class", "likeBtn");

    // Create a text node for the thumbs-up emoji
    const thumbsUpTextNode = document.createTextNode(" 👍");

    likeButtonInLi.appendChild(thumbsUpTextNode); // Append the text node separately

    //Add dislike button

    const disLikeButtonInLi = document.createElement("button");
    disLikeButtonInLi.setAttribute("type", "button");
    disLikeButtonInLi.setAttribute("class", "disLikeBtn list-group-item");

    // Create a text node for the thumbs-down emoji
    const thumbsDownTextNode = document.createTextNode("👎");

    disLikeButtonInLi.appendChild(thumbsDownTextNode); // Append the text node separately

    //Count++ eventListener
    likeButtonInLi.addEventListener("click", function () {
      let count = parseInt(countSpan.textContent);
      count++;
      countSpan.textContent = count + " ";
    });

    //Count-- eventListener
    disLikeButtonInLi.addEventListener("click", function () {
      let count = parseInt(countSpan.textContent);
      if (count > 0) {
        count--;
      }

      countSpan.textContent = count + " ";
    });

    //closeBtn
    const closeBtn = document.createElement("button");
    closeBtn.setAttribute("class", "close-btn button list-group-item");
    closeBtn.setAttribute("type", "button");

    const closeTextNode = document.createTextNode("❌");
    closeBtn.appendChild(closeTextNode);

    closeBtn.addEventListener("click", function () {
      listContainer.removeChild(liWrapper);
    });

    liActionButtons.appendChild(countSpan);
    liActionButtons.appendChild(likeButtonInLi);
    liActionButtons.appendChild(disLikeButtonInLi);
    liActionButtons.appendChild(closeBtn);
    divContainer.appendChild(liActionButtons);

    //Append the div container to the li Wrapper
    liWrapper.appendChild(divContainer);
    // Add this class to your row
    liWrapper.classList.add("no-gutters-on-list");

    listContainer.appendChild(liWrapper);

    inputName.value = "";
    inputCharacter.value = "";
  }
}

addItemBtn.addEventListener("click", function (e) {
  addItems();
});

inputBox.forEach(function (input) {
  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      addItems();
    }
  });
});
