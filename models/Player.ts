import { observable } from "mobx";

export class Player {
    id: string;
    name: string;

    @observable
    score: number;
    
    @observable
    role: string;

    constructor(_id: string, _name?:string) {
        this.id = _id;
        this.name = _name ? _name : `unnamed player ${_id}`;
        this.role = '';
        this.score = 0;
    }
}