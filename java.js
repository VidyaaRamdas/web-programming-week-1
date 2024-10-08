if(document.readyState !== "loading") {
    console.log("Document is ready!");
    initializeCode();
} else {
    document.addEventListener("DOMContentLoaded", function() {
        console.log("Document is currently loading!");
        initializeCode();
    });
}

function initializeCode() {
    const printButton = document.getElementById("my-button");
    const helloWorld = "Hello world";
    const moiMaailma = "Moi maailma";

    printButton.addEventListener("click", function() {
        document.getElementById("Title").innerHTML = helloWorld;
        console.log(helloWorld)

        const textChange = document.getElementsByTagName("h1")[0];
        textChange.textContent = moiMaailma
    })

    const list = document.getElementById("my list");
    const addItem = document.getElementById("add-data");
    const inputItem = document.getElementById("enter note");

    addItem.addEventListener("click", function() {
        const addedItem = document.createElement("li");
        addedItem.textContent = inputItem.value;
        list.appendChild(addedItem);
        inputItem.value = "";
    })
}
