// priority: 0

const registerHotOrNotItemTags = (event) => {
    
    // Удаление тегов у отключенных предметов
    global.HOT_OR_NOT_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
    })
}

const registerHotOrNotBlockTags = (event) => {
    
    // Удаление тегов у отключенных предметов
    global.HOT_OR_NOT_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })
}