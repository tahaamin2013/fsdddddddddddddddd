
"use client"
import React, { ChangeEvent, FormEvent, useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import emailjs from "emailjs-com";
import Image from 'next/image';

const FAQ = () => {
  return (
    <div><div className='border mt-4 text-sm sm:text-md shadow-xl rounded-lg mb-4 text-zinc-800-z-50 py-6 mx-[44] md:mx-[140px] lg:mx-[240px] xl:mx-[300px] px-7'>
   <div className='bottom-6 left-4 right-4'>
   <h1 className='font-bold text-2xl text-center'>FAQ</h1>
        <Accordion type="single" collapsible  className='grid grid-cols-1 gap-x-8 w-full'>
          <AccordionItem className='border-b-zinc-800' value="item-1">
            <AccordionTrigger>1. How do I pay and renew my membership?</AccordionTrigger>
            <AccordionContent>
            You can conveniently pay and renew through our app.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className='border-b-zinc-800' value="item-2">
            <AccordionTrigger>2. How do you verify my identity?</AccordionTrigger>
            <AccordionContent>
            When you sign into the app at our car wash location, we can identify your car in our queue.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className='border-b-zinc-800' value="item-3">
            <AccordionTrigger>3. Can I use the membership with another car?</AccordionTrigger>
            <AccordionContent>
            Unfortunately, our memberships are based on car size, so we only offer one membership per car.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className='border-b-zinc-800' value="item-4">
            <AccordionTrigger>4. Can a family member use the membership?</AccordionTrigger>
            <AccordionContent>
            Yes, anyone with the same app and membership can wash the car associated with the membership.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className='border-b-zinc-800' value="item-5">
            <AccordionTrigger>5. Do I need an appointment?</AccordionTrigger>
            <AccordionContent>
            No, simply come down during our open hours and we will serve customers on a first-come, first-served basis.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className='border-b-zinc-800' value="item-6">
            <AccordionTrigger>6. Do you accept Apple Pay?</AccordionTrigger>
            <AccordionContent>
            Yes, we accept both Apple Pay and Google Pay.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className='border-b-zinc-800' value="item-7">
            <AccordionTrigger>7. Does the membership work for self-service bays?</AccordionTrigger>
            <AccordionContent>
            We are currently working on making that possible. Stay tuned!
            </AccordionContent>
          </AccordionItem>
        </Accordion>
   </div>
        </div> </div>
  )
}

export default FAQ