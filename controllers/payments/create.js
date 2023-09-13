import mercadopago from 'mercadopago'

export default async (req, res) => {
    mercadopago.configure({ access_token: process.env.MP_ACCESS_TOKEN })
    let preference = {
        items: req.body  //array de productos que se deben pagar
    };
    let response = await mercadopago.preferences.create(preference)
    return res.status(201).send(response.body.init_point);
}