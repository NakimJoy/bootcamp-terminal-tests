export default function countAllFromTown(reg_numbers, town) {
    const reg_numbers_list = reg_numbers.split(',');

    let count = 0;

    for (const reg_number of reg_numbers_list) {
        if (reg_number.trim().startsWith(town)) {
            count++;
        }
    }

    return count;
}