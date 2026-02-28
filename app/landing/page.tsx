"use client"

import DottedGlowBackgroundDemoSecond from "@/components/dotted-glow-background-demo-2"
import { Button } from "@/components/ui/button"
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background"

export function Landing(){

    async function handlelogin(){
        const response=await fetch("")

    }
    return <div className="min-h-screen bg-linear-to-b from-orange-500 to bg-neutral-400">
    <div className="flex w-full justify-end px-10 py-10">
        <button className="flex items-center justify-center space-x-3 px-6 py-3 rounded-lg
               bg-linear-to-r from-blue-500 to-blue-600
               hover:from-blue-600 hover:to-blue-400
               text-white text-sm font-semibold
               transition duration-300
               shadow-lg hover:shadow-blue-500/50"
        onClick={handlelogin}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
            Connect with twitter
        </button>

    </div>
    <div id="#about"className="flex justify-center">
        Tired of going through banger posts and manually autoPlugging everytime.
        AutoPlug will take care!!
    </div>
    
    <div id="#how" className="">
        <DottedGlowBackgroundDemoSecond></DottedGlowBackgroundDemoSecond>

    </div>
    <div id="#pricing"className="flex justify-center px-4">
       pricing
    </div>
    </div>
}