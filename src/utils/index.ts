export function generateUniqueId(): string {
	const subset = "123456789abcdefghijklmnopqrstuvwxyz";
	const length = 8;
	let id:string = "";
	for (let i = 0; i < length; i++) {
		id += subset[Math.floor(Math.random() * subset.length)];
	}
	return id;
}
