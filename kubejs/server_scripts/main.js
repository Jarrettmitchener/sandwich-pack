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
            C: 'minecraft:apple'
        }
    );

    // Remove all recipes where output has the Wool tag:
    event.remove({ output: '#forge:removed_items' })

    //cutting example
    event.recipes.farmersdelight.cutting(
        'minecraft:cobblestone',
        '#minecraft:pickaxes', // tool
        [ // results
            "minecraft:stone",
            ChanceResult.of("minecraft:flint", 0.75)
        ],
    )

})
