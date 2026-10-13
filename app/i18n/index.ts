import { en } from "./en";
import { nb } from "./nb";
import type { Lang } from "./config";

export const dictionaries = { en, nb };

export function getDict(lang: Lang) {
  return dictionaries[lang];
}

export type { Accent, Dict } from "./en";
