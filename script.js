const operand1Con = document.querySelector("#op1");
const operand2Con = document.querySelector("#op2");
const operatorCon = document.querySelector("#ope");
const resultBoxes = Array.from(document.querySelectorAll(".box"));
const addBtn = document.querySelectorAll("li")[0];
const subBtn = document.querySelectorAll("li")[1];
const mulBtn = document.querySelectorAll("li")[2];
const divBtn = document.querySelectorAll("li")[3];
let results = [];
let scoreCon = document.getElementById("score").firstElementChild;
let score = 0;

let num1,  num2, operator="+";

const loadData =()=>{
    resultBoxes.forEach((resBox)=>{
        resBox.classList.remove("correct");
        resBox.classList.remove("wrong");
    })
    num1 = Math.floor(Math.random()*10)+1;
    num2 = Math.floor(Math.random()*10)+1;
    operatorCon.innerText = operator;
   
    if (operator==="+")
    {
        results = [
            [num1+num2, num1+num2+Math.floor(Math.random()*10), num1+num2-Math.floor(Math.random()*10),],
            [num1+num2+Math.floor(Math.random()*10), num1+num2, num1+num2-Math.floor(Math.random()*10),],
            [num1+num2+Math.floor(Math.random()*10), num1+num2-Math.floor(Math.random()*10), num1+num2,]
        ]
    }
    else if (operator==="-")
    {
        results = [
            [num1-num2, num1-num2+Math.floor(Math.random()*10), num1-num2-Math.floor(Math.random()*10),],
            [num1-num2+Math.floor(Math.random()*10), num1-num2, num1-num2-Math.floor(Math.random()*10),],
            [num1-num2+Math.floor(Math.random()*10), num1-num2-Math.floor(Math.random()*10), num1-num2,]
        ]
    }
    else if (operator==="*")
    {
        results = [
            [num1*num2, num1*num2+Math.floor(Math.random()*10), num1*num2-Math.floor(Math.random()*10),],
            [num1*num2+Math.floor(Math.random()*10), num1*num2, num1*num2-Math.floor(Math.random()*10),],
            [num1*num2+Math.floor(Math.random()*10), num1*num2-Math.floor(Math.random()*10), num1*num2,]
        ]
    }
    else if (operator==="/")
    {
        results = [
            [(num1/num2).toFixed(2), (num1/num2+Math.floor(Math.random()*10)).toFixed(2), (num1/num2-Math.floor(Math.random()*10)).toFixed(2),],
            [(num1/num2+Math.floor(Math.random()*10)).toFixed(2), (num1/num2).toFixed(2), (num1/num2-Math.floor(Math.random()*10)).toFixed(2),],
            [(num1/num2+Math.floor(Math.random()*10)).toFixed(2), (num1/num2-Math.floor(Math.random()*10)).toFixed(2), (num1/num2).toFixed(2),]
        ]
    }
    
    operand1Con.innerText = num1
    operand2Con.innerText = num2
    let index=Math.floor(Math.random()*3)
    resultBoxes[0].innerText=results[index][0];
    resultBoxes[1].innerText=results[index][1];
    resultBoxes[2].innerText=results[index][2];
}

addBtn.addEventListener("click", ()=>{
    let song = new Audio("/assest/click.mp3");
    song.play();
    operator = "+"
    loadData()
})

subBtn.addEventListener("click", ()=>{
    let song = new Audio("/assest/click.mp3");
    song.play();
    operator = "-";
    loadData();
})
mulBtn.addEventListener("click", ()=>{
    let song = new Audio("/assest/click.mp3");
    song.play();
    operator = "*";
    loadData();
})
divBtn.addEventListener("click", ()=>{
    let song = new Audio("/assest/click.mp3");
    song.play();
    operator = "/";
    loadData();
})


resultBoxes.forEach((resBox)=>{
    resBox.addEventListener("click", ()=>{
        let ans = eval(`${operand1Con.innerText}${operator}${operand2Con.innerText}`);
       
        if (resBox.innerText==ans.toFixed(2)||resBox.innerText==ans)
        {   
            resBox.classList.add("correct");
            let song = new Audio("/assest/correct.mp3");
            song.play();
            scoreCon.innerText = ++score;
            setTimeout(()=>{
                loadData();
            },300)
        }
        else
        {
            let song = new Audio("/assest/wrong.mp3");
            song.play();
            scoreCon.innerText = --score;
            resBox.classList.add("wrong");
        }
    })
})

