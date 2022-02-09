const LOAD_IMAGE = 'images/Load'

export const loadImages = (images) => {
    return { type: LOAD_IMAGE, images }
}

export const getImage = () => async dispatch => {
    const response = await fetch(`/api/images`)
    console.log(response)
    if (response.ok) {
        const images = await response.json()
        console.log(images)
        dispatch(loadImages(images))
    }
    return response;
}


    const initialState = {
        list: {},
        // imageObj: {},
    };

    const imageReducer = (state = initialState, action) => {
        let newState
        switch (action.type) {
            case LOAD_IMAGE:
                newState = {...state}
                const list = {}
                action.images.forEach(image => list[image.id] = image)
                newState.list = list;
                return newState
                default:
                    return state;
            }
        }

        export default imageReducer
