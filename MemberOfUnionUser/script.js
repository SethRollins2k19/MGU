function validateNumber(e) {
    let current = e.target.value;
    current = current.replace(/\s/g, "").split("").map((item, index) => {
        if (index === 0) {
            if (item === "+") {
                return item
            } else {
                if (Number(item)) {
                    return "+" + item;
                } else {
                    return ""
                }
            }
        } else {
            if (Number(item)) {
                if (index > 11) {
                    return ""
                } else {
                    if (index === 2 || index === 5 || index === 8 || index === 10) {
                        return " " + item;
                    } else {
                        return item
                    }
                }
            } else {
                return ""
            }
        }
    }).join("");
    e.target.value = current;
}

function generateToggleInput(insertBlock, name, firstVal, secondVal) {
    let container = document.createElement("div");
    container.classList.add("form__label-container");
    container.classList.add("form__label-container--toggle");
    let firstBlock = document.createElement("label");
    firstBlock.textContent = firstVal;
    firstBlock.classList.add("form__label--toggle");
    let secondBlock = document.createElement("label");
    secondBlock.classList.add("form__label--toggle");
    secondBlock.textContent = secondVal;
    let firstInput = document.createElement("input");
    firstInput.classList.add("form__input--toggle");
    firstInput.name = name;
    firstInput.type = "radio";
    firstInput.value = 1;
    let secondInput = document.createElement("input");
    secondInput.classList.add("form__input--toggle");
    secondInput.name = name;
    secondInput.type = "radio";
    secondInput.value = 0;

    let active = 0;

    firstBlock.addEventListener("click", () => {
        if (active === 0) {
            return;
        } else {
            active = 0;
            container.classList.remove("form__label-container--toggle-active")
        }
    });

    secondBlock.addEventListener("click", () => {
        if (active === 1) {
            return;
        } else {
            active = 1;
            container.classList.add("form__label-container--toggle-active")
        }
    });

    firstBlock.appendChild(firstInput);
    secondBlock.appendChild(secondInput);
    container.appendChild(firstBlock);
    container.appendChild(secondBlock);
    if (insertBlock.split("")[0] === "#") {
        document.getElementById(insertBlock.replace(/\#/g, "")).appendChild(container);
    } else {
        document.querySelector(`.${insertBlock.replace(/\.| /g, "")}`).appendChild(container);
    }
}

const templateArrayValue = ["TEXT LOL", "VERY VERY VERY VERY VERY VERY VERY VERY VERY VERY VERY VERY " +
+"VERY VERY VERY VERY VERY VERY VERY VERY big string", "texxxxxxssetasavakifjawl; wmfjpiosjf alkfkjaspofjmsal fka;smgomalms mfa "];

let scrollId = 0;
function generateDropDownInput(insertBlock,inputName = "birth",arrayOfValues = templateArrayValue) {
    const container = document.createElement("label");
    container.classList.add("form__label-container");
    container.classList.add("form__label-container--list");
    container.tabIndex = 1;

    const valueHolder = document.createElement("input");
    valueHolder.classList.add("form__input--value-holder")
    valueHolder.type = "text";
    valueHolder.value = arrayOfValues[0];
    valueHolder.name = inputName;

    const currentValue = document.createElement("div");
    currentValue.classList.add("form__input--list");
    currentValue.textContent = arrayOfValues[0];

    const icon = document.createElement("svg");
    icon.innerHTML = `
    <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.54" fill-rule="evenodd" clip-rule="evenodd" d="M0 0L5 5L10 0H0Z" fill="#2C2C59"/>
                </svg>
    `;


    const dropDown = document.createElement("div");
    dropDown.classList.add("dropdown");
    dropDown.classList.add("dropdown--list-dropdown");
    // const dropDownId = `scroll-${scrollId}`;
    // dropDown.id = dropDownId;

    let isOpen = false;
    // scrollController.initScroll(dropDownId);

    container.addEventListener("click", e => {
        e.preventDefault();
        console.log("click event");
        console.log(isOpen);
        if(!isOpen){
            isOpen = true;
            container.classList.add("form__label-container--list--active")
            // scrollController.showCurrentScroll(dropDownId);
        } else {
            isOpen = false;
            // scrollController.hideCurrentScroll(dropDownId);
            container.classList.remove("form__label-container--list--active")
        }
    })
    arrayOfValues.forEach((item,index) => {
        const block = document.createElement("div");
        block.classList.add("dropdown__item");
        block.textContent = item;
        dropDown.appendChild(block);
        block.addEventListener("click", e => {
            valueHolder.value = String(item);
            currentValue.textContent = item;
            // scrollController.hideCurrentScroll(dropDownId);
            container.classList.toggle("form__label-container--list--active");
        })
    })

    container.appendChild(valueHolder);

    container.appendChild(currentValue);

    container.appendChild(icon);

    container.appendChild(dropDown);
    container.addEventListener("blur", e => {
        e.preventDefault();
        isOpen = false;
        container.classList.remove("form__label-container--list--active");
    });
    if (insertBlock.split("")[0] === "#") {
        document.getElementById(insertBlock.replace(/\#/g, "")).appendChild(container);
    } else {
        document.querySelector(`.${insertBlock.replace(/\.| /g, "")}`).appendChild(container);
    }
    scrollId++;
}



document.getElementById("phoneNumber").addEventListener('input', e => {
    validateNumber(e);
})

generateToggleInput("#sex", "sex", "Мужчина", "Женщина");
generateDropDownInput("#birth", "birth", ["10,20,2020","10,20,2020","10,20,2020","10,20,2020"]);
generateDropDownInput("#faculty", "faculty", ["10,20,2020","10,20,2020","10,20,2020","10,20,2020"]);
generateDropDownInput("#facultyLVL", "facultyLVL", ["10,20,2020","10,20,2020","10,20,2020","10,20,2020","10,20,2020","10,20,2020","10,20,2020","10,20,2020","10,20,2020","10,20,2020"]);
generateDropDownInput("#OfferType", "OfferType", ["10,20,2020","10,20,2020","10,20,2020","10,20,2020"]);
generateDropDownInput("#studCurrentCourse", "studCurrentCourse", ["10,20,2020","10,20,2020","10,20,2020","10,20,2020"]);
generateDropDownInput("#studStart", "studStart", ["10,20,2020","10,20,2020","10,20,2020","10,20,2020"]);
generateDropDownInput("#studEnd", "studEnd", ["10,20,2020","10,20,2020","10,20,2020","10,20,2020"]);
