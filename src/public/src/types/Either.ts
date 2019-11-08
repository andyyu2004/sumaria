export interface Either<L, R> {
    /** If left, then no change; if right, then apply f to the contained value */
    map<T>(f: (x: R) => T): Either<L, T>;
    /** Similar to map, but applies on left instead of right */
    map_left<T>(f: (x: L) => T): Either<T, R>;
    bind<T>(f: (x: R) => Either<L, T>): Either<L, T>;
    match<T>(f: (l: L) => T, g: (r: R) => T): T;
    isLeft(): boolean;
    isRight(): boolean;
    unwrap(): R | void;
}

export class Right<L, R> implements Either<L, R> {

    constructor(private val: R) {}

    map<T>(f: (x: R) => T): Either<L, T> {
        return new Right<L, T>(f(this.val));
    }

    map_left<T>(f: (x: L) => T): Either<T, R> {
        return new Right(this.val);
    }

    bind<T>(f: (x: R) => Either<L, T>): Either<L, T> {
        return f(this.val);
    }

    match<T>(f: (l: L) => T, g: (r: R) => T): T {
        return g(this.val);
    }

    isLeft(): boolean {
        return false;
    }

    isRight(): boolean {
        return true;
    }

    unwrap() {
        return this.val;
    }

}

export class Left<L, R> implements Either<L, R> {

    constructor(private val: L) { }

    map<T>(f: (x: R) => T): Either<L, T> {
        return new Left(this.val);
    }

    map_left<T>(f: (x: L) => T): Either<T, R> {
        return new Left(f(this.val));
    }

    bind<T>(f: (x: R) => Either<L, T>): Either<L, T> {
        return new Left(this.val);
    }

    match<T>(f: (l: L) => T, g: (r: R) => T): T {
        return f(this.val);
    }

    isLeft(): boolean {
        return true;
    }

    isRight(): boolean {
        return false;
    }

    unwrap() {
        throw new Error("Unwrap of left either!");
    }

}