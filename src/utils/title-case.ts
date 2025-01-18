export function titleCase(str: string) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toLocaleUpperCase() + word.slice(1).toLocaleLowerCase())
    .join(" ");
}
