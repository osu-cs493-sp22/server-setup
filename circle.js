function circumference(r) {
    return Math.PI * 2 * r;
}

function area(r) {
    return Math.PI * r * r;
}

module.exports = {
    circumference: circumference,
    area: area
};
