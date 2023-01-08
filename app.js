const btn = document.querySelectorAll('.btn-quest')
const questText = document.querySelectorAll('.quest-text')
console.log(questText);
// <!-- TESTE COM FOREACH ---->
btn.forEach((elem,index) => {
    elem.addEventListener('click', function() {
        if (elem.className === "btn-quest") {
            elem.className = "btn-quest show"
            questText.item(index).style.display = "block"
        } else {
            elem.className = "btn-quest"
            questText.item(index).style.display = "none"
        }
        console.log(index);
    })
})