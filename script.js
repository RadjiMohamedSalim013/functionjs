//Fonctions d manipulation de chaînes :

//Inverser une chaîne : écrivez une fonction qui inverse une chaîne donnée.
function inverserChaine(chaine) {
    return chaine.split('').reverse().join('');
}
// Exemple 
console.log(inverserChaine("bonjour")); 


//Compter les caractères : créez une fonction qui compte le nombre de caractères dans une chaîne.
function compterCaracteres(chaine) {
    return chaine.length;
}
// Exemple
console.log(compterCaracteres("Salim")); 

//Mettre les mots en majuscule : implémentez une fonction qui met en majuscule la première lettre de chaque mot dans une phrase.
function mettreEnMajuscule(phrase) {
    let mots = phrase.split(" "); 
    for (let i = 0; i < mots.length; i++) {
        mots[i] = mots[i][0].toUpperCase() + mots[i].slice(1); 
    }
    return mots.join(" "); 
  }
// Exemple
console.log(mettreEnMajuscule("hello world")); 


// Fonctions de tableau 

//Rechercher le maximum et le minimum : écrivez des fonctions pour trouver les valeurs maximales et minimales dans un tableau de nombres.
function trouverMaximum(tableau) {
    let max = tableau[0]; 
    for (let i = 1; i < tableau.length; i++) {
        if (tableau[i] > max) {
            max = tableau[i]; 
        }
    }
    return max;
}

function trouverMinimum(tableau) {
    let min = tableau[0]; 
    for (let i = 1; i < tableau.length; i++) {
        if (tableau[i] < min) {
            min = tableau[i]; 
        }
    }
    return min;
}
// Exemple 
let nombres = [1, 2, 3, 4, 5];
console.log(trouverMaximum(nombres)); 
console.log(trouverMinimum(nombres)); 


//Somme d'un tableau : créez une fonction qui calcule la somme de tous les éléments d'un tableau.
function sommeTableau(tableau) {
    return tableau.reduce((somme, valeur) => somme + valeur, 0);
}
// Exemple 
let Nombres = [3, 7, 2, 9, 5];
console.log(sommeTableau(nombres)); 



//Filtrer le tableau : implémentez une fonction qui filtre les éléments d'un tableau en fonction d'une condition donnée.
function filtrerTableau(tableau, condition) {
    return tableau.filter(condition);
}
// Exemple
let nombre = [3, 7, 2, 9, 5, 8, 10];
let nombresPairs = filtrerTableau(nombres, nombre => nombre % 2 === 0);
console.log(nombresPairs); 



//Fonctions mathématiques :

//Factorielle : Écrivez une fonction pour calculer la factorielle d'un nombre donné.
function factorielle(n) {
    let resultat = 1;
    for (let i = 2; i <= n; i++) {
        resultat *= i;
    }
    return resultat;
}
// Exemple 
console.log(factorielle(5)); 




// Suite de Fibonacci : Implémenter une fonction pour générer la suite de Fibonacci jusqu'à un nombre donné de termes. (recherche sur le net)
function fibonacci(n) {
    if (n <= 0) return []; // Si n <= 0, on retourne un tableau vide
    if (n === 1) return [0]; // Si n == 1, on retourne [0]
    
    let suite = [0, 1]; // On commence avec les deux premiers termes
    for (let i = 2; i < n; i++) {
        suite.push(suite[i - 1] + suite[i - 2]); // Chaque terme est la somme des deux précédents
    }
    return suite;
  }
// Exemple 
console.log(fibonacci(25))



//Vérification des nombres premiers : créez une fonction pour vérifier si un nombre est premier ou non.
function estPremier(n) {
    if (n < 2) return false; 
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false; 
    }
    return true; 
}
//Exemple
console.log(estPremier(10)); 
console.log(estPremier(17)); 