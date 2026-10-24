import { ActionType } from "../src/game/elements/Utilities";
import { ActionError } from "../src/game/ActionError";
describe("ActionError Class", () => {
    test("(1 pts) Create Instance of ActionErro ", () => {
        const actionError = new ActionError("Spawn Error", ActionType.Spawn);
        expect(actionError).toBeInstanceOf(ActionError);
        expect(actionError).toBeInstanceOf(Error);
    });

    test("(1 pts) ActionError member fields", () => {
        const actionError = new ActionError(
            "Error in Attack Action",
            ActionType.Attack,
        );
        expect(actionError.actionType).toEqual(ActionType.Attack);
        expect(actionError.name).toEqual("Action Error");
        expect(actionError.message).toEqual("Error in Attack Action");
    });
});
