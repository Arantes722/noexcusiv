import { NextResponse } from "next/server";
import Stripe from "stripe";

import { products } from "@/constants/products";


const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY!
);



export async function POST(request: Request) {

  try {

    const body = await request.json();

    const { slug } = body;



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



    const session = await stripe.checkout.sessions.create({

      mode: "payment",


      payment_method_types: [
        "card",
      ],


      // Informação enviada para o webhook
      metadata: {
        product_id: product.id,
        product_name: product.name,
      },



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


          quantity: 1,

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