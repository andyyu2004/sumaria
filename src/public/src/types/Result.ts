export type Result<T, E> = Err<E> | Ok<T>;
export type Err<E> = { tag: "err", err: E };
export type Ok<T> = { tag: "ok", value: T };

/**
 * Monadic error handling, inspired by Haskell's Either and Rust's Result types
 * To the people in 324, I'm pretty sure we will learn this stuff soon, so you can start early! :)
*/

export const Result = {
    map<T, E, U>(f: (x: T) => U, x: Result<T, E>): Result<U, E> {
        switch (x.tag) {
            case "ok": return {
                tag: "ok",
                value: f(x.value),
            };
            case "err": return x;
        }
    },

    match<T, E, U>(x: Result<T, E>, f: (x: T) => U, g: (e: E) => U): U {
        switch (x.tag) {
            case "ok": return f(x.value);
            case "err": return g(x.err);
        };
    },

    bind<T, E, U>(x: Result<T, E>, f: (x: T) => Result<U, E>): Result<U, E> {
        switch (x.tag) {
            case "ok": return f(x.value);
            case "err": return x;
        }
    },

    isErr<T, E>(x: Result<T, E>): boolean {
        switch (x.tag) {
            case "ok": return false;
            case "err": return true;
        }
    },

    isOk<T, E>(x: Result<T, E>): boolean {
        return !this.isErr(x);
    }

};

/*
    Result.match takes two functions and a result as parameters
    If it is an "ok" calls first function, if "err" calls second function;
*/

/*
    const ok: Result<number, string> = {
        tag: "ok",
        value: 10,
    };

    console.log(Result.map(x => 2 * x, ok));
    If the result has tag "ok", then apply the function to the value 
    output : { tag: "ok", value: 20 };

*/

/*
    const err: Result<number, string> = {
        tag: "err",
        err: "Something went wrong",
    };

    console.log(Result.map((x: number) => 2 * x, err));
    
    If the result has tag error, a map will just return the error again
    output : { tag: "err", err: "Something went wrong" };
*/
