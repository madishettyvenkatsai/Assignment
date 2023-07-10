function noofchocolates(money,cost){
    const moneyvalue=parseFloat(money.match(/[+-]?\d+(\.\d+)?/));
    const costvalue=parseFloat(cost.match(/[+-]?\d+(\.\d+)?/));
    if (isNaN(moneyvalue)||isNaN(costvalue)||moneyvalue<0||costvalue<=0){
      return "Invalid Input";
    }
    let choc=Math.floor(moneyvalue/costvalue);
    let wrap=choc;
    while (wrap>=3){
      const additionalchoc=Math.floor(wrap/3);
      choc+=additionalchoc;
      wrap=wrap%3+additionalchoc;
    }
    return choc;
  }
  console.log(noofchocolates("4$","1$"));
  //1st  Output: 5
  console.log(noofchocolates("55 $", "5$"));
  //2nd Output: 16
  console.log(noofchocolates("I have 68$", "2$"));
  //3rd Output: 50
  console.log(noofchocolates("I got -68$ from my mom", "2$"));
  //4th Output: "Invalid Input"