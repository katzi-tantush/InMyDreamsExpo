import { action, computed, makeAutoObservable, observable } from "mobx";
import TimerFormattedTime from "../../interfaces/TimerFormattedTime";
import { RootStore } from "../RootStore";

export class TimerStore {
    rootStore: RootStore;

    defaultRoundSecs: number;

    intervalId: number;

    @observable
    timerIsActive: boolean;

    @observable
    secsRemaining: number;

    constructor(_rootStore: RootStore) {
        this.rootStore = _rootStore;

        this.timerIsActive = false;
        this.defaultRoundSecs = 120
        this.secsRemaining = this.defaultRoundSecs;
        this.intervalId = 0;

        makeAutoObservable(this);
    }

    timerInterval = () => {
        return window.setInterval(() => {
            if (this.secsRemaining > 0) {
                this.setSecsRemaining();
            }
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
    setTimerIsActive = (active: boolean) => {
        this.timerIsActive = active;
    }

    @action
    setSecsRemaining = (newSecsRemaining?: number) => {
        if (newSecsRemaining) {
            this.secsRemaining = newSecsRemaining;
        }
        else {
            this.secsRemaining = this.secsRemaining - 1;
        }

        // if (this.secsRemaining > 0) {
        //     this.secsRemaining = this.secsRemaining - 1;
        // }
        // if (this.secsRemaining == 0) {
        //     clearInterval(this.intervalId);
        //     this.rootStore.gameRoundStore.SetShowTimerEndMsg(true);
        // }
    }

    @action
    startTimer = () => {
        this.intervalId = this.timerInterval();
        this.setTimerIsActive(true);
    }

    @action
    stopTimer = () => {
        clearInterval(this.intervalId);
        this.setTimerIsActive(false);
    }

    @action
    resetTimer = () => {
        this.stopTimer();
        this.setSecsRemaining(this.defaultRoundSecs);
    }

    // dev TODO: remove after dev
    @action
    forceTimerEnd = () => {
        this.secsRemaining = 0;
    }
}