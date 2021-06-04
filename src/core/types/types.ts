export type Action = {
    type: string;
    payload: any;
};

export type Book = {
    name: string,
    description: string,
    author: string,
    publisher: string,
    added_on: string,
    availableStock: number,
};
