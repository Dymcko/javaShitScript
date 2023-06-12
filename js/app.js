// 1. Напишите функцию,
// которая принимает строку в качестве параметра и находит самое длинное слово в строке.
 
 function findLongestWord(str) {
    return str.split(' ').reduce((a, b) => (b.length > a.length) ? b : a);
  };
  
  console.log(findLongestWord('str, strgl, lginnvbs'));
// 2. написать функцию которая принимает число и возвращает перевернутое число

 
    function reverseNumber(num, r = 0){
        if(!num) return r;
        r =  r * 10  + num % 10;
        return reverseNumber(Math.floor( num / 10), r);
    }
    console.log(reverseNumber(234));


// 3.написать функцию которая будет принимать стринг значение 
// и возвращать новое стринг значение только с уникальными символами

 function unique(str) {
   
 }
 const array = [3,3,4,"r","r",11,11,15]
 const uniqueArr = array.reduce((alfa, beta) => {
    return alfa.includes(beta) ? alfa : [...alfa, beta];
 }, [])

// 4.написать функцию которая принимает 3 аргумента,
// победы, ничьи и поражения и возвращает количество очков команды 
// ( победа 3 очка, ничья 1 очко, поражение 0 ) 

 function calcPoints(win, draw, loss) {

 }

// 5.написать функцию которая принимает массив и возвращает объект с такими свойствами :
// максимальное значение, 
// минимальное значение, 
// количество элементов,
// среднее арифметическое.


const arr2 = [2,4,6,8,11];
const maxValue = arr2.reduce((max, currernt) => {
    return Math.max(max, currernt);
 })
const minValue = arr2.reduce ((min, current) => {
    return Math.min(min, current);
 })
const quantElem = Object.keys(arr2).length;
console.log(quantElem);

const summ = arr2.reduce((total, current) => {
    return total + current;
})
const midlleSum = summ / quantElem;


function statisctics(arr) {
maxValue()
}


// 6.Написать функцию которая принимает массив работников компании 

 const workers = [
   { name: "Jimm", salary: 40000, department: "IT" },
   { name: "Bob", salary: 60300, department: "HR" },
   { name: "Stacy", salary: 15000, department: "IT" },
   { name: "Tom", salary: 55200, department: "DEVOPS" },
   { name: "Kate", salary: 25000, department: "IT" },
   { name: "John", salary: 40000, department: "HR" },
   { name: "Billy", salary: 60000, department: "DEVOPS" },
];
const newWorkList = workers
.map(workers => {
    return {
        department: `${workers.department}`,
        avarage: `${workers.salary}`
    }
    
})
.sort ((a, b) => b.avarage - a.avarage)
console.log(newWorkList[0])
//newWorkList.sort ((a, b) => b.avarage - a.avarage);
 //const sortWorkers = workers.sort ((a, b) => b.salary - a.salary);
 //console.log(sortWorkers[0]);
// Функция должна вернуть объект 
// {department: ‘Some department’, avarage: ‘some avarage value’}. 
// В этом объекте будет department с самой большой стредней зарплатой из всех departments. 


