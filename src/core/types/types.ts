export type Action = {
    type: string;
    payload: any;
};

export type Book = {
    id: string | number,
    name: string,
    description: string,
    author: string,
    publisher: string,
    addedOn: string,
    availableStock: number,
    price: number,
    genre: string,
    cover: string,
};
