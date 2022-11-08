function main() {
    const inputForm = document.querySelector("#form-input")
    document.querySelectorAll(".input-words").forEach((elem,index) => {
        elem.setAttribute("id", `input-${index}`)
        elem.textContent = "__________"
        const dataType = elem.getAttribute("data-type")
        inputForm.innerHTML += `
        <div class="form-group">
        <label for="field-${index}">${dataType}</label>
        <input type="text" class="input-fields" id="field-${index}">
        </div>
        `
    })
}

function submit() {
    document.querySelectorAll(".input-words").forEach((elem,index) => {
        const inp = document.querySelector('#field-' + index); 
        if (inp.value != "") {
            elem.textContent = inp.value;
        }
        else {
            alert(`Field ${index} needs input!`)
        }
    })
}

main();