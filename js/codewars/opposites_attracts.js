function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
}


//2nd
function lovefunc(flower1, flower2){
  if(flower1 % 2 == 0 && flower2 % 2 !== 1){
    return false;
  }
  else if(flower1 % 2 == 1 && flower2 % 2 !== 0){
    return false;
  }
  return true;
}
