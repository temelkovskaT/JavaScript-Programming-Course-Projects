let myLeads = [];
const inputBtn = document.getElementById("input-btn");
const tabBtn = document.getElementById("tab-btn");
const deleteBtn = document.getElementById("delete-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

// localStorage.clear();

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `<li>
        <a href=${leads[i]} target='_blank'>${leads[i]}</a>
    </li>`;
  }
  ulEl.innerHTML = listItems;
}

// console.log(leadsFromLocalStorage);

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);

  inputEl.value = "";

  localStorage.setItem("myLeads", JSON.stringify(myLeads));

  render(myLeads);

  console.log(localStorage.getItem("myLeads"));
});

tabBtn.addEventListener("click", function () {
  /*save to local storage, to my leads and trigger render()*/

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});
