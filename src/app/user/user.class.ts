export class User{
    id:number =0;
    username: string = "";
    password: string ="";
    firstname: string = "";
    lastname: string = "";
    email: string | null = null;
    isAdmin: boolean = false;
    isloggedin: boolean = false;
}