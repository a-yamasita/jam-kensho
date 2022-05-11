export { reducer } from './reducer';
// NOTE: TypeScript の仕様上、type はトランスパイルで消えるので、
// re-export するときはこう書かないと　"export {type} was not found in {file}
// というエラーが出る（というか、出た）
import { State as tState } from './reducer';
export type State = tState;

import * as watcher from './watchers';
export const sagas = Object.values(watcher);