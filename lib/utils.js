"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
/* tslint:disable */
// ASYNC EFFECT
exports.useAsyncEffect = (effect, inputs) => {
    react_1.useEffect(() => {
        effect();
    }, inputs);
};
// COMPONENT DID MOUNT EFFECT
exports.componentDidMount = (effect) => {
    react_1.useEffect(() => {
        effect();
    }, []);
};
// COMPONENT DID UPDATE EFFECT
exports.componentDidUpdate = (effect, watchForChange) => {
    react_1.useEffect(() => {
        effect();
    }, watchForChange);
};
// COMPONENT WILL UNMOUNT EFFECT
exports.componentWillUnmount = (effect) => {
    react_1.useEffect(() => {
        return () => {
            effect();
        };
    }, []);
};
// DEBOUNCE
// export const debounce = (callback: (...args: any) => void, time: number) => {
//   let timeout: any;
//   return function() {
//     const functionCall = () => callback.apply(this, arguments);
//     clearTimeout(timeout);
//     timeout = setTimeout(functionCall, time);
//   };
// };
function useDebounce(callback, wait) {
    // track args & timeout handle between calls
    const argsRef = react_1.useRef();
    const timeout = react_1.useRef();
    function cleanup() {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
    }
    // make sure our timeout gets cleared if
    // our consuming component gets unmounted
    react_1.useEffect(() => cleanup, []);
    return function debouncedCallback(...args) {
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
exports.useDebounce = useDebounce;
// THROTTLE
exports.throttle = (func, delay) => {
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
function chunkArray(arr, size) {
    // tslint:disable-next-line
    const newArr = []; /* eslint-disable-line */
    newArr.push(arr);
    const results = [];
    while (newArr.length) {
        results.push(newArr.splice(0, size));
    }
    return results;
}
exports.chunkArray = chunkArray;
// SORT ARRAY
exports.sortArrayIntoObjects = (array, property) => {
    const obj = {};
    array.forEach(item => {
        const objProp = item[property].toLowerCase();
        // eslint disable-next-line
        if (obj[objProp]) {
            obj[objProp] = [...obj[objProp], item];
        }
        else {
            obj[objProp] = [item];
        }
    });
    return obj;
};
// Sort by a given field value
exports.sortBy = (arrayTobeSorted, fieldName) => {
    const sorter = (a, b) => b[fieldName] - a[fieldName];
    return arrayTobeSorted.sort(sorter);
};
//# sourceMappingURL=utils.js.map