const mommifyString = (input: string): string => {
  return input
    .split("")
    .map((it) => (it == "a" ? "mommy" : it))
    .join("");
};
export const mommify = (input: string): string => {
  const vowelCount = input.split("").filter((char) => char === "a").length;
  const needToMomify = vowelCount / input.length > 0.3;
  return needToMomify ? mommifyString(input) : input;
};
