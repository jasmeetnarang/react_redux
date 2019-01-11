// Namespace Actions aka Action Types

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const CLEAR = "CLEAR";
//export const INCBY5 = "INCBY5";



/*Action creactor*/

export const CLEARFUNC = () => {
    return {
        type: CLEAR
    }
}

//export const INCBY5 = () => {
//    return {
//        type: INCBY5
//    }

//}

export const INCBY5 = (value = 1) => {
    return {
        type: INCREMENT,
        value

    }

}