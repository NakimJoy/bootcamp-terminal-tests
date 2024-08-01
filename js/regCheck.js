export default function regCheck(regNo, regEnd) {
    return regNo.endsWith(regEnd);
  }
  console.log(regCheck('DC 55 YU GP', 'GP'));
  console.log(regCheck('5566 L', 'L'));
  console.log(regCheck('ERT 123 EC', 'EC'));
  console.log(regCheck('FGT 123 MP', 'MP'));