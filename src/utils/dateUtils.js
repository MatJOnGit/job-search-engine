function getDateOffset(oldestDate, mostRecentDate = new Date()) {
    const delayInSeconds = Math.floor((mostRecentDate - oldestDate) / 1000);
    return Math.floor(delayInSeconds / (60 * 60 * 24))
}

export { getDateOffset };