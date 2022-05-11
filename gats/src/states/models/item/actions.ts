import { normItems } from './models';

/*
export const _TEMP: string = '';
export const _temp = (): Readonly<{
    type: string,
    payload: {}
}> => ({
    type: _TEMP,
    payload: {}
});
*/

export const GET: string = 'GET';
export const get = (): Readonly<{
    type: string,
}> => ({
    type: GET,
});

export const RETRIEVE: string = 'RETRIEVE';
export const retrieve = (items: Array<object>): Readonly<{
    type: string,
    payload: {
        items: any
    }
}> => ({
    type: RETRIEVE,
    payload: {
        items: normItems(items)
    }
});

export const DUMMY: string = 'DUMMY';
export const dummy = (): Readonly<{
    type: string,
    payload: {
        description: string
    }
}> => ({
    type: DUMMY,
    payload: {
        description: "DUMMY ACTION"
    }
});