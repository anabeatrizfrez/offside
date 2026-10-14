import { apiFetch } from './espn.js'

const minute = 60 * 1000
const hour = 60 * minute

export const getLeague = (slug) =>
	apiFetch(`/${slug}`, 'core', hour)

export const getCalendar = (slug, year) =>
	apiFetch(`/${slug}/seasons/${year}/types/1/calendar/ondays`, 'core')

export const getNews = (slug) =>
	apiFetch(`/${slug}/news`, 'site')

export const getScoreboard = (slug, day) =>
	apiFetch(`/${slug}/scoreboard${day ? `?dates=${day}` : ''}`, 'site', minute)

export const getMonthScoreboard = (slug, month) =>
	apiFetch(`/${slug}/scoreboard?dates=${month}&limit=500`, 'site', minute)

export const getStandings = (slug) =>
	apiFetch(`/${slug}/standings`, 'web', hour)