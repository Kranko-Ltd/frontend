const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

async function Handler(req, res) {
  if (req.method === "POST") {
    const { price, paymentID, email } = req.body;
    console.log(req.body);

    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: price,
            quantity: "1",
          },
        ],
        mode: "payment",

        success_url: `${req.headers.origin}/payments/?success=true&payment_id=${paymentID}`, //pass pay id
        cancel_url: `${req.headers.origin}/payments/?canceled=true`,
      });
      res.status(200).json({ id: session.id });
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}

export default Handler;
