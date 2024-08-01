export default function isFromBellville(item) {
    if (item.startsWith('CY')) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(isFromBellville('GP24'));