
// coffee
export default interface ICoffee {
	id: string,
	name: string,
	iconUrl: string,
	milliliters: number, // total milliliters of liquid
	coffeeBeanInMilligrams: number, // coffeebeans in milligram
	intensity: "light" | "medium" | "strong" // determines number of intensity (e.g. degree of grinding and intensity of pressure) 
}