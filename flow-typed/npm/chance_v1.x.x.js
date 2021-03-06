// flow-typed signature: 0bb3748765061b0e4d1bf2fd30b5ab1a
// flow-typed version: 8d3cea213f/chance_v1.x.x/flow_>=v0.25.x

declare module 'chance' {
  declare type Currency = {
    code: string,
    name: string,
  };
  declare type Timezone = {
    name: string,
    abbr: string,
    offset: number,
    isdst: boolean,
    text: string,
    utc: string[]
  };
  declare class Chance {
    constructor (seed?: any): Chance;
    static (seed?: any): Chance;
    bool(options?: { likelihood: number }): bool;
    character(options?: {
      pool?: string,
      alpha?: bool,
      casing?: 'lower' | 'upper',
      symbols?: bool,
    }): string;
    floating(options?: {
      fixed?: number,
      min?: number,
      max?: number,
    }): number;
    integer(options?: {
      min?: number,
      max?: number,
    }): number;
    letter(options?: {
      casing?: 'upper' | 'lower'
    }): string;
    natural(options?: {
      min?: number,
      max?: number,
    }): number;
    string(options?: {
      length?: number,
      pool?: string,
    }): string;
    buffer(options?: { length?: number }): Buffer;
    paragraph(options?: { sentences: number }): string;
    sentence(options?: { words: number }): string;
    syllable(): string;
    word(options?: {
      syllables?: number,
      length?: number,
    }): string;
    age(options?: { type: 'child' | 'teen' | 'adult' | 'senior' }): number;
    birthday(options: {
      string: true,
      type?: 'child' | 'teen' | 'adult' | 'senior',
      american?: bool,
    }): string;
    birthday(options?: { type?: 'child' | 'teen' | 'adult' | 'senior' }): Date;
    year(options?: {
      min?: number,
      max?: number,
    }): number;
    cf(): string;
    cpf(): string;
    first(options?: {
      nationality?: 'us' | 'it',
    }): string;
    gender(): string;
    last(options?: {
      nationality: 'us' | 'it',
    }): string;
    name(options?: {
      middle?: bool,
      middle_initial?: bool,
      prefix?: bool,
      nationality?: 'us' | 'it',
      gender?: 'male' | 'female',
    }): string;
    prefix(options?: {
      full?: bool,
      gender?: 'male' | 'female',
    }): string;
    ssn(options?: {
      ssnFour?: bool,
      dashes?: bool,
    }): string;
    suffix(options?: { full: bool }): string;
    android_id(): string;
    apple_token(): string;
    bb_pin(): string;
    wp7_anid(): string;
    wp8_anid2(): string;
    avatar(options?: {
      protocol?: 'http' | 'https',
      fileExtension?: string,
      email?: string,
    }): string;
    color(options?: {
      format?: 'hex' | 'shorthex' | 'rgb' | '0x',
      grayscale?: bool,
      casing?: string,
    }): string;
    company(): string;
    domain(options?: { tld?: string }): string;
    email(options?: { domain?: string }): string;
    fbid(): string;
    google_analytics(): string;
    hashtag(): string;
    ip(): string;
    ipv6(): string;
    klout(): number;
    profession(options?: { rank?: boolean }): string;
    tld(): string;
    twitter(): string;
    url(options?: {
      domain?: string,
      path?: string,
      extensions?: string[],
    }): string;
    address(options?: { short_suffix?: bool }): string;
    altitude(options?: {
      fixed?: number,
      max?: number,
    }): number;
    areacode(): string;
    city(): string;
    coordinates(options?: { fixed?: number }): string;
    country(options?: { full?: bool }): string;
    depth(options?: {
      fixed?: number,
      min?: number,
    }): number;
    geohash(options?: { length?: number }): string;
    latitude(options?: { fixed?: number }): number;
    longitude(options?: { fixed?: number }): number;
    phone(options: {
      formatted?: bool,
      country: 'uk' | 'fr',
      mobile?: bool,
    }): string;
    phone(options?: {
      formatted?: bool,
      country?: 'us',
    }): string;
    postal(): string;
    province(options?: { full?: bool }): string;
    state(options?: {
      full?: bool,
      territories?: bool,
      armed_forces?: bool,
      us_states_and_dc?: bool,
      country?: 'us' | 'it',
    }): string;
    street(options?: {
      country?: 'us' | 'it',
      short_suffix?: bool,
      syllables?: number,
    }): string;
    zip(options?: { plusfour?: bool }): string;
    ampm(): 'am' | 'pm';
    date(options: {
      string: true,
      american?: bool,
      year?: number,
      month?: number,
      day?: number,
    }): string;
    date(options?: {
      year?: number,
      month?: number,
      day?: number,
    }): Date;
    hammertime(): number;
    hour(): number;
    millisecond(): number;
    minute(): number;
    month(options: { raw: true }): {
      name: string,
      short_name: string,
      numeric: string,
    };
    month(): string;
    second(): number;
    timestamp(): number;
    timezone(): Timezone;
    weekday(options?: {weekday_only?: boolean}): string;
    year(options?: {
      min?: number,
      max?: number,
    }): string;
    cc(options?: { type: string }): string;
    cc_type(options: { raw: true }): {
      name: string,
      short_name: string,
      prefix: string,
      length: number,
    };
    cc_type(): string;
    currency(): Currency;
    currency_pair(): Currency[];
    dollar(options?: { max?: number }): string;
    euro(options?: { max?: number }): string;
    exp(options: { raw: true }): {
      month: string,
      year: string,
    };
    exp(): string;
    exp_month(options?: { future: bool }): string;
    exp_year(): string;
    capitalize(string: string): string;
    mixin(object: Object): Chance;
    pad(number: number, width: number, padder?: string): string;
    pickone<T>(array: T[]): T;
    pickset<T>(array: T[], quantity: number): T[];
    coin(opitons?: Object): "heads" | "tails";
    // TODO set not typed yet
    set(key: string, value: any): void;
    set(data: Object): void;
    shuffle<T>(array: T[]): T[];
    d4(): number;
    d6(): number;
    d8(): number;
    d10(): number;
    d12(): number;
    d20(): number;
    d30(): number;
    d100(): number;
    guid(): string;
    hash(options?: {
      length?: number,
      casing?: 'upper',
    }): string;
    n<T>(fn: () => T, quantity: number, options?: Object): T[];
    unique<T>(fn: () => T, quantity: number, options?: Object): T[];
    normal(options?: {
      mean?: number,
      dev?: number,
    }): number;
    radio(options?: {side?: string}): string;
    tv(options?: {side?: string}): string;
    rpg(type: string): number[];
    rpg(type: string, options: { sum: true }): number;
    weighted<T>(array: T[], weights: number[]): T;
   }
  declare module.exports: Class<Chance>;
}
