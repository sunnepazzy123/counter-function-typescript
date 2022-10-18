
export const counter = (number: number = 0) =>{
    const state = {
        count: 0
    }
    const getCounter = () => {
      return state.count + number
    }

    const updateCounter = () => {
        state.count++ 
        return
    }

    return [getCounter, updateCounter]
 
}
