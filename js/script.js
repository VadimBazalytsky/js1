

let money,
    time;

    money = +prompt("Ваш бюджет на месяц", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    
 let expenses = [];


for (let i = 0; i<2; i++){
let nesseseryExpensesName = prompt ("“Введите обязательную статью расходов в этом месяце”", ""),
    nesseseryExpensesValue = +prompt ("Во сколько обойдется?", "");
    
    expenses[i] = nesseseryExpensesName + ":" + nesseseryExpensesValue ;
    alert(expenses[i]);
}


alert(expenses);



let appData = {
    budjet:  money,
    timeData: time,
    expenses: expenses,
    optionalExpenses: null,
    income: null, 
    savings: false
};


