import { action, computed, makeAutoObservable, observable } from "mobx";
import TimerFormattedTime from "../../interfaces/TimerFormattedTime";
import { RootStore } from "../RootStore";

export class TimerStore {
    rootStore: RootStore;

    roundSpanSecs: number;

    intervalId: number;

    @observable
    timerIsActive: boolean;

    @observable
    secsRemaining: number;

    constructor(_rootStore: RootStore) {
        this.rootStore = _rootStore;

        this.timerIsActive = false;
        this.roundSpanSecs = 120
        this.secsRemaining = this.roundSpanSecs;
        this.intervalId = 0;

        makeAutoObservable(this);
    }

    timerInterval = () => {
        return window.setInterval(() => {
            this.decreaseRemainingSecs();
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
    decreaseRemainingSecs = () => {
        if (this.secsRemaining > 0) {
            this.secsRemaining = this.secsRemaining - 1;
        }
        if (this.secsRemaining == 0) {
            clearInterval(this.intervalId);
            this.rootStore.gameSessionStore.SetShowTimerEndMsg(true);
        }
    }

    @action
    startTimer = () => {
        this.intervalId = this.timerInterval();
        this.setTimerIsActive();
    }

    @action
    stopTimer = () => {
        clearInterval(this.intervalId);
        this.setTimerIsActive();
    }

    // dev TODO: remove after dev
    @action
    forceTimerEnd = () => {
        this.secsRemaining = 0;
    }
}