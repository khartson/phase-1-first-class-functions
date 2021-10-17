function receivesAFunction(fnc){
  fnc(); 
}

function returnsANamedFunction(){
  return function fnc(){
    return; 
  }
}

function returnsAnAnonymousFunction(){
  return function () {
    return; 
  }
}