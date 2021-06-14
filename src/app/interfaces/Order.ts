import { Food } from './Food';

export interface Order {
    id: number,
    userId: number,
    foods: Food[],
    total: number,
    status: string,
    timeLeft: number
}