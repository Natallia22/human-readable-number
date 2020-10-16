module.exports = function toReadable (number) {
    let newnumber = number.toString();
    let a = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let b = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let c = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let d = ['hundred'];

    if (newnumber.length === 1) return a[number];
    if (newnumber.length === 2 && number < 20) return b[newnumber[1]];
    if (newnumber.length === 2 && number >= 20 && newnumber[1] === '0') return c[newnumber[0] - 2];
    if (newnumber.length === 2 && number >= 20) return `${ c[newnumber[0] - 2] } ${ a[newnumber[1]] }`;
    if (newnumber.length === 3 && newnumber[1] === '0' && newnumber[2] === '0') return `${ a[newnumber[0]] } ${ d[0] }`;
    if (newnumber.length === 3 && newnumber[1] === '0') return `${ a[newnumber[0]] } ${ d[0] } ${ a[newnumber[2]] }`;
    if (newnumber.length === 3 && newnumber[1] >= 2 && newnumber[2] === '0') return `${ a[newnumber[0]] } ${ d[0] } ${ c[newnumber[1] - 2] }`;
    if (newnumber.length === 3 && newnumber[1] < 2) return `${ a[newnumber[0]] } ${ d[0] } ${ b[newnumber[2]] }`;
    if (newnumber.length === 3 && newnumber[1] >= 2) return `${ a[newnumber[0]] } ${ d[0] } ${ c[newnumber[1] - 2] } ${ a[newnumber[2]] }`;
}
