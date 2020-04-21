

let money,
    time;

    money = +prompt("Ваш бюджет на месяц", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    
 let appData = {
    budjet:  money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: {}, 
    savings: false
};




// for (let i = 0; i<2; i++){
// let nesseseryExpensesName = prompt ("“Введите обязательную статью расходов в этом месяце”", ""),
//     nesseseryExpensesValue = +prompt ("Во сколько обойдется?", "");
    
//     if (typeof(nesseseryExpensesName) === 'string' && typeof(nesseseryExpensesName) != null && typeof(nesseseryExpensesName) === 'string' && typeof(nesseseryExpensesName != null)) {
//     appData.expenses[nesseseryExpensesName] = nesseseryExpensesValue;

//     } else {
//         nesseseryExpensesName = prompt ("“Введите обязательную статью расходов в этом месяце”", ""),
//         nesseseryExpensesValue = +prompt ("Во сколько обойдется?", "");
//     }
    
// }



let i = 0;
// do {
    
//     let nesseseryExpensesName = prompt ("“Введите обязательную статью расходов в этом месяце”", ""),
//         nesseseryExpensesValue = +prompt ("Во сколько обойдется?", "");

//     appData.expenses[nesseseryExpensesName] = nesseseryExpensesValue;
//     i++;

// }
// while (i<2);


while (i<2){

    let nesseseryExpensesName = prompt ("“Введите обязательную статью расходов в этом месяце”", ""),
    nesseseryExpensesValue = +prompt ("Во сколько обойдется?", "");

appData.expenses[nesseseryExpensesName] = nesseseryExpensesValue;
i++;

}








alert("витрати на день" + appData.budjet/30);





