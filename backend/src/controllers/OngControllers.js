const connection = require("../database/connection");
const generateUniqueId = require("../utils/generateUniqueId");

module.exports = {
  async listOngs(request, response) {
    const ongs = await connection("ongs").select("*");
    return response.json(ongs);
  },

  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;

    // generating a random id
    const id = generateUniqueId();

    // storing information into ongs table
    await connection("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    // returning the id for the user
    return response.json({ id });
  },
};
