// priority: 0

const registerMinecraftItemTags = (event) => {
    global.MINECRAFT_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
    })

    global.MINECRAFT_HIDED_ITEMS.forEach(item => {
        event.add('c:hidden_from_recipe_viewers', item)
    })

    // Теперь обсидиан сторадж блок
    event.add('forge:storage_blocks/obsidian', 'minecraft:obsidian')

    //#region  Бамбуковые доски в один тег
    event.add('tfg:bamboo_planks', 'minecraft:bamboo_planks')
    event.add('tfg:bamboo_planks', 'minecraft:bamboo_mosaic')
    //#endregion

    //#region  Бамбуковые ступени в один тег
    event.add('tfg:bamboo_stairs', 'minecraft:bamboo_stairs')
    event.add('tfg:bamboo_stairs', 'minecraft:bamboo_mosaic_stairs')
    //#endregion

    //#region  Бамбуковые полублоки в один тег
    event.add('tfg:bamboo_slabs', 'minecraft:bamboo_slab')
    event.add('tfg:bamboo_slabs', 'minecraft:bamboo_mosaic_slab')
    //#endregion

    //#region Материалы для тримминга
    global.MINECRAFT_TRIM_MATERIALS.forEach(el => {
        event.add('minecraft:trim_materials', el)
    })
    //#endregion
}

const registerMinecraftBlockTags = (event) => {
    global.MINECRAFT_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })

    // Теперь обсидиан сторадж блок
    event.add('forge:storage_blocks/obsidian', 'minecraft:obsidian')
}