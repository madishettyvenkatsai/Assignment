function issimilar(a,b){
  if (typeof a!==typeof b){
    return false;
  }
  if(Array.isArray(a)){
    if(a.length!==b.length){
      return false;
    }
    for(let i=0;i<a.length;i++){
      if(!issimilar(a[i],b[i])){
        return false;
      }
    }
    return true;
  }
  if(typeof a==='object'){
    const A=Object.keys(a);
    const B=Object.keys(b);
    if(keysA.length!==keysB.length){
      return false;
    }
    for(let key of keysA){
      if(!b.hasOwnProperty(key)||!issimilar(a[key],b[key])){
        return false;
      }
    }
    return true;
  }
  return a===b;
}
console.log(isSimilar(["cars", "trains", ["roads", ["railways"]]], ["cars", "trains", ["roads", ["railways"]]]));
console.log(isSimilar({"pairs": [[3, 5], [1, 7], [2, 6], [0, 8]]}, {"pairs": [[3, 5], [1, 1], [2, 6], [0, 8]]}));
console.log(isSimilar({"Sam": 4, "Elliot": 4, "equality": true}, {"Sam": 4, "Elliot": 5, "equality": false}));
console.log(isSimilar([{"D": [0, 3]}, {"X": [1, 3]}, {"D": [3, 7]}], [{"D": [0, 3]}, {"X": [1, 3]}, {"D": [3, 7]}]));
