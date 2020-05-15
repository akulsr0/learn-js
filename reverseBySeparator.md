function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}


console.log(reverseBySeparator('Welcome to learn js', "")) //sj nrael ot emocleW
console.log(reverseBySeparator('Welcome to learn js', " ")) //emocleW ot nrael sj


