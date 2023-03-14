
//data stored in un sequenced manner, Loop cannot be used to access the data
var Monday: number = 560
var Tuesday: number = 900
var Wednesday : number = 320
var Thursday : number = 660
var Friday : number = 220
var saturday : number = 1320
var sunday : number = 470

//data stored in sequenced manner using, Loop can be used to access data
var week : number[] = [560,900,320,660,220,1320,470]

console.log(week[0])
console.log(week[1])
console.log(week[2])
console.log(week[3])
console.log(week[4])
console.log(week[5])
console.log(week[6])

console.log("Array length is:: "+week.length)

//syntax 1
var week1: number[] = [560,900,320,660,220,1320,470]

//syntax 2
var week2 :number[]
week2 = [100,40,54,50]

//syntax 3
var week3: number[] = new Array(4)
week3 = [100,40,54,50]

//syntax 4 
var batches :string[] = new Array ("java", "c", "c++")
