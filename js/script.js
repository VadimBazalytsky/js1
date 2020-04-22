

let money,
    time;

function start() {

    money = +prompt("Ваш бюджет на месяц", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

        while (money == null || isNaN(money) || money == "") {
            money = +prompt("Ваш бюджет на месяц", "");
    }

}

start();



 let appData = {
    budjet:  money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: {}, 
    savings: true
};




function chooseExpenses(){

for (let i = 0; i<2; i++){
    let nesseseryExpensesName = prompt ("“Введите обязательную статью расходов в этом месяце”", ""),
        nesseseryExpensesValue = +prompt ("Во сколько обойдется?", "");
        
        if (typeof(nesseseryExpensesName) === 'string' && typeof(nesseseryExpensesName) != null && typeof(nesseseryExpensesValue) === 'string' && typeof(nesseseryExpensesValue != null)) {
        appData.expenses[nesseseryExpensesName] = nesseseryExpensesValue;

        } else {
            i--;
        }
    }
}    
// chooseExpenses();


function detectDayBudget(){

    alert("витрати на день" + (appData.budjet/30).toFixed(1));
   
}


detectDayBudget();


function SavingCount() {
    if (appData.savings == true){

        let save = +prompt ('Вкажіть розмір заощаджень', 40000),
            percent = prompt ('Відсоток в місяць', 10);

            appData.monthIncome = save/12/30*percent;

        alert ("Дохід з депозиту в місяць " + appData.monthIncome);
    }
}

SavingCount();

function chooseOptExpenses(){
    for (let i = 1; i<4; i++){
        
        let unnesesseryExpenses = prompt("Стаття необов'язкових витрат", 'Дівки');
            if (typeof(unnesesseryExpenses) === "string" && typeof(unnesesseryExpenses) != null && typeof(unnesesseryExpenses) != undefined){
                appData.optionalExpenses[i] = unnesesseryExpenses;
        } else {
            i--;
        }
       
        

      
    }

    appData.optionalExpenses.forEach (function(g, j){
        console.log(j + ': ' + g );
    });

   
}

let arr = [1,2,3,4,5,6,7,8];
        





chooseOptExpenses();

// appData.optionalExpenses.array.forEach(element => {
    
// });

// alert (i);

// });


for (let key in appData ){
console.log("Наша программа включает в себя данные: " +  appData[key]);


}




