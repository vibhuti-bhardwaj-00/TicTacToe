let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newbtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO= true; //playerx,playerX

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach( (box)=>{
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if(turnO===true) //playerO turn
        {
            box.innerText="O";
            turnO=false;
        }
        else{       //playerX turn
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    })
}

)

const checkWinner = ()=>{
    for(let pattern of winPatterns)
    {

       let pos1Val= boxes[pattern[0]].innerText;
       let pos2Val=boxes[pattern[1]].innerText;
       let pos3Val= boxes[pattern[2]].innerText;
        
       if(pos1Val!="" && pos2Val!="" && pos3Val!="")
       {
        if(pos1Val===pos2Val && pos1Val===pos3Val)
        {
            console.log("we have a winner",pos1Val);
            showWinner(pos1Val);
        }
       }
    }
}

showWinner=  (winner)=>{
    msg.innerText=`Congratulations! Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();

}


const disableboxes = ()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}

const enableboxes = ()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
        msgcontainer.classList.add("hide");
    }
}
const resetgame = ()=>{
       turnO=true;
       enableboxes();
}

newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);