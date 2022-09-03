const pd = "PEDRA";
const pp = "PAPEL";
const ts = "TESOURA";
let JOAO = ts;
let ANDRE = pd;
const e = "EMPATE";
const jv = "JOAO WINS";
const av = "ANDRE WINS";

if (JOAO == ANDRE){
  console.log(e);
} else{
  if (JOAO == pp){
    if (ANDRE == ts){
      console.log(av);
    } else if (ANDRE == pd){
      console.log(jv);
    }
  } else if (JOAO == pd){
    if (ANDRE == pp){
      console.log(av);
    } else if (ANDRE == ts){
      console.log(jv);
    }
  } else{
    if (ANDRE == pd){
      console.log(av);
    } else if (ANDRE == pp) {
      console.log(jv);
    }
  }
}