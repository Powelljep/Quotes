import { User } from "./user";
import { Votes } from "./votes";

export class Quote {
    constructor(user:User,public quote:string, votes:Votes){}
}
