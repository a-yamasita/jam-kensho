import { createSelector } from 'reselect';
import { StoreState } from '../';
import { denormItems } from './models';

export const getItems = createSelector(
    ({ Item }: StoreState) => Item.entities,
    (entities) => {
        return (entities ? denormItems([1, 2, 3], entities) : null);
    }
);