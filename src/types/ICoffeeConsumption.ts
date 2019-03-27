import ICoffee from "./ICoffee";

// defines coffee consumption
// consists of a number of coffees and a coffee type
export default interface ICoffeeConsumption {
	coffee: ICoffee,
	amount: number
}