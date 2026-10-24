import { Ability } from "../src/game/elements/Ability";
import {ActionType } from "../src/game/elements/Utilities"
describe("Ability Class", () => {
    test("(1 pts) Create Instance & getters", () => {
        const ability = new Ability(ActionType.Spawn, false);
        expect(ability).toBeInstanceOf(Ability);
        expect(ability.getDescription()).toEqual(ActionType.Spawn);
        expect(ability.isPermanent()).toEqual(false);
        expect(ability.isExpired()).toEqual(false);
    });

    const abilitySpawn = new Ability(ActionType.Spawn, false);

    test("(1 pts) setExpired", () => {
        expect(abilitySpawn).toBeInstanceOf(Ability);
        expect(abilitySpawn.isExpired()).toEqual(false);
        abilitySpawn.setExpired(true);
        expect(abilitySpawn.isExpired()).toEqual(true);
    });

    test("(1 pts) clone", () => {
        const abilityRenew = new Ability(ActionType.Renew, false);
        abilityRenew.setExpired(true);
        const copyRenew = abilityRenew.clone();
        expect(abilityRenew).not.toBe(copyRenew);
        // clone should copy the expired and permananet field of the cloned object
        expect(copyRenew.isExpired()).toEqual(true);
        expect(copyRenew.isPermanent()).toEqual(false);
        expect(copyRenew.getDescription()).toEqual(ActionType.Renew);

        const abilityRecruit = new Ability(ActionType.Recruit, true);
        const copyRecruit = abilityRecruit.clone();
        expect(abilityRecruit).not.toBe(copyRecruit);
        // clone should copy the expired and permananet field of the cloned object
        expect(copyRecruit.isExpired()).toEqual(false);
        expect(copyRecruit.isPermanent()).toEqual(true);
        expect(copyRecruit.getDescription()).toEqual(ActionType.Recruit);
    });

    test("(1 pts) equals", () => {
        const ability1 = new Ability(ActionType.Renew, false);
        const ability2 = new Ability(ActionType.Renew, true);
        ability2.setExpired(true);
        const ability3 = new Ability(ActionType.Swap, true);

        expect(ability1.equals(ability2)).toBe(true);
        expect(ability2.equals(ability3)).toBe(false);
    });

    test("(1 pts) toString", () => {
        const abilityRenew = new Ability(ActionType.Renew, false);
        abilityRenew.setExpired(true);
        const abilitySwap = new Ability(ActionType.Swap, true);
        expect(abilityRenew.toString()).toEqual("Renew:expired");
        expect(abilitySwap.toString()).toEqual("Swap:available");
    });
});
