requirejs.config({
    deps: ['main'],
    paths: {
        // core
        Game:             'classes/core/Game',
        Renderer:         'classes/core/Renderer',
        Input:            'classes/core/Input',
        TestWorld:        'classes/core/TestWorld',

        // creatures
        CreatureFactory:  'classes/creatures/CreatureFactory',
        Player:           'classes/creatures/Player',

        // entities
        Projectile:       'classes/entities/Projectile',

        // items
        Item:             'classes/items/Item',
        ItemFactory:      'classes/items/ItemFactory',

        // upgrades
        Upgrade:          'classes/upgrades/Upgrade',
        UpgradeFactory:   'classes/upgrades/UpgradeFactory'
    }
});

