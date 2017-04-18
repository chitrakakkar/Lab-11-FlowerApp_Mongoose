// a helper to format the date passed to it;
var moment=require('moment');

function dateFormat(date)
{
    m = moment.utc(date); //read date as UTC
    //identify the timezone in the string
    return m.parseZone().format("dddd, MMMM do YYYY","h:mm a")
}
//creating objects;
var helpers=
{
    dateFormatter: dateFormat
};

module.exports = helpers;