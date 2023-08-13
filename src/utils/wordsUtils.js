function getCapitalizedWords(originString) {
    return originString
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join (' ');
};

export { getCapitalizedWords };