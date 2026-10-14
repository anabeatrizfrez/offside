import { enumeratedPhases } from "./enumeratedPhases.js";
import { fixedPhases } from "./fixedPhases.js";
import { roundPhases } from "./roundPhases.js";

export const phases = {
  ...roundPhases,
  ...fixedPhases,

  ...Object.fromEntries(
    Object.entries(enumeratedPhases).flatMap(([key, value]) => [
      [`${key} Round`, value],
      [`${key} Stage`, value],
      [`${key} Phase`, value],
      [`${key} Fase`, value]
    ])
  )
};