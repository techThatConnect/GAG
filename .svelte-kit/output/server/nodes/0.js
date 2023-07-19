import * as universal from '../entries/pages/_layout.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.f46af020.js","_app/immutable/chunks/scheduler.a7e64d23.js","_app/immutable/chunks/index.8e100cb3.js"];
export const stylesheets = ["_app/immutable/assets/0.76a8c144.css"];
export const fonts = [];
