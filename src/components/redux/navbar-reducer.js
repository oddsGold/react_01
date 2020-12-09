const GET_MENU = 'GET_MENU';

let initialState = {
    menuItems: [
        {
            id: 1,
            name: 'Profile',
            link: '/profile'
        },
        {
            id: 2,
            name: 'Messages',
            link: '/messages'
        },
        {
            id: 3,
            name: 'Users',
            link: '/users'
        },
    ]
}

const navbarReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_MENU:
            return {
                ...state
            }
        default:
            return state;
    }
}

export const getMenu = () => {
    return {
        type: GET_MENU
    }
}

export default navbarReducer;