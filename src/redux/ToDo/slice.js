import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { initialState } from './initialState';

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addToDo: (state, { payload }) => {
      state.push({
        id: nanoid(),
        title: payload.title,
        text: payload.text,
        isCompleted: false,
      });
    },

    deleteToDo: (state, { payload }) => {
      const index = state.findIndex(el => el.id === payload);
      state.splice(index, 1);
    },

    completeTodo: (state, { payload: todoId }) => {
      return state.map(todo => {
        if (todo.id === todoId) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
    },

    editTodo: (state, { payload }) => {
      const indexToEdit = state.findIndex(todo => todo.id === payload.id);
      if (indexToEdit !== -1) {
        const updatedTodo = {
          ...state[indexToEdit],
          ...payload,
        };

        state[indexToEdit] = updatedTodo;
      }
    },
  },
});

export const { addToDo, deleteToDo, completeTodo, editTodo, filterTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
