export default function transportFee(price) {
    switch (price){
      case 'morning':
            return 'R20';
        break;
      case 'afternoon':
        return 'R10';
       break;
      case 'nightshift':
        return 'free';
       break;
                 }
  }
  console.log(transportFee('morning'));
  console.log(transportFee('afternoon'));
  console.log(transportFee('nightshift'));
  console.log(transportFee('evening'));