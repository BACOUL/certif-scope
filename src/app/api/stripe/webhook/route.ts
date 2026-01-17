import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs"; // OBLIGATOIRE (pas edge)

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    return new NextResponse("Missing signature", { status: 400 });
  }

  let event: Stripe.Event;

  try {
    const body = await req.text(); // 🔴 RAW BODY
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error("Webhook signature verification failed:", err.message);
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // ✅ EVENT OK
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    console.log("✅ Checkout completed:", session.id);

    // 👉 ici plus tard : génération attestation
  }

  return NextResponse.json({ received: true });
}
