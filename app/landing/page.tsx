"use client"
import DottedGlowBackgroundDemoSecond from "@/components/dotted-glow-background-demo-2"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background"
import InvoiceCard from "@/components/ui/invoice"


export function Landing(){
    
    return <div className="min-h-screen">
       <Navbar></Navbar>
    
    <section id="about" className="flex ml-60 justify-center w-150 text-3xl line-clamp-1">{/*ask about how to make this correct since ml-60 is not the way to go*/}
        Tired of going through banger posts and manually autoPlugging everytime.

        AutoPlug will take care!!
    </section>
    
    <div id="how" className="">
        <DottedGlowBackgroundDemoSecond></DottedGlowBackgroundDemoSecond>
    </div>
    
    <div id="pricing" className=" justify-center px-4">
    <InvoiceCard/>
    </div>
    
    </div>
}