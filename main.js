const cards=document.querySelectorAll(".card");
const turn=document.querySelector(".turn");
const winner=document.querySelector(".winner");
const restart=document.querySelector(".restart");
const winning_party=document.querySelector(".win");
const draw_result=document.querySelector(".result");
let x_turn=true;
turn.innerHTML='X';

const patterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
cards.forEach((card)=>{
    card.addEventListener('click',()=>{
        if(x_turn){
            card_txt=document.querySelector('.'+card.classList[1]+'>.xo');
            card_txt.innerHTML='X';
            card.style.backgroundColor='red';
            x_turn=false;

            turn.innerHTML='O';
        }
        else{
            card_txt=document.querySelector('.'+card.classList[1]+'>.xo');
            card_txt.innerHTML='O';
            card.style.backgroundColor='yellow';
            x_turn=true;

            turn.innerHTML='X';
        }
        card.disabled=true;
        check_match();

        
    })
})
function check_match(){
    let flag=0;
    cards.forEach((card)=>{
        if(card.disabled==false){
            flag++;
        }
    })
    for(let pattern of patterns){
        let card1=cards[pattern[0]].textContent;
        let card2=cards[pattern[1]].textContent;
        let card3=cards[pattern[2]].textContent;
        if(card1!="" && card2!="" && card3!=""){
            if(card1===card2 && card2===card3){
                winner.style.display='block';
                winning_party.innerHTML=card1;
                return;
            }
        
        }
    }
    if(flag==0){
        winner.style.display='block';
        draw_result.innerHTML="Draw!!"; 
    }
    
    
}
restart.addEventListener('click',()=>{
    window.location.reload();
})
