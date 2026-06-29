import Button from "@/components/Button";
import dashboard1 from "@/assets/images/design-example-1.png"
import dashboard2 from "@/assets/images/design-example-2.png"
import Image  from 'next/image';
import Pointer from "@/components/Pointer";

export default function Hero() {
    return <section className="py-24 overflow-x-clip">
        <div className="container relative">
            
            <div className="absolute -left-32 top-16 hidden lg:block">
                <Image src={dashboard1} alt="Dashboard image" className="" />
            </div>

            <div className="absolute -right-64 top-18 hidden lg:block">
                <Image src={dashboard2} alt="Dashboard Image"/>
            </div>
            <div className="absolute left-56 top-96 hidden lg:block">
                <Pointer name="Anderson"/>
            </div>

            <div className="absolute right-80 -top-4 hidden lg:block">
                <Pointer name="Aitana" color="red"/>
            </div>
            
            <div className="flex justify-center">

            <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full font-semibold text-neutral-950">🌟 $10M seed fund raised</div>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">The AI Workspace Built for Modern Teams</h1>
            <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">Protect your business with continuous monitoring, instant alerts, and enterprise-grade security powered by AI.</p>

            <form className="flex border border-white/15 rounded-full p-2 mt-8  max-w-lg mx-auto">
                <input type="email" placeholder="Enter your email" className="bg-transparent px-4 md:flex-1 w-full"/>
                <Button type="submit" variant="primary" className="whitespace-nowrap" size="sm">Sign Up</Button>
            </form>
        </div>
    </section>;
}
