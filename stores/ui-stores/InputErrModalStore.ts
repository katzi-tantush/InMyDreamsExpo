import { action, makeAutoObservable, observable } from "mobx";
import { RootStore } from "../RootStore";

export class InputErr {
    type: string;
    msg: string;
    
    
    constructor(errType: string, errMsg: string) {
        this.type = errType;
        this.msg = errMsg;
    }
}

export const defaultInputErrs = {
    playerCount: new InputErr('player count', ''),
    unSetRoles: new InputErr('un-set roles', ''),
    inValidCardText: new InputErr('in-valid card text', '')
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
    addErr = (inputErr: InputErr) => {
        if (this.inputErrors.every(e => e.type !== inputErr.type)) {
            this.inputErrors = [...this.inputErrors, inputErr];
        }
    }

    @action
    removeErr = (errType: string) => {
        this.inputErrors = [...this.inputErrors.filter(e => e.type !== errType)];
    }
}