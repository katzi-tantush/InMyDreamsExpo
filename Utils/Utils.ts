export class Utils{
    static randomElement = (arr:any[]):any => {
        return arr[Math.floor(Math.random() * arr.length)];
    }
}