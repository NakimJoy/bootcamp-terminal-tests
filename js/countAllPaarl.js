export default function countAllPaarl(reg_numbers) {
    const reg_list = reg_numbers.split(', ');

    let count = 0;

    for (const reg of reg_list) {
        if (reg.startsWith('CJ')) {
            count++;
        }
    }

    return count;
}