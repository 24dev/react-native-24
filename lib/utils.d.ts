export declare const useAsyncEffect: (effect: Function, inputs: any[]) => void;
export declare const componentDidMount: (effect: Function) => void;
export declare const componentDidUpdate: (effect: Function, watchForChange: any[]) => void;
export declare const componentWillUnmount: (effect: Function) => void;
export declare function useDebounce<A extends any[]>(callback: (...args: A) => void, wait: number): (...args: A) => void;
export declare const throttle: (func: any, delay: number) => (...args: any) => void;
export declare function chunkArray(arr: any[], size: number): any[][][];
export declare const sortArrayIntoObjects: (array: any[], property: string) => any;
export declare const sortBy: (arrayTobeSorted: any[], fieldName: string) => any[];
//# sourceMappingURL=utils.d.ts.map