export default function totalPhoneBill(logs) {
    const callCost = 2.75;
    const smsCost = 0.65;

    const logList = logs.split(', ').map(log => log.trim());

    let totalCost = 0;

    for (const log of logList) {
        if (log === 'call') {
            totalCost += callCost;
        } else if (log === 'sms') {
            totalCost += smsCost;
        }
    }

    const formattedCost = `R${totalCost.toFixed(2)}`;
    return formattedCost;
}

console.log(totalPhoneBill('call, sms, call, sms, sms'));
console.log( totalPhoneBill('call, sms'));
console.log(totalPhoneBill('sms, sms'));
