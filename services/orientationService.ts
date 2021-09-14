import * as ScreenOrientation from 'expo-screen-orientation';

export class OrientationService{
    lockToLandscape = () => {
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    }

    lockToPortrait = () => {
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }
}