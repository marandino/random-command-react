import {
  // pronouns,
  verbs,
  nouns,
  nouns2,
  // articles,
  prepositions,
  descriptor,
} from "./wordbank";

export default function generateCommand() {
  // var pronounIndex = Math.floor(Math.random() * pronouns.length);
  let verbIndex = Math.floor(Math.random() * verbs.length);
  let firstNounIndex = Math.floor(Math.random() * nouns.length);
  let secondNounIndex = Math.floor(Math.random() * nouns2.length);
  // var articleIndex = Math.floor(Math.random() * articles.length);
  let prepositionsIndex = Math.floor(Math.random() * prepositions.length);
  let descriptorIndex = Math.floor(Math.random() * descriptor.length);
  return (
    verbs[verbIndex] +
    " " +
    nouns[firstNounIndex] +
    " " +
    prepositions[prepositionsIndex] +
    " " +
    nouns2[secondNounIndex] +
    " " +
    descriptor[descriptorIndex]
  );
}
