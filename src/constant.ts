export const firstLink = 'http://api.scraping-bot.io/scrape/data-scraper'
export const dataRaw = (name: string = null) => ({
	account: name,
	scraper: "instagramProfile"
})
export const secondLink = (responseId) => `${firstLink}-response?responseId=${responseId}&scraper=${dataRaw().scraper}`
export const firstDelay = 10000;
export const secondDelay = 10000;
