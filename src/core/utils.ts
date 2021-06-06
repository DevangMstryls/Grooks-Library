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

export function formatInIndianNumeric(value: number): string {
    if (!value) return '--';

    const valueToString = value.toString();
    let lastThreeNumbers = valueToString.substring(valueToString.length - 3);
    const otherNumbers = valueToString.substring(0, valueToString.length - 3);
    if (otherNumbers !== '') {
        lastThreeNumbers = ',' + lastThreeNumbers;
    }
    return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThreeNumbers;
}

export function nFormatter(num: number, digits: number) {
    // ref: https://stackoverflow.com/a/9462382/4331993

    const lookup = [
        {value: 1e9, symbol: "B"},
        {value: 1e6, symbol: "M"},
        {value: 1e3, symbol: "k"},
        {value: 1, symbol: ""},
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    const item = lookup.find((d) => num >= d.value);
    return (
        item
            ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
            : "0"
    );
}

export function by(key: string, order: 'asc' | 'desc' = 'desc') {
    if (order === 'asc') {
        return (a: any, b: any) => {
            return new Date(a[key]).getTime() - new Date(b[key]).getTime();
        };
    }

    // default sort is in desc
    return (a: any, b: any) => {
        return new Date(b[key]).getTime() - new Date(a[key]).getTime();
    };
}
