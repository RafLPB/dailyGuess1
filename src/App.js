import logo from './logo.svg';
import './App.css';
import {useState} from "react";
//import './ConnexionBDD';

function App() {

    const fdp = {
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

    // Fonction pour inverser le dictionnaire
    function inverserDictionnaire(dico) {
        let inversed = {};
        for (let id in dico) {
            inversed[dico[id]] = Number(id);
        }
        return inversed;
    }

// Créer un dictionnaire inversé
    const dictionnairePokemon = inverserDictionnaire(fdp);

    const [pokemons, setPok] = useState([
        { id: 1, nom: "Pikachu", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" },
        { id: 2, nom: "Tortipousse", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" },
        { id: 3, nom: "Gragas", image: "Gragas_Rendu.png" }  // Use a valid image URL or placeholder
    ]);

    const [nbEssais,setNbEssais] = useState(0);

    const [couleur,setCoul] = useState("Red");

    const getStorageTrouve = () => {
        const trouver = localStorage.getItem("trouverData");
        const today = new Date().toISOString().split("T")[0];

        // Ajoutez le parsing JSON ici
        const parsedTrouver = trouver ? JSON.parse(trouver) : null;

        if (parsedTrouver && parsedTrouver.date === today) {
            return parsedTrouver.value;
        } else {
            const newValue = false;
            localStorage.setItem("trouverData", JSON.stringify({ date: today, value: newValue }));
            return newValue;
        }
    };

    const [trouve, setTrouve] = useState(getStorageTrouve);

    const [pokemouille,setPokemouille] = useState(1);

    const Pokemon = ({pokemon}) => {
        return (<div>
            <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+pokemon+".png"}
                 alt={"pokemon :"+pokemon}
                 height="400px"
                 style={
                { filter: trouve ? "none" : "brightness(0)" }}/>
        </div>);
    };

    const find = (event) => {
        if (event.key === "Enter") {
            const val = event.target.value;
            const rep = dictionnairePokemon[val.toLowerCase()];

            if (rep === reponse) {
                setTrouve(true);
                // Assurez-vous de stocker un objet JSON valide
                const today = new Date().toISOString().split("T")[0];
                localStorage.setItem("trouverData", JSON.stringify({
                    date: today,
                    value: true
                }));
            }

            setNbEssais(nbEssais + 1);
        }
    }

    const Win = () => {
        if (trouve) {
            return (<>
                <h1>GG</h1>
            <p>Reviens demain</p>
            </>);
        }
    }

    const getStoredDate = () => {
        const storedData = JSON.parse(localStorage.getItem("randomData"));

        const today = new Date().toISOString().split("T")[0]; // Format YYYY-MM-DD

        if (storedData && storedData.date === today) {
            return storedData.value; // Retourne l'ancienne valeur si c'est le même jour
        } else {
            const newValue = Math.floor(Math.random() * 60);
            localStorage.setItem("randomData", JSON.stringify({ date: today, value: newValue }));
            return newValue;
        }
    };

    const [reponse, setReponse] = useState(getStoredDate());


  return (
    <div className="App">
      <header>
      </header>
        <main className="App-main">
            <h2>Quel est ce pokémouille !!!</h2>
            <Pokemon pokemon={reponse} />
            <div id='bar-button'>
                <Win/>
                <p>Tentative :{nbEssais}</p>
                <input type='text' onKeyDown={find} />
            </div>
        </main>
        <footer>

        </footer>
    </div>
  );
}

export default App;
