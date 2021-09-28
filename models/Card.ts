import { action, makeAutoObservable, observable } from "mobx";

export class Card{
    @observable
    text: string;
    id: string;

    constructor(_text:string, _id:string) {
        this.text = _text;
        this.id = _id;

        makeAutoObservable(this);
    }

    @action
    setText = (newText: string) => {
        this.text = newText;
    }
}