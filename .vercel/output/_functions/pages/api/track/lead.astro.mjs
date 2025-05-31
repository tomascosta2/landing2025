export { r as renderers } from '../../../chunks/internal_BsTt5pTQ.mjs';

const prerender = false;
const POST = async ({ request }) => {
  const data = await request.json();
  console.log("DATA: ", data);
  const hashEmail = await hashSHA256(data.email);
  const hashPhone = await hashSHA256(data.phone);
  const response = await fetch(
    "https://graph.facebook.com/v18.0/1563000057901771/events?access_token=EAAJw118ruGYBOZCFxk5tAlN6Nghe7uOtxeAiOCs31ZCDEclB9hhDqfavgXBbqDcN9VOOB8WcdPuGAYCJzH9gih9ZBeSZBVRSeNAZCZCqvNjJSH70hrZAdnyoLdHtDHwtDYY2rZCKgrtmUtDGsRNRchpXJFCKZCMnocFM5HtmINWIyjGRRmZCXq3wAdqc2IoWclAqf5ggZDZD",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        test_event_code: "TEST92713",
        data: [
          {
            event_id: data.eventId,
            event_name: "Lead",
            event_time: Math.floor(Date.now() / 1e3),
            // tiempo actual en segundos
            action_source: "website",
            user_data: {
              em: [hashEmail],
              ph: [hashPhone],
              fbp: data.fbp,
              fbc: data.fbc
            },
            original_event_data: {
              event_name: "Lead",
              event_time: Math.floor(Date.now() / 1e3)
            }
          }
        ]
      })
    }
  );
  const result = await response.json();
  console.log(result);
  return new Response();
};
async function hashSHA256(value) {
  const encoder = new TextEncoder();
  const data = encoder.encode(value.trim().toLowerCase());
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
