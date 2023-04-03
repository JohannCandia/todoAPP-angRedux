import { createAction, props } from "@ngrx/store";

export const crearTodo = createAction(
  "[TODO] crear Todo",
  props<{ texto: string }>()
);


export const toggle = createAction(
  "[TODO] Toggle Todo",
  props<{ id: number }>()
);

