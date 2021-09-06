import { observable } from "mobx";

export class Player {
    id: number;
    name: string;

    @observable
    score: number;
    
    @observable
    role: string;

    constructor(_id: number, _role:string, _name?:string) {
        this.id = _id;
        this.role = _role;
        this.name = _name ? _name : 'unnamed player';
        this.score = 0;
    }
}