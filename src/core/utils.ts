export function getFormattedDate(date: Date | string): string {
    if (!date) return 'Unknown';

    const d = new Date(date);
    let formattedDate = '';
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
    ];

    formattedDate += months[d.getMonth()].substring(0, 3) + ' ';
    formattedDate += d.getDate() + ', ';
    formattedDate += d.getFullYear();

    return formattedDate;
}
