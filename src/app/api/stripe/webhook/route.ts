// src/app/api/stripe/webhook/route.ts

import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    return NextResponse.json(
      { error: "Missing Stripe signature" },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    const body = await req.text();

    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error("Webhook signature verification failed:", err.message);
    return NextResponse.json(
      { error: "Invalid signature" },
      { status: 400 }
    );
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const metadata = session.metadata || {};

    const attestationPayload = {
      attestationId: crypto.randomUUID(),
      companyName: metadata.company_name,
      companyId: metadata.company_id || null,
      year: metadata.year,
      country: metadata.country,
      expenses: metadata.expenses
        ? JSON.parse(metadata.expenses)
        : {},
      totalCo2e: metadata.total_co2e,
      paymentIntent: session.payment_intent,
      paidAt: new Date().toISOString(),
    };

    /*
      🔒 V1 — À FAIRE ICI (PROCHAINE ÉTAPE)
      - Génération PDF
      - Signature serveur
      - Stockage fichier (ou génération à la volée)
      - Création page /verify/:id
    */

    console.log("Attestation payload:", attestationPayload);
  }

  return NextResponse.json({ received: true });
}
