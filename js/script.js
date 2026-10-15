const TOGGLE_BUTTON = document.getElementById("toggleButton");
   // alert("click");
TOGGLE_BUTTON.addEventListener("click", function() {
    if (document.body.classList.contains("dark")) {
        document.body.classList.remove("dark");
    } else {
        document.body.classList.add("dark");
    }
});
console.log("Hello, World!");
//alert("This is a simple JavaScript alert!");//
