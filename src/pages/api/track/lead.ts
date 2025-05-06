export const prerender = false;
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({request}) => {
	const data = await request.json();
	console.log("DATA: ", data);

	const hashEmail = await hashSHA256(data.email);
	const hashPhone = await hashSHA256(data.phone);

	const response = await fetch(
		"https://graph.facebook.com/v18.0/1563000057901771/events?access_token=" + import.meta.env.API_ACCESS_TOKEN,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				test_event_code: 'TEST92713',
				data: [
					{
						event_id: data.eventId,
						event_name: "Lead",
						event_time: Math.floor(Date.now() / 1000), // tiempo actual en segundos
						action_source: "website",
						user_data: {
							em: [hashEmail],
							ph: [hashPhone],
							fbp: data.fbp,
							fbc: data.fbc,
						},
						original_event_data: {
							event_name: "Lead",
							event_time: Math.floor(Date.now() / 1000),
						},
					},
				],
			}),
		},
	);

	const result = await response.json();
	console.log(result);

	return new Response();
}

async function hashSHA256(value: String) {
	const encoder = new TextEncoder();
	const data = encoder.encode(value.trim().toLowerCase()); // sin espacios, en minúsculas
	const hashBuffer = await crypto.subtle.digest("SHA-256", data);
	const hashArray = Array.from(new Uint8Array(hashBuffer));
	return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}