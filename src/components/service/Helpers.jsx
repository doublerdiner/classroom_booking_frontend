export const findThisUser = (array, user)=>{
    const answer = array.find((item) => item.email === user.email)
    return answer
}

export const sleep = (ms)=>{
    return new Promise(resolve => setTimeout(resolve, ms));
  }

export const getDate = (dateArgument)=>{
    const returnValue = {}
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const date = dateArgument
    returnValue.dayName = weekdays[date.getDay()]
    returnValue.day = date.getDate();
    returnValue.month = date.getMonth() + 1;
    returnValue.year = date.getFullYear();
    return returnValue
}

export const formatDate = (date)=>{
  const month = ("0" + date.month).slice(-2)
  const day = ("0" + date.day).slice(-2)
  return `${date.year}-${month}-${day}`
}