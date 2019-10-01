export class User {
  constructor(public email: string, public name: string, private password: string) {}

    matches(another: User): boolean {
      return another !== undefined && another.email === this.email && another.password === this.password;
    }
  }

  export const users: {[key: string]: User } = {
    'juliana@gmail.com': new User ('juliana@gmail.com', 'Juliana', 'juliana123'),
    'adriana@gmail.com': new User ('adriana@gmail.com', 'Adriana', 'adriana123')
  }
