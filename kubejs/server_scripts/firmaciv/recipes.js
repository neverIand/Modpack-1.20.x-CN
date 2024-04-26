// priority: 0

const registerFirmaCivRecipes = (event) => {
    
    //#region Удаление рецептов

    event.remove({ id: '/firmaciv:quern/' })
    event.remove({ id: 'firmaciv:anvil/copper_bolt' })

    //#endregion

    //#region Sextant
    event.recipes.gtceu.assembler('tfg:firmaciv/sextant')             
        .itemInputs('#forge:plates/brass', '2x #forge:rods/brass', '#forge:glass')
        .circuit(10)
        .itemOutputs('firmaciv:sextant')
        .duration(75)
        .EUt(4)

    event.recipes.tfc.heating('firmaciv:sextant', 930)
        .resultFluid(Fluid.of('gtceu:brass', 288))
        .id(`tfg:heating/firmaciv/sextant`)
    //#endregion

    //#region Navigator Timepiece
    event.recipes.gtceu.assembler('tfg:firmaciv/nav_clock')             
        .itemInputs('2x #forge:plates/brass', '4x #forge:rods/brass', '2x #forge:glass')
        .circuit(11)
        .itemOutputs('firmaciv:nav_clock')
        .duration(75)
        .EUt(4)

    event.recipes.tfc.heating('firmaciv:nav_clock', 930)
        .resultFluid(Fluid.of('gtceu:brass', 576))
        .id(`tfg:heating/firmaciv/nav_clock`)
    //#endregion

    //#region Barometer
    event.recipes.gtceu.assembler('tfg:firmaciv/barometer')             
        .itemInputs('2x #forge:plates/brass', '2x #forge:rods/brass', '#forge:glass')
        .inputFluids(Fluid.of('minecraft:water', 1000))
        .circuit(12)
        .itemOutputs('firmaciv:barometer')
        .duration(75)
        .EUt(4)

    event.recipes.tfc.heating('firmaciv:barometer', 930)
        .resultFluid(Fluid.of('gtceu:brass', 576))
        .id(`tfg:heating/firmaciv/barometer`)
    //#endregion

    //#region Compass
    event.recipes.gtceu.canner('tfg:firmaciv/compass')             
        .itemInputs('minecraft:redstone', '#forge:plates/wrought_iron')
        .circuit(1)
        .itemOutputs('firmaciv:firmaciv_compass')
        .duration(100)
        .EUt(4)
    //#endregion

    //#region Oarlock
    event.recipes.gtceu.assembler('tfg:firmaciv/oarlock')             
        .itemInputs('#forge:double_plates/wrought_iron')
        .circuit(13)
        .itemOutputs('firmaciv:oarlock')
        .duration(75)
        .EUt(4)

    event.recipes.tfc.heating('firmaciv:oarlock', 1535)
        .resultFluid(Fluid.of('gtceu:iron', 288))
        .id(`tfg:heating/firmaciv/oarlock`)
    //#endregion

    //#region Cleat
    event.recipes.gtceu.assembler('tfg:firmaciv/cleat')             
        .itemInputs('#forge:double_plates/steel')
        .circuit(14)
        .itemOutputs('firmaciv:cleat')
        .duration(75)
        .EUt(4)

    event.recipes.tfc.heating('firmaciv:cleat', 1535)
        .resultFluid(Fluid.of('gtceu:steel', 288))
        .id(`tfg:heating/firmaciv/cleat`)
    //#endregion

    //#region Anchor
    event.recipes.gtceu.assembler('tfg:firmaciv/anchor')             
        .itemInputs('#forge:double_plates/steel')
        .circuit(10)
        .itemOutputs('firmaciv:anchor')
        .duration(75)
        .EUt(4)

    event.recipes.tfc.heating('firmaciv:anchor', 1535)
        .resultFluid(Fluid.of('gtceu:steel', 288))
        .id(`tfg:heating/firmaciv/anchor`)
    //#endregion

    //#region Cannon Barrel
    event.recipes.gtceu.assembler('tfg:firmaciv/cannon_barrel')             
        .itemInputs('#forge:double_plates/wrought_iron')
        .circuit(11)
        .itemOutputs('firmaciv:cannon_barrel')
        .duration(75)
        .EUt(4)

    event.recipes.tfc.heating('firmaciv:cannon_barrel', 1535)
        .resultFluid(Fluid.of('gtceu:iron', 288))
        .id(`tfg:heating/firmaciv/cannon_barrel`)
    //#endregion

    //#region Cannonball
    event.recipes.gtceu.assembler('tfg:firmaciv/cannonball')             
        .itemInputs('#forge:double_plates/wrought_iron')
        .circuit(12)
        .itemOutputs('firmaciv:cannonball')
        .duration(75)
        .EUt(4)

    event.recipes.tfc.heating('firmaciv:cannonball', 1535)
        .resultFluid(Fluid.of('gtceu:iron', 288))
        .id(`tfg:heating/firmaciv/cannonball`)
    //#endregion
}