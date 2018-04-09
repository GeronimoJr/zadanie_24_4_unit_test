
const formatDate = (timeInSeconds) => {
    
    const timeInMinutes = timeInSeconds / 60;
    const timeInHours = timeInMinutes / 60;

    let secLeft = Math.floor(timeInSeconds % 60);
    let minLeft = Math.floor(timeInMinutes % 60);
    let hLeft = Math.floor(timeInHours);
    
    if (timeInSeconds < 1 || timeInSeconds == null) {

        return `0s`;
        
    } else {

        if (secLeft == 0) {
            secLeft = '';
        } else {
            secLeft = secLeft + 's';
        };

        if (minLeft == 0) {
            minLeft = '';
        } else if (secLeft == '') {
            minLeft = minLeft + 'm';
        } else {
            minLeft = minLeft + 'm ';
        };

        if (hLeft == 0) {
            hLeft = '';
        } else if (secLeft == '' && minLeft == '') {
            hLeft = hLeft + 'h';
        } else {
            hLeft = hLeft + 'h ';
        };
    
        return `${hLeft}${minLeft}${secLeft}`;
    }
}
  
module.exports = formatDate;


