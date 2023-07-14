function groupSeats(arrangement,n){
    let cnt=0;
    for (let row of arrangement){
        let conszero=0;
        for (let seat of row){
        if(seat===0){
            conszero++;
            if (conszero>=n){
            cnt++;
            }
        }
        else{
            conszero=0;
        }
        }
    }
    return cnt;
}
const arrangement1=[[1,0,1,0,1,0,1],[0,1,0,1,0,1,0],[0,0,1,1,1,1,1],[1,0,1,1,0,0,1],[1,1,1,0,1,0,1],[0,1,1,1,1,0,0]];
const arrangement2=[[1,0,1,0,1,0,1],[0,1,0,0,0,0,0]];
console.log(groupSeats(arrangement1,2));
console.log(groupSeats(arrangement2,4));
