var moment = require('moment');

console.log(moment().format());

// January 1st 1979 @ 12:00am --> 0
// January 1st 1979 @ 12:01am --> -60

var now = moment();

console.log('Current Timestamp', now.unix());

// Time since the UnixEpoch
var timestamp = 1486923241;

var currentMoment = moment.unix(timestamp);
console.log('Current moment', currentMoment.format('DD MMM YYYY @ H:mm a'));

console.log('Current moment', currentMoment.format('MMMM Do, YYYY @ h:mm A'));