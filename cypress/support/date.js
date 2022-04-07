export default function currentDate(year,month,day) {
    let newDate =  new Date()
     year = newDate.getFullYear().toString()
     month = newDate.getMonth().toString()
     if (month.length < 2) {
         month = '0' + month
     }
     day = newDate.getDate().toString()
     if (day.length < 2) {
        day = '0' + day
     }
     let today = year + '-' + month + '-' + day
    return today
}