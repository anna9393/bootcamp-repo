export class Pokemon {
    name: string;
    type: string;
    effectiveAgainst: string;

    constructor(name: string, type: string, effectiveAgainst: string) {
        this.name = name;
        this.type = type;
        this.effectiveAgainst = effectiveAgainst;
    }

    isEffectiveAgainst(pokemon: Pokemon): boolean {
        return this.effectiveAgainst === pokemon.type;
    }

    chooseEffective(pokeBox: Pokemon[], pokemon: Pokemon): void {
        for (let i = 0; i < pokeBox.length; i++) {
            if (pokeBox[i].effectiveAgainst === pokemon.type) {
                console.log('I choose you!, ' + pokeBox[i].name);
            }
        }

    }
}
