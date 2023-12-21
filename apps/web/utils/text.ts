const polishToEnglishMap: Record<string, string> = {
  ą: "a",
  ć: "c",
  ę: "e",
  ł: "l",
  ń: "n",
  ó: "o",
  ś: "s",
  ż: "z",
  ź: "z",
};

export const parsePolishCharacters = (value: string) => {
  return value
    .split("")
    .map((char) => {
      const replacement = polishToEnglishMap[char.toLowerCase()];

      if (!replacement) {
        return char;
      }

      const isLowerCase = char.toLowerCase() === char;
      return isLowerCase ? replacement : replacement.toUpperCase();
    })
    .join("");
};

export const textToSnakeCase = (value: string) => {
  return value.split(" ").join("_").toLowerCase();
};
