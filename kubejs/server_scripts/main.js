ServerEvents.tags('item', event => {
    event.add('forge:removed_items', 'createfood:bread_slice');
});

ServerEvents.recipes(event => {
    //example
    event.shaped(
        Item.of('minecraft:stone', 3),
        [
            'A B',
            ' CC',
            'B A'
        ],
        {
            A: 'minecraft:andesite',
            B: 'minecraft:diorite',  //arg 3: the mapping object
            C: 'kubejs:example_item'
        }
    );

    event.replaceInput(
        { input: 'createfood:bread_slice' }, // Arg 1: the filter
        'createfood:bread_slice',            // Arg 2: the item to replace
        'someassemblyrequired:bread_slice'         // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
    )
    // Remove all recipes where output has the Wool tag:
    event.remove({ output: '#forge:removed_items' })
    let item = "minecraft:mushroom_stew"

    //cutting example
    // event.recipes.farmersdelight.cutting(
    //     'minecraft:cobblestone',
    //     '#minecraft:pickaxes', // tool
    //     [ // results
    //         "minecraft:stone",
    //         ChanceResult.of("minecraft:flint", 0.75)
    //     ], 
    // )

})
