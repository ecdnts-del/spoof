export default {
  async fetch(request) {
    if (request.method === 'POST') {
      const data = await request.json();
      console.log("Location received:", data);
      return new Response(JSON.stringify({ ok: true }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }
    return new Response('Worker is alive', { headers: { 'Content-Type': 'text/plain' } });
  }
};
