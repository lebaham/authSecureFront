export class SignUpInfo {
    email: string;
    username: string;
    password: string;
    age: number;
    telephone: string;
    role: string[];

    constructor(email: string, username: string, password: string, age: number, telephone: string) {
        this.email = email;
        this.username = username;
        this.password = password;
        this.age = age;
        this.telephone = telephone;
        this.role = ['user'];
    }
}
