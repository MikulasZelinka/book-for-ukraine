import { Writable, writable } from "svelte/store";
import { Autoplay } from "./types/autoplay.enum";

// TODO: remove later (will be replaced by selecting two languages)
export const languageOrder: Writable<Array<string>> = writable(["cs", "ua"]);

export const autoplay: Writable<Autoplay> = writable(Autoplay.Off);
