export const clear = (state, action) => ({
      total: null,
      next: null,
      operation: null,
    });

export const actionHandlers = {
    'clear': clear
}