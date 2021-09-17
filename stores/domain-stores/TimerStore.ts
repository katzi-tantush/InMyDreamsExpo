import { action, computed, makeAutoObservable, observable } from "mobx";
import TimerFormattedTime from "../../interfaces/TimerFormattedTime";
import { RootStore } from "../RootStore";

export class TimerStore {
    rootStore: RootStore;

    roundSpanSecs: number;
    
    @observable
    timerIsActive: boolean;

    @observable
    secsRemaining: number;

    constructor(_rootStore: RootStore) {
        this.rootStore = _rootStore;

        this.timerIsActive = false;
        this.roundSpanSecs = 120
        this.secsRemaining = this.roundSpanSecs;

        makeAutoObservable(this);
    }

    timerInterval: any = () => {
        setInterval(() => {
            this.secsRemaining = this.secsRemaining - 1;
        }, 1000)
    }

    @computed
    getFormattedRemainingSecs = (): TimerFormattedTime => {
        const secsNum: number = this.secsRemaining % 60;

        const formattedTime: TimerFormattedTime = {
            mins: `0${Math.floor(this.secsRemaining / 60)}`,
            secs: `${secsNum < 10 ? '0' : ''}${secsNum}`
        }

        return formattedTime;
    }

    @action
    setTimerIsActive = () => {
        this.timerIsActive = !this.timerIsActive;
    }

    @action
    decreaseTimerSecs = () => {
        if (this.secsRemaining > 0) this.secsRemaining = this.secsRemaining - 1;
        if (this.secsRemaining == 0) {
            clearInterval(this.timerInterval);
        }
    }

    @action
    startTimer = () => {
        this.timerInterval();
        this.setTimerIsActive();
    }

    @action
    stopTimer = () => {
        clearInterval(this.timerInterval);
        this.setTimerIsActive();
    }

    // dev TODO: remove after dev
    @action
    forceTimerEnd = () => {
        this.secsRemaining = 0;
    }
}