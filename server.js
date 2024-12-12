import express from "express"
const app=express();
app.use(express.json())
const spielAuswahl=['rock','paper','scissors'];
const serverAuswahl=spielAuswahl[Math.floor(Math.random()*spielAuswahl.length)];
console.log("Server Auswahl",serverAuswahl)
app.get("/hello", (req,res)=>{
    res.send("hello back\n");
})
app.post("/guess",(req,res)=>{
  const playAuswahl=req.body.playAuswahl
  const jsonAntwort={
    playChoice:playAuswahl,
    servChoice:serverAuswahl,
    result:""
  };
    let result="";
    switch (playAuswahl) {
        case "rock":
            if(serverAuswahl==="paper"){
                result="Du hast verloren!";
            }else if(serverAuswahl==="rock"){
                result="Unentschieden!"
            }else{
                 result="Du hast gewonnen!"
            }
            break;
            case "paper":
                if(serverAuswahl==="paper"){
                    result="Unentschieden";
                }else if(serverAuswahl==="rock"){
                    result="Du hast gewonnen!"
                }else{
                     result="Du hast verloren!"
                }
            
            break;
            case "scissors":
                if(serverAuswahl==="paper"){
                    result="Du hast gewonnen!";
                }else if(serverAuswahl==="rock"){
                    result="Du hast verloren!"
                }else{
                     result="Unentschieden!"
                }
            
            break;
    
        default:
            break;
    }
    jsonAntwort.result=result;
    console.log("Json Antwort",jsonAntwort);
    res.send(JSON.stringify(jsonAntwort));
})
app.listen(3002,()=>{
    console.log("server test started.")
});