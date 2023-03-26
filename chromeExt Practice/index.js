let savedInputs = [];
const inputBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const inputList = document.querySelector("#input-list");
const clearBtn = document.querySelector("#clear-btn");
const saveTabBtn = document.querySelector("#saveTab-btn");

const listFromLocal = JSON.parse(localStorage.getItem("myList"));
if (listFromLocal) {
  savedInputs = listFromLocal;
  render(savedInputs);
}

inputBtn.addEventListener("click", function () {
  savedInputs.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myList", JSON.stringify(savedInputs));
  render(savedInputs);
});

saveTabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    let url = tabs[0].url;
    // use `url` here inside the callback because it's asynchronous!
    savedInputs.push(url);
    localStorage.setItem("myList", JSON.stringify(savedInputs));
    render(savedInputs);
  });
});

clearBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  savedInputs = [];
  render(savedInputs);
});

function render(inputs) {
  let listItems = "";
  for (let i = 0; i < inputs.length; i++) {
    listItems += `
    <li>
      <a target='_blank' href='${inputs[i]}'>${inputs[i]}</a>
    </li>
    `;
    console.log(listItems);
  }
  inputList.innerHTML = listItems;
}
