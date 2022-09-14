var submitButtonEl = document.getElementById("submitBtn");

submitButtonEl.addEventListener("click", placeHolderFunction);

// add "Enter" key as possible input
var input = document.getElementById("search");
input.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		placeHolderFunction();
	}
});
