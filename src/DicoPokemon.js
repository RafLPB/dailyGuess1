const dictionnairePokemon = {
    1: "bulbizarre", 2: "herbizarre", 3: "florizarre", 4: "salameche", 5: "reptincel", 6: "dracaufeu",
    7: "carapuce", 8: "carabaffe", 9: "tortank", 10: "chenipan", 11: "chrysacier", 12: "papilusion",
    13: "aspicot", 14: "coconfort", 15: "dardargnan", 16: "roucool", 17: "roucoups", 18: "roucarnage",
    19: "rattata", 20: "rattatac", 21: "piafabec", 22: "rapasdepic", 23: "abo", 24: "arbok",
    25: "pikachu", 26: "raichu", 27: "sabelette", 28: "sablaireau", 29: "nidoran♀", 30: "nidorina",
    31: "nidoqueen", 32: "nidoran♂", 33: "nidorino", 34: "nidoking", 35: "melofee", 36: "melodelfe",
    37: "goupix", 38: "feunard", 39: "rondoudou", 40: "grodoudou", 41: "nosferapti", 42: "nosferalto",
    43: "mystherbe", 44: "ortide", 45: "rafflesia", 46: "paras", 47: "parasect", 48: "mimitoss",
    49: "aeromite", 50: "taupiqueur", 51: "triopikeur", 52: "miaouss", 53: "persian", 54: "psykokwak",
    55: "akwakwak", 56: "ferosinge", 57: "colossinge", 58: "caninos", 59: "arcanin", 60: "ptitard",
};

const DictionnairePokemon = () => {
    return (
        <div>
            <h2>Dictionnaire des Pokémon</h2>
            <pre>{JSON.stringify(dictionnairePokemon, null, 2)}</pre>
        </div>
    );
};

export default DictionnairePokemon;
