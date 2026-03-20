import { rootReducer } from './store';
import { initialState as constructorInitialState } from './slices/constructor/constructorSlice';
import { initialState as feedInitialState } from './slices/feed/feedSlice';
import { initialState as ingredientsInitialState } from './slices/ingredients/ingredientsSlice';
import { initialState as orderInitialState } from './slices/orders/ordersSlice';
import { initialState as userInitialState } from './slices/user/userSlice';

describe('rootReducer', () => {
  it('должен инициализировать начальное состояние всех слайсов', () => {
    const state = rootReducer(undefined, { type: 'UNKNOWN_ACTION' });

    expect(state).toEqual({
      burgerConstructor: constructorInitialState,
      feed: feedInitialState,
      ingredients: ingredientsInitialState,
      order: orderInitialState,
      user: userInitialState
    });
  });
});
