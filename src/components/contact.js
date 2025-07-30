export default () =>{
    return `<section id="contact" class="py-20 px-6 text-center">
    <h3 class="text-3xl font-bold mb-6">Contáctanos</h3>
    <form class="max-w-xl mx-auto grid gap-4">
      <input type="text" placeholder="Tu nombre" class="border border-gray-300 px-4 py-2 rounded" required />
      <input type="email" placeholder="Tu email" class="border border-gray-300 px-4 py-2 rounded" required />
      <textarea placeholder="Mensaje" rows="4" class="border border-gray-300 px-4 py-2 rounded" required></textarea>
      <button class="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded">Enviar</button>
    </form>
  </section>`
}