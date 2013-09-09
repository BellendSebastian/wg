define([
    'Upgrade'
], function (
    Upgrade
) {
    'use strict';

    function UpgradeFactory() {}

    UpgradeFactory.prototype.spawnTestUpgrade = function () {
        var upgrade = new Upgrade('test upgrade')
            .setModifier(0.2);
        return upgrade;
    };

    UpgradeFactory.prototype.spawnTestMultiplier = function () {
        var upgrade = new Upgrade('test multiplier')
            .setMultiplier(2);
        return upgrade;
    };

    return UpgradeFactory;
});
