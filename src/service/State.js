function useState(){
    const state = {}

    const setState = (key = null, value = null) => {

        return state[key] = value
    }

    return {
        state,
        setState,
       
    }

}

export  default  useState

