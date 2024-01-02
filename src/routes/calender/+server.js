import { json } from '@sveltejs/kit';

export function GET() {
	const test = 'this is a test'

	
	return json(test);
}