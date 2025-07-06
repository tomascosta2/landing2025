export { r as renderers } from '../../../chunks/internal_BsTt5pTQ.mjs';

const prerender = false;
const POST = async ({ request }) => {
  const body = await request.text();
  console.log("BODY: ", body);
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
    email
  };
  try {
    await fetch(webhookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/?status=opted-in"
      }
    });
  } catch (error) {
    console.error("Error al enviar a Make:", error);
    return new Response(
      JSON.stringify({ message: "Error al procesar tu solicitud." }),
      { status: 500 }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
