import produce from 'immer';

import * as actions from './actions';
import { schemaKey, Item } from './models';
import { merge } from 'lodash';

export type State = Readonly<{
    entities: []
}>;

const initialState: State = {
    entities: []
};

export const reducer = produce((draft, action) => {
    console.log(action);
    switch (action.type) {
        case actions.RETRIEVE:
            draft.entities = action.payload.items.entities.item;
    }
}, initialState);