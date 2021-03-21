const INITIAL_STATE = {
    notificationsQueue: []
}

export default (state = INITIAL_STATE, action) => {
    let newStack;

    switch (action.type) {
        case "PUSH_NOTIFICATION":
            newStack = state.notificationsQueue;
            newStack.push({
                type: action.payload.type,
                title: action.payload.title,
                text: action.payload.text
            });
            return {
                ...state,
                notificationsQueue: newStack
            }
        case "POP_NOTIFICATION":
            newStack = state.notificationsQueue;
            newStack.shift();
            return {
                ...state,
                notificationsQueue: newStack
            }
        default:
            return state;
    }
}