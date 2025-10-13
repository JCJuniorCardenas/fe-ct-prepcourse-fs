function tienenMismaLongitud(str1, str2) {
  // La función recibe dos argumentos llamados "str1" y "str2" que son strings.
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // "SoyHenry", "HenrySoy" ---> true 
  // "hi", "there" ---> false 
  // Tu código:
  let  len1 = str1.length;
  let len2 = str2.length;

  return len1 === len2;
}

console.log(tienenMismaLongitud("soy henry","henrrysoy"));

module.exports = tienenMismaLongitud;