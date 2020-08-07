import { useEffect, useRef } from "react";

// ASYNC EFFECT
export const useAsyncEffect = (effect: Function, inputs: any[]) => {
  useEffect(() => {
    effect();
  }, inputs);
};
// COMPONENT DID MOUNT EFFECT
export const componentDidMount = (effect: Function) => {
  useEffect(() => {
    effect();
  }, []);
};
// COMPONENT DID UPDATE EFFECT
export const componentDidUpdate = (effect: Function, watchForChange: any[]) => {
  useEffect(() => {
    effect();
  }, watchForChange);
};
// COMPONENT WILL UNMOUNT EFFECT
export const componentWillUnmount = (effect: Function) => {
  useEffect(() => {
    return () => {
      effect();
    };
  }, []);
};

// DEBOUNCE
export const debounce = (callback: (...args: any) => void, time: number) => {
  let timeout;

  return function() {
    const functionCall = () => callback.apply(this, arguments);

    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  };
};

export function useDebounce<A extends any[]>(
  callback: (...args: A) => void,
  wait: number
) {
  // track args & timeout handle between calls
  const argsRef = useRef<A>();
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  function cleanup() {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
  }

  // make sure our timeout gets cleared if
  // our consuming component gets unmounted
  useEffect(() => cleanup, []);

  return function debouncedCallback(...args: A) {
    // capture latest args
    argsRef.current = args;

    // clear debounce timer
    cleanup();

    // start waiting again
    timeout.current = setTimeout(() => {
      if (argsRef.current) {
        callback(...argsRef.current);
      }
    }, wait);
  };
}

// THROTTLE
export const throttle = (func, delay) => {
  let inProgress = false;
  return (...args) => {
    if (inProgress) {
      return;
    }
    inProgress = true;
    setTimeout(() => {
      func(...args); // Consider moving this line before the set timeout if you want the very first one to be immediate
      inProgress = false;
    }, delay);
  };
};

// CHUNK ARRAY
export function chunkArray(arr: Array<any>, size: number) {
  const newArr = [...arr];
  const results = [];
  while (newArr.length) {
    results.push(newArr.splice(0, size));
  }
  return results;
}

// SORT ARRAY
export const sortArrayIntoObjects = (array: Array<any>, property: string) => {
  const obj = {};
  array.forEach(item => {
    const objProp = item[property].toLowerCase();

    if (obj[objProp]) {
      obj[objProp] = [...obj[objProp], item];
    } else {
      obj[objProp] = [item];
    }
  });
  return obj;
};

// Sort by a given field value
export const sortBy = (arrayTobeSorted, fieldName) => {
  const sorter = (a, b) => b[fieldName] - a[fieldName];

  return arrayTobeSorted.sort(sorter);
};
