export interface Work {
    id: number,
    name: string,
    shortDesc: string,
    desc: string,
    img: string[],
    techs: string[],
    platform: string,
    year: number,
    links: { short: string, long: string }[],
    gitHub?: string,
    isPersonal: boolean
}