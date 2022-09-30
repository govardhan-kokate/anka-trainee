//6) Write a JavaScript program to calculate number of days left until next Christmas.

today = new Date();
const cmas = new Date (today.getFullYear(),11,25);
if (today.getMonth()==11 && today.Date()>25);
{
    cmas.setFullYear(cmas.getFullYear()+1);

}
const one_day = 1000*60*60*24;

console.log(`${Math.ceil((cmas.getTime()-today.getTime())/(one_day))} day left utel christmas.`);
