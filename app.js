
$(document).ready(function (){
    $(".elave").click(function (){
        $(".elavediv").toggle(1000)
    })
    $(".add").click(function (){
        let div = document.createElement("div")
        div.classList.add("div")
        let body = document.querySelector("body")
let input1 = document.querySelector("input")
let input2 = document.querySelector("#il")
let input3 = document.querySelector("#qiy")
let input4 = document.querySelector("#sekli")
        let p = document.createElement("p")
p.innerHTML = `masinin adi:${input1.value}`
        div.append(p)
        let p1 = document.createElement("p")
        p1.innerHTML = `masinin ili:${input2.value}`
        div.append(p1)
        let p2 = document.createElement("p")
        p2.innerHTML = `masinin qiymeti:${input3.value}`
        div.append(p2)
        let img = document.createElement("img")
        img.src = input4.value
        div.append(img)
        let button = document.createElement("button")
        button.classList.add("sil")
        button.innerText = "sil"
        div.append(button)

body.append(div)
let arr = []
let objekt = {
    adi:input1.value,
    ili:input2.value,
    qiymeti:input3.value,
    img:input4.value
}
arr.push(objekt)
arr.forEach(element => {
   localStorage.setItem("cars",JSON.stringify(element)) 
});

    })
    $(".sil").click(function (){
        localStorage.removeItem("cars")
        let div = document.querySelector(".div")
        div.classList.remove("div")
    })
})