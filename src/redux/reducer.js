import { ADD_CONTACT, DELETE_CONTACT, FILTER } from './types'


const initialStore = {
    contacts: [],
    filter:'',
}

const reducer = (store = initialStore, { type, payload }) => {
    switch (type) {
        case ADD_CONTACT:
            return { ...store, contacts: [...store.contacts, payload] }
        case DELETE_CONTACT:
            const newContact = store.contacts.filter(({ id }) => id !== payload);
            return { ...store, contacts: newContact }
        case FILTER:
            return { ...store, filter: payload}

            
        default:
            return store;
    }
}
export default reducer;