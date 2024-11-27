export const alternations = (...names: string[]): string[] => {
  const alts: string[] = []

  for (const name of names) {
    const or = /\((?<node>.+?)\)/.exec(name)

    if (or) {
      const map = or[1].split('|').map((alt) => name.replace(or[0], alt))
      alts.push(...alternations(...map))
      continue
    }

    const quant = /(?<char>.)\?/.exec(name)

    if (quant) {
      const map = [name.replace(quant[0], ''), name.replace(quant[0], quant[1])]
      alts.push(...alternations(...map))
      continue
    }

    alts.push(name)
  }

  return alts
}
