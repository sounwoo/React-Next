import { FormEvent } from "react";

// prettier-ignore
// export const wrapAsync =
//     (asyncFunc: (event: ChangeEvent<HTMLInputElement>) => Promise<void>) =>
//     (event: ChangeEvent<HTMLInputElement>) => {
//         void asyncFunc(event);
//     };
// prettier-ignore
export const wrapAsync = <E>(asyncFunc: (event: E) => Promise<void>) => (event: E) => {
        void asyncFunc(event);
    };

export const wrapFormAsync =
    (asyncFunc: () => Promise<void>) => (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        void asyncFunc();
    };
