import { brazilCompetitions } from './brazil.js'
import { europeCompetitions } from './europe.js'
import { internationalCompetitions } from './international.js'
import { mondialCompetitions } from './mondial.js'
import { southAmericaCompetitions } from './southAmerica.js'

export const allCompetitions = [
  ...brazilCompetitions,
  ...southAmericaCompetitions,
  ...europeCompetitions,
  ...mondialCompetitions,
  ...internationalCompetitions,
]

export const competitions = [
  ...brazilCompetitions,
  ...southAmericaCompetitions,
  ...europeCompetitions,
  ...mondialCompetitions,
]

export const competitionList = allCompetitions
  .flatMap((group) => group.competitions)
  .filter((competition) => !competition.isLink)
