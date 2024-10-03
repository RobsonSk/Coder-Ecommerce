import IEspecifications from "./especification";
import IPrices from "./prices";

export default interface IProduct extends IPrices {
    id: number;
    name: string;
    description: string;
    brand: string;
    model: string;
    image: string;
    videoReview: string;
    evaluation: number;
    tags: string[];
    especifications: IEspecifications
}