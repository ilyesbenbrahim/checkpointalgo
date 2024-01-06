function analyserPhrase(phrase) {
    let nbMots = 0;
    let nbVoyelles = 0;
    let caractere;
  
    for (let i = 0; i < phrase.length; i++) {
      caractere = phrase.charAt(i);
  
      // Vérification si le caractère est une voyelle
      if (caractere === 'a' || caractere === 'e' || caractere === 'i' || caractere === 'o' || caractere === 'u' || caractere === 'y') {
        nbVoyelles++;
      }
      // Vérification si le caractère est un espace 
      if (caractere === ' ' ) {
        nbMots++;
      }
    }
  
    // Affichage des résultats
    console.log('Nombre de mots dans la phrase :', nbMots);
    console.log('Nombre de voyelles dans la phrase :', nbVoyelles);
  }
  

  analyserPhrase("ceci est un test.");