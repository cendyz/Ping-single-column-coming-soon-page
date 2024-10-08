const form = document.querySelector(".main__input-box");
const input = document.querySelector("#input");
const errorText = document.querySelector(".main__input-box-error");
const inputBtn = document.querySelector(".main__input-box-btn");
const copyrightYear = document.querySelector(".footer__copyright span");
const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;

const checkInput = () => {
	event.preventDefault();
	if (input.value === "" || !emailRegex.test(input.value)) {
		input.style.border = "1px solid hsl(354, 100%, 66%)";
		errorText.style.display = "block";
		errorText.style.visibility = "visible";
	} else {
		if (window.innerWidth < 992) {
			errorText.style.display = "none";
		}
		input.style.border = "1px solid hsl(223, 100%, 88%)";

		errorText.style.visibility = "hidden";
		form.submit();
	}
};

const checkDate = () => {
	const date = new Date().getFullYear();
	copyrightYear.textContent = date;
};

checkDate();

inputBtn.addEventListener("click", checkInput);
