export default function isWeekday(dayString) {
    const weekendDays = ['Saturday', 'Sunday'];
if (weekendDays.includes(dayString)) {
      return 'weekend day', false;
} else{
  return"not weekend day", true;
}
}
console.log(isWeekday('Monday'))
console.log(isWeekday('Sunday'))