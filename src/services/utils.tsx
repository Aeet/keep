export function randomEnum<T>(anEnum: T): T[keyof T] {
  const enumValues = (Object.keys(anEnum).filter((n: any) =>
    Number.isNaN(n) ? n.trim() === '' : !Number.isNaN(n),
  ) as unknown) as (keyof T)[];

  const randomIndex = Math.floor(Math.random() * enumValues.length);
  const randomEnumValue = enumValues[randomIndex];
  return anEnum[randomEnumValue];
}
