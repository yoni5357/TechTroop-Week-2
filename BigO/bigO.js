//Ex1
// O(n)

//Ex2
// O(log(n))

//Ex3
// O(1)

//Ex4
// O(n*k)
// n = studentGithubs.size()
// k = studentAnswers[studentgithub].size()

//Ex5
// O(n)

//Ex6
const findDuplicates = function (arr){
    const seen = {}
    for(let age of arr){
        if(seen[age] !== undefined){
            console.log("there is a duplicate" )
            return true
        }
        seen[age] = 1
    }
    return false
}

//Ex7
const employees ={
    ax01:{
        name: "Ray",
        age: 28,
        salary:1300
    } ,
    qs84:{
        name: "Lucius",
        age:31,
        salary: 840
    }
}

const findEmployeeSalary= function(employeeId) {
    let emp = employees[employeeId]
    return emp.salary
}

//Ex8
let numbers = [24, 33, 66, 102, 108, 140, 146, 177, 182, 217, 341, 357, 372, 390, 418, 427, 442, 444, 469, 480, 572, 624, 627, 665, 680, 694, 743, 768, 790, 794, 852, 896, 919, 942, 982, 991, 1026, 1055, 1086, 1137, 1141, 1157, 1167, 1271, 1272, 1273, 1301, 1337, 1340, 1344, 1388, 1455, 1465, 1466, 1509, 1555, 1640, 1667, 1667, 1689, 1824, 1897, 1928, 1950, 1987, 2056, 2059, 2070, 2123, 2140, 2198, 2215, 2260, 2304, 2383, 2403, 2433, 2454, 2472, 2480, 2481, 2535, 2543, 2554, 2557, 2580, 2630, 2634, 2671, 2745, 2792, 2839, 2849, 2871, 2873, 2893, 2932, 2962, 2984, 2987]

const findIndex = function(num, numbers){
    let left = 0
    let right = numbers.length - 1
    while (left <= right){
        mid = Math.floor((right + left) / 2 )
        if(numbers[mid] === num){
            return mid
        }
        else if(num < numbers[mid]){
            right = mid - 1
        }
        else{
            left = mid + 1
        }
    }
    console.log("number not in array")
    return null
}

console.log(findIndex(146, numbers))

//Ex9
// green = O(1)
// yellow = O(log(n))
// blue = O(n)
// red = O(n^2)