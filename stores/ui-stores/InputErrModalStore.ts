import { action, makeAutoObservable, observable } from "mobx";
import { RootStore } from "../RootStore";

export const inputErrTypes = {
    playerCount: 'player count',
    unSetRoles: 'un-set roles'
}

export class InputErr {
    type: string;
    msg: string;


    constructor(errType: string, errMsg: string) {
        this.type = errType;
        this.msg = errMsg;
    }
}

export class InputErrModalStore {
    rootStore: RootStore;

    @observable
    inputErrors: InputErr[];

    @observable
    showModal: boolean;

    constructor(_rooStore: RootStore) {
        this.rootStore = _rooStore;
        this.inputErrors = [];
        this.showModal = false;

        makeAutoObservable(this);
    }

    @action
    setShowModal = (value: boolean) => {
        this.showModal = value;
    }

    @action
    addErr = (newErr: InputErr) => {
        this.inputErrors = [...this.inputErrors, newErr];
    }

    @action
    removeErr = (errType: string) => {
        this.inputErrors = [...this.inputErrors.filter(e => e.type !== errType)];
    }
}