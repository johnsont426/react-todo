const today = new Date()
const todayMonthNum = today.getMonth()
const dateArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
export const monthNameArray = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
export const todayMonthName = monthNameArray[todayMonthNum]
export const todayYear = today.getFullYear()
export const todayDate = today.getDate()

export function yearArray () {
  let a = []
  for (let i = 0; i < 40; i++) {
    a.push(todayYear + i)
  }
  return a
}

export function getDateOptionsArray (monthName, year) {
  const month = monthNameArray.indexOf(monthName)
  const numberOfDaysInTheMonth = new Date(year, month + 1, 0).getDate()
  return dateArray.slice(0, numberOfDaysInTheMonth)
}

function getFormattedDate (month, date, year) {
  return `${monthNameArray.indexOf(month) + 1}/${date}/${year}`
}

export function getFormattedTodoObj (month, date, year, todoTitle, todoDescription, isDone) {
  return {
    timeStamp: Date.now(),
    date: getFormattedDate(month, date, year),
    todoTitle,
    todoDescription,
    isDone,
  }
}