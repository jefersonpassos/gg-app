export class Produto {
    id: number;
    title: string;
    description: string;
    price: Number;
    category?: string;
    cashDiscount?: Number;
    parcel?: Number;
    media?: string[];
    ageCategory: Number;
    slug: string;
}