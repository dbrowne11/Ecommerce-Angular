export interface IUser {
    firstName: string,
    email: string,
    mobile: string,
    password: string,
}

export class User {
    constructor(
        public name?: string,
        public email?: string,
        public mobile?: string,
        public password?: string,
        public username?: string,
        public usernameOrEmail?: string
    ){}
}