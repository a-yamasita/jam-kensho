import { schema, normalize, denormalize } from 'normalizr';

export const schemaKey = 'item';

export type Item = Readonly<{
    id: number,
    name: string,
    description: string
}>;

const ItemSchema = new schema.Entity<Item>(schemaKey);

export function normItems(Items: any) {
    console.log(Items);
    return (normalize(
        Items,
        new schema.Array(ItemSchema)
    ));
}

export function denormItems(id: number[], items: any) {
    return (denormalize(id, new schema.Array(ItemSchema), items));
}