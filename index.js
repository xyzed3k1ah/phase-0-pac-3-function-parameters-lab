function introduction(name) {
  return (`Hi, my name is ${name}.`);
}


console.log(introduction ("Zed"))

function introductionWithLanguage(name, language) {
  return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
  return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}