function spotlightMap(grid){
    const rows=grid.length;
    const cols=grid[0].length;
    function calculateSpotlightSum(row, col) {
        let sum = 0;
        for(let i=row-1;i<=row+1;i++){
            for(let j=col-1;j<=col+1;j++){
                if(i>=0&&i<rows&&j>=0&&j<cols){
                    sum += grid[i][j];
                }
            }
        }
        return sum;
    }
    const spotlightGrid=[];
    for(let i=0;i<rows;i++){
        const newRow=[];
        for(let j=0;j<cols;j++){
            const spotlightSum=calculateSpotlightSum(i,j);
            newRow.push(spotlightSum);
        }
        spotlightGrid.push(newRow);
    }
    return spotlightGrid;
}
console.log(spotlightMap([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(spotlightMap([[2, 6, 1, 3, 7], [8, 5, 9, 4, 0]]));
console.log(spotlightMap([[3]]));
