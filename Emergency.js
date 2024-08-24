const helplineNumbers = [
    { name: "Police ", number: "112" },
    { name: "Youth Worker ", number: "1098" },
    { name: "Psychologist ", number: "1800-599-0019" },
    { name: "Psychiatrist ", number: "1800-599-0019" },
    { name: "Nearby Hospital ", number: "104" },
    { name: "Government Helpline ", number: "14416" },
    { name: "Government Helpline ", number: "1-800 891 4416" }
];

const helplineList = document.getElementById("helpline-list");

helplineNumbers.forEach((helpline) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${helpline.name}: <a href="tel:${helpline.number}">${helpline.number}</a>`;
    helplineList.appendChild(listItem);
});
