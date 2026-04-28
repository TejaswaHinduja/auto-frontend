"use client"
import DottedGlowBackgroundDemoSecond from "@/components/dotted-glow-background-demo-2"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background"
import InvoiceCard from "@/components/ui/invoice"
import PaymentFooter from "@/components/ui/PaymentFooter"
export function Landing(){
    

    return <div className="min-h-screen bg-linear-to-b from-orange-300 to bg-neutral-400">
       <Navbar></Navbar>
    
    <section id="about"className="flex justify-center">
        Tired of going through banger posts and manually autoPlugging everytime.
        AutoPlug will take care!!
    </section>
    
    <div id="how" className="">
        <DottedGlowBackgroundDemoSecond></DottedGlowBackgroundDemoSecond>
    </div>
    
    <div id="pricing"className=" justify-center px-4">
        
    <InvoiceCard/>
   
       
    </div>
    </div>
}