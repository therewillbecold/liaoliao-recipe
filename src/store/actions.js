export const toggleFavor = (recipeId, isFavor) => {
    console.log('action-toggleFavor')
    return {
        type: 'TOGGLE_FAVOR',
        payload: {
            recipeId,
            isFavor
        }
    }
}