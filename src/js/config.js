requirejs.config({
    deps: ['main'],
    paths: {
        // vendor
        THREE:            'vendor/three',

        // core
        Game:             'classes/core/Game',
        Renderer:         'classes/core/Renderer',

        // creatures
        CreatureFactory:  'classes/creatures/CreatureFactory',
        Player:           'classes/creatures/Player',

        // items
        Item:             'classes/items/Item',
        ItemFactory:      'classes/items/ItemFactory',

        // upgrades
        Upgrade:          'classes/upgrades/Upgrade',
        UpgradeFactory:   'classes/upgrades/UpgradeFactory'
    },
    shim: {
        THREE: {
            exports: 'THREE'
        }
    }
});

