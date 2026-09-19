import { NextResponse } from "next/server";
import Stripe from "stripe";

import { products } from "@/data/products";
import { getAuthenticatedUser } from "@/lib/account";


export async function POST(request: Request) {

  try {
    const secretKey = process.env.STRIPE_SECRET_KEY;
    if (!secretKey) {
      return NextResponse.json(
        { error: "Checkout is not configured." },
        { status: 503 }
      );
    }

    const stripe = new Stripe(secretKey);
    const user = await getAuthenticatedUser();

    if (!user) {
      return NextResponse.json(
        { error: "Please log in before checkout." },
        { status: 401 }
      );
    }

    const body = await request.json();

    const { slug, quantity: requestedQuantity, key: selectedKey } = body;
    const quantity =
      Number.isInteger(requestedQuantity) &&
      requestedQuantity >= 1 &&
      requestedQuantity <= 10
        ? requestedQuantity
        : 1;



    const product = products.find(
      (item) => item.slug === slug
    );



    if (!product) {

      return NextResponse.json(
        {
          error: "Product not found",
        },
        {
          status: 404,
        }
      );
    }

    const keyOption =
      typeof selectedKey === "string"
        ? product.keyOptions.find((option) => option.id === selectedKey)
        : undefined;

    if (selectedKey && (!keyOption || keyOption.status !== "available")) {
      return NextResponse.json(
        { error: "Selected key is not available." },
        { status: 400 }
      );
    }



    const session = await stripe.checkout.sessions.create({

      mode: "payment",


      payment_method_types: [
        "card",
      ],


      // Informação enviada para o webhook
      metadata: {
        product_id: product.id,
        product_name: product.name,
        selected_key: keyOption?.id ?? "",
        quantity: String(quantity),
        user_id: user.id,
      },
      client_reference_id: user.id,



      line_items: [

        {
          price_data: {

            currency: "eur",

            product_data: {

              name: product.name,

              description: product.description,

              images: [
                `${process.env.NEXT_PUBLIC_URL}${product.image}`,
              ],

            },


            unit_amount: Math.round(
              product.price * 100
            ),

          },


          quantity,

        },

      ],



      shipping_address_collection: {

        allowed_countries: [
          "PT",
          "ES",
          "FR",
          "DE",
          "IT",
          "NL",
          "BE",
        ],

      },



      success_url:
        `${process.env.NEXT_PUBLIC_URL}/success`,


      cancel_url:
        `${process.env.NEXT_PUBLIC_URL}/shop/${product.slug}`,

    });



    return NextResponse.json({

      url: session.url,

    });



  } catch (error) {


    console.error(
      "Stripe checkout error:",
      error
    );



    return NextResponse.json(
      {
        error: "Checkout failed",
      },
      {
        status: 500,
      }
    );

  }

}