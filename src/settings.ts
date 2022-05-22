import { Writable, writable } from "svelte/store";
import { Autoplay } from "./types/autoplay.enum";
import { Script } from "./types/script.enum";

// TODO: remove later (will be replaced by selecting two languages)
export const languageOrder: Writable<Array<string>> = writable(["cs", "uk"]);

export const autoplay: Writable<Autoplay> = writable(Autoplay.Off);

export const currentScript: Writable<Script> = writable(Script.default);
