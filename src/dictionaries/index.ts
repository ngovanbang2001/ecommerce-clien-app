import "server-only";

const dictionaries = {
  en: () => import("./en.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => (dictionaries as any)[locale]();
