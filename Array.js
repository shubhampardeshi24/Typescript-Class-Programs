//data stored in un sequenced manner, Loop cannot be used to access the data
var Monday = 560;
var Tuesday = 900;
var Wednesday = 320;
var Thursday = 660;
var Friday = 220;
var saturday = 1320;
var sunday = 470;
//data stored in sequenced manner using, Loop can be used to access data
var week = [560, 900, 320, 660, 220, 1320, 470];
console.log(week[0]);
console.log(week[1]);
console.log(week[2]);
console.log(week[3]);
console.log(week[4]);
console.log(week[5]);
console.log(week[6]);
console.log("Array length is:: " + week.length);
