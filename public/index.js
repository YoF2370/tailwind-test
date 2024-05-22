const lame = document.querySelector('#lame');
const late = document.querySelector('#late');
const la = String("EN");


lame.addEventListener('click', () => {
 if(la.includes("EN")){
  late.innerHTML = "AR";
  la.replace("EN","AR");
 }
 else if(la.includes("AR")){
  late.innerHTML = "EN";
  la.replace("EN","AR");
 }


})