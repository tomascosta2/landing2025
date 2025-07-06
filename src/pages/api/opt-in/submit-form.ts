export const prerender = false;

import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
	const body = await request.text();

	console.log("BODY: ", body)

	const params = new URLSearchParams(body);

	const nombre = params.get("nombre");
	const email = params.get("email");

	if (!nombre || !email) {
		return new Response(
			JSON.stringify({ message: "Faltan campos obligatorios." }),
			{ status: 400 }
		);
	}

	const webhookURL = "https://hook.us2.make.com/w1w9jlcjx2g2pycruja2emiqpbomc2ui";

	const payload = {
		nombre,
		email,
	};

	try {
		await fetch(webhookURL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload),
		});

		return new Response(null, {
			status: 302,
			headers: {
				Location: "/?status=opted-in",
			},
		});
	} catch (error) {
		console.error("Error al enviar a Make:", error);
		return new Response(
			JSON.stringify({ message: "Error al procesar tu solicitud." }),
			{ status: 500 }
		);
	}
};
