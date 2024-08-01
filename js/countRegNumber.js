export default function countRegNumber(registrationString) {
    var registrationNumbers = registrationString.split(',');
    return registrationNumbers.length;
}