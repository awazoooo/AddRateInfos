interface ConstantInfo {
  readonly title: string;
  readonly diff:  number;
  readonly constant: number;
}

export type ConstantTable = readonly ConstantInfo[];

//export type MusicDifficulty = 0 | 1 | 2 | 3 | 4;

export interface FoundConstantInfo {
  readonly constant: number;
  readonly isDefault: boolean;
}

export interface DefaultConstantInfo {
  readonly defaultConstant: number;
  readonly validFunc: (n: number) => boolean;
}

export interface RateTargetMusicInfo {
  bests: number[];
  recents: number[];
  news: number[];
}

export interface RateInfo {
  readonly bestSum: number;
  readonly nBest: number;
  readonly recentSum: number;
  readonly nRecent: number;
  readonly newSum: number;
  readonly nNew: number;
  readonly reachableSum: number;
  readonly allBestAve: number;
  readonly allBestMin: number;
}

export interface MusicRateInfo {
  readonly rate: number;
  readonly diff: number;
}

export interface SortedElements {
  readonly dom: HTMLElement;
  readonly value: number;
}
