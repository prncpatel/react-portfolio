
import { MagicCard } from "./components/magicui/magic-card"
import { CardContent, CardHeader } from "./components/ui/card"
import LandingPage from "./assets/LandingPage.png"
import { AnimatedGradientText } from "./components/magicui/animated-gradient-text";
import Aos from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react"

export const Project = () => {
    useEffect(() => {
        Aos.init({
            once: false,
            easing: "ease-in-out"
        })
    }, [Aos])
    return (
        <>
            <div className="relative rounded">
                <div className="isolate px-4 lg:px-6 py-10 sm:py-22">
                    <div className="text-center">
                        <h1 className="flex flex-col text-3xl font-semibold tracking-tight text-gray-900 md:text-[32px] sm:text-5xl">
                            Projects
                        </h1>
                        <p className="mt-2 text-[16px] font-medium text-gray-500 sm:text-lg sm:mt-3 xl:mt-4">
                            I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-7 sm:gap-20 mt-8">
                        <MagicCard className="max-w-[420px] w-full">
                            <CardHeader className="px-2 gap-3">
                                <img src={LandingPage} className="w-full border border-gray-300 rounded-xl object-cover" />
                                <div className="flex flex-wrap gap-1 justify-start items-start">
                                    <div className="group relative flex rounded-full px-3 py-1 border text-purple-600 bg-purple-50 ">
                                        <AnimatedGradientText className="text-xs font-medium">
                                            React js
                                        </AnimatedGradientText>
                                    </div>
                                    <div className="group relative flex rounded-full px-3 py-1 border text-purple-600 bg-purple-50 ">
                                        <AnimatedGradientText className="text-xs font-medium">
                                            Tailwind css
                                        </AnimatedGradientText>
                                    </div>
                                    <div className="group relative  flex rounded-full px-3 py-1 border text-purple-600 bg-purple-50 ">
                                        <AnimatedGradientText className="text-xs font-medium">
                                            Magic UI
                                        </AnimatedGradientText>
                                    </div>
                                    <div className="group relative flex rounded-full px-3 py-1 border text-purple-600 bg-purple-50 ">
                                        <AnimatedGradientText className="text-xs font-medium">
                                            Styled Components
                                        </AnimatedGradientText>
                                    </div>
                                    <div className="group relative flex rounded-full px-3 py-1 border text-purple-600 bg-purple-50 ">
                                        <AnimatedGradientText className="text-xs font-medium">
                                            Shadcn
                                        </AnimatedGradientText>
                                    </div>
                                    <div className="group relative flex rounded-full px-3 py-1 border text-purple-600 bg-purple-50 ">
                                        <AnimatedGradientText className="text-xs font-medium">
                                            Email Js
                                        </AnimatedGradientText>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="px-3 py-2 gap-3">
                                <div className="text-gray-600 py-1">
                                    <h4 className="text-xl font-bold">React - Portfolio</h4>
                                    <div className="text-[12px]">Jan 2024 - March 2024</div>
                                </div>
                                <p className="text-gray-500 text-sm sm:text-[16px] pt-2">
                                    Explore my portfolio developed with React JS, featuring dynamic UI elements crafted with JSX and styled using CSS, Styled Components, and Magic-UI.while EmailJS enables direct communication.
                                </p>
                            </CardContent>
                        </MagicCard>
                        <MagicCard className="max-w-[420px] w-full">
                            <CardHeader className="px-2 gap-3">
                                <img src={LandingPage} className="w-full border border-gray-300 rounded-xl object-cover" />
                                <div className="flex flex-wrap gap-1 justify-start items-start">
                                    <div className="group relative flex rounded-full px-3 py-1 border text-purple-600 bg-purple-50 ">
                                        <AnimatedGradientText className="text-xs font-medium">
                                            React js
                                        </AnimatedGradientText>
                                    </div>
                                    <div className="group relative flex rounded-full px-3 py-1 border text-purple-600 bg-purple-50 ">
                                        <AnimatedGradientText className="text-xs font-medium">
                                            Tailwind css
                                        </AnimatedGradientText>
                                    </div>
                                    <div className="group relative  flex rounded-full px-3 py-1 border text-purple-600 bg-purple-50 ">
                                        <AnimatedGradientText className="text-xs font-medium">
                                            Magic UI
                                        </AnimatedGradientText>
                                    </div>
                                    <div className="group relative flex rounded-full px-3 py-1 border text-purple-600 bg-purple-50 ">
                                        <AnimatedGradientText className="text-xs font-medium">
                                            Styled Components
                                        </AnimatedGradientText>
                                    </div>
                                    <div className="group relative flex rounded-full px-3 py-1 border text-purple-600 bg-purple-50 ">
                                        <AnimatedGradientText className="text-xs font-medium">
                                            Shadcn
                                        </AnimatedGradientText>
                                    </div>
                                    <div className="group relative flex rounded-full px-3 py-1 border text-purple-600 bg-purple-50 ">
                                        <AnimatedGradientText className="text-xs font-medium">
                                            Email Js
                                        </AnimatedGradientText>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="px-3 py-2 gap-3">
                                <div className="text-gray-600 py-1">
                                    <h4 className="text-xl font-bold">React - Portfolio</h4>
                                    <div className="text-[12px]">Jan 2024 - March 2024</div>
                                </div>
                                <p className="text-gray-500 text-sm sm:text-[16px] pt-2">
                                    Explore my portfolio developed with React JS, featuring dynamic UI elements crafted with JSX and styled using CSS, Styled Components, and Magic-UI.while EmailJS enables direct communication.
                                </p>
                            </CardContent>
                        </MagicCard>
                        <MagicCard className="max-w-[420px] w-full">
                            <CardHeader className="px-2 gap-3">
                                <img src={LandingPage} className="w-full border border-gray-300 rounded-xl object-cover" />
                                <div className="flex flex-wrap gap-1 justify-start items-start">
                                    <div className="group relative flex rounded-full px-3 py-1 border text-purple-600 bg-purple-50 ">
                                        <AnimatedGradientText className="text-xs font-medium">
                                            React js
                                        </AnimatedGradientText>
                                    </div>
                                    <div className="group relative flex rounded-full px-3 py-1 border text-purple-600 bg-purple-50 ">
                                        <AnimatedGradientText className="text-xs font-medium">
                                            Tailwind css
                                        </AnimatedGradientText>
                                    </div>
                                    <div className="group relative  flex rounded-full px-3 py-1 border text-purple-600 bg-purple-50 ">
                                        <AnimatedGradientText className="text-xs font-medium">
                                            Magic UI
                                        </AnimatedGradientText>
                                    </div>
                                    <div className="group relative flex rounded-full px-3 py-1 border text-purple-600 bg-purple-50 ">
                                        <AnimatedGradientText className="text-xs font-medium">
                                            Styled Components
                                        </AnimatedGradientText>
                                    </div>
                                    <div className="group relative flex rounded-full px-3 py-1 border text-purple-600 bg-purple-50 ">
                                        <AnimatedGradientText className="text-xs font-medium">
                                            Shadcn
                                        </AnimatedGradientText>
                                    </div>
                                    <div className="group relative flex rounded-full px-3 py-1 border text-purple-600 bg-purple-50 ">
                                        <AnimatedGradientText className="text-xs font-medium">
                                            Email Js
                                        </AnimatedGradientText>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="px-3 py-2 gap-3">
                                <div className="text-gray-600 py-1">
                                    <h4 className="text-xl font-bold">React - Portfolio</h4>
                                    <div className="text-[12px]">Jan 2024 - March 2024</div>
                                </div>
                                <p className="text-gray-500 text-sm sm:text-[16px] pt-2">
                                    Explore my portfolio developed with React JS, featuring dynamic UI elements crafted with JSX and styled using CSS, Styled Components, and Magic-UI.while EmailJS enables direct communication.
                                </p>
                            </CardContent>
                        </MagicCard>
                    </div>
                </div>
            </div>
        </>
    )
}