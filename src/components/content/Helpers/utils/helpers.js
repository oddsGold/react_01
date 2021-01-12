export function updateObjInArray(items, itemId, objPropName, newObjProps) {
    return items.map((user, i) => {
        if (user[objPropName] === itemId) {
            return {
                ...user,
                ...newObjProps
            }
        }
        return user;
    })
}