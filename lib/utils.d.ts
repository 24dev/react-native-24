export declare const useAsyncEffect: (effect: Function, inputs: any[]) => void;
export declare const componentDidMount: (effect: Function) => void;
export declare const componentDidUpdate: (effect: Function, watchForChange: any[]) => void;
export declare const componentWillUnmount: (effect: Function) => void;
export declare const debounce: (callback: (...args: any) => void, time: number) => () => void;
export declare function useDebounce<A extends any[]>(callback: (...args: A) => void, wait: number): (...args: A) => void;
export declare const throttle: (func: () => void, delay: number) => (...args: any) => void;
export declare function chunkArray(arr: Array<any>, size: number): any[][];
export declare const sortArrayIntoObjects: (array: any[], property: string) => {};
export declare const sortBy: (arrayTobeSorted: any, fieldName: any) => any;
//# sourceMappingURL=utils.d.ts.map