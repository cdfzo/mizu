export const alternations = (...names: string[]) => {
  const alts: string[] = []

  for (const name of names) {
    const quant = name.match(/(.)\?/)

    if (quant) {
      const map = [name.replace(quant[0], ''), name.replace(quant[0], quant[1])]
      alts.push(...alternations(...map))
      continue
    }

    const or = name.match(/\((.+?)\)/)

    if (or) {
      const map = or[1].split('|').map((alt) => name.replace(or[0], alt))
      alts.push(...alternations(...map))
      continue
    }

    alts.push(name)
  }

  return alts
}
