export interface User {
    id: number,
    name: string,
    email: string,
    password: string,
    phone: number,
    profession: string,
    interest: [string],
    image: string,
    cart: [number]
}