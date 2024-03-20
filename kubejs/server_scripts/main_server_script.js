// priority: 1

const $MaterialFlags = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.info.MaterialFlags')
const $ToolHelper = Java.loadClass('com.gregtechceu.gtceu.api.item.tool.ToolHelper')

/**
 * Событие регистрации предмет-тэгов.
 */
ServerEvents.tags('item', event => {
    registerAE2ItemTags(event)
    registerAsticorCartsItemTags(event)
    registerChiselAndBitsItemTags(event)
    registerComputerCraftItemTags(event)
    registerCreateItemTags(event)
    registerCreateAdditionsItemTags(event)
    registerFirmaCivItemTags(event)
    registerFirmaLifeItemTags(event)
    registerFTBQuestsItemTags(event)
    registerGTCEUItemTags(event)
    registerMinecraftItemTags(event)
    registerMoreRedItemTags(event)
    registerRailWaysItemTags(event)
    registerSophisticatedBackpacksItemTags(event)
    registerTFCItemTags(event)
})

/**
 * Событие регистрации блок-тэгов.
 */
ServerEvents.tags('block', event => {
    registerAE2BlockTags(event)
    registerAsticorCartsBlockTags(event)
    registerChiselAndBitsBlockTags(event)
    registerComputerCraftBlockTags(event)
    registerCreateBlockTags(event)
    registerCreateAdditionsBlockTags(event)
    registerFirmaCivBlockTags(event)
    registerFirmaLifeBlockTags(event)
    registerFTBQuestsBlockTags(event)
    registerGTCEUBlockTags(event)
    registerMinecraftBlockTags(event)
    registerMoreRedBlockTags(event)
    registerRailWaysBlockTags(event)
    registerSophisticatedBackpacksBlockTags(event)
    registerTFCBlockTags(event)
})

/**
 * Событие регистрации жидкость-тэгов.
 */
ServerEvents.tags('fluid', event => {
    registerCreateFluidTags(event)
    registerCreateAdditionsFluidTags(event)
    registerFirmaLifeBlockTags(event)
    registerTFCFluidTags(event)
})

/**
 * Событие регистрации тегов структур.
 */
ServerEvents.tags('worldgen/placed_feature', event => {
    registerFirmaLifePlacedFeatures(event)
    registerTFCPlacedFeatures(event)
})

/**
 * Событие регистрации датапаков (Здесь можно регистрировать теги, данные, рецепты, общий метод короче).
 * Срабатывает до инициализации рецептов, но после тегов.
 */
ServerEvents.highPriorityData(event => {
    registerComputerCraftData(event)
})

/**
 * Событие регистрации датапаков для TFC (Здесь можно регистрировать теги, данные, рецепты, общий метод короче).
 * Срабатывает до инициализации рецептов, но после тегов.
 */
TFCEvents.data(event => {
    registerTFCDataForGTCEU(event)
    registerTFCDataForTFC(event)
    registerTFCDataForTreeTap(event)
    registerTFCDataForWaterFlasks(event)
})

/**
 * Событие регистрации лут-тейблов.
 * Срабатывает до инициализации рецептов, но после датапаков и тегов.
 */
LootJS.modifiers((event) => {
    registerGTCEULoots(event)
});

/**
 * Событие регистрации рудных жил.
 * Не представляю когда срабатывает, но явно после тегов и датапаков.
 */
GTCEuServerEvents.oreVeins(event => {
    event.removeAll()
})

/**
 * Событие регистрации рецептов.
 * Срабатывает после инициализации датапаков и тегов.
 */
ServerEvents.recipes(event => {
    registerAE2Recipes(event)
    registerAsticorCartsRecipes(event)
    registerAE2WTLibRecipes(event)
    registerChiselAndBitsRecipes(event)
    registerComputerCraftRecipes(event)
    registerCreateRecipes(event)
    registerCreateAdditionsRecipes(event)
    registerExposureRecipes(event)
    registerFirmaCivRecipes(event)
    registerFirmaLifeRecipes(event)
    registerFTBQuestsRecipes(event)
    registerGTCEURecipes(event)
    registerHandGliderRecipes(event)
    registerMinecraftRecipes(event)
    registerMoreRedRecipes(event)
    registerRailWaysRecipes(event)
    registerSophisticatedBackpacksRecipes(event)
    registerTFCRecipes(event)
    registerToolBeltRecipes(event)
    registerTreeTapRecipes(event)
    registerWaterFlasksRecipes(event)
})