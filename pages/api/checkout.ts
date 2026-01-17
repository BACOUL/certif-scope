import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  try {
    const origin =
      req.headers.get("origin") ||
      process.env.NEXT_PUBLIC_BASE_URL ||
      "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",

      line_items: [
        {
          price_data: {
            currency: "eur",
            unit_amount: 8900,
            product_data: {
              name: "CO₂e Attestation — Certif-Scope",
              description:
                "Standardized spend-based CO₂e attestation (PDF)",
            },
          },
          quantity: 1,
        },
      ],

      success_url: `${origin}/success`,
      cancel_url: `${origin}/generate`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
