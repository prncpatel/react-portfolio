import { WarpBackground } from "./components/magicui/warp-background"
import { WordRotate } from "./components/magicui/word-rotate"
import Aos from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react"
import resume from "./assets/Resume_Prince.pdf"


export const Hero = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
            easing: "ease-in-out"
        })
    }, [])

    return (
        <WarpBackground>
            <div className="relative isolate px-2 sm:px-6 sm:pt-14 lg:px-8" >
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    />
                </div>
                <div className="max-w-2xl py-32 xl:py-56" data-aos="fade-up">
                    <div className="">
                        <h1 className="flex flex-col text-2xl font-semibold tracking-tight text-balance text-gray-900 xl:text-5xl lg:text-4xl sm:text-3xl">
                            <span>Hi, I am</span>
                            <span>Prince Khant</span>
                        </h1>
                        <div className="flex items-center text-lg justify-start gap-x-2 md:mt-4 text-pretty text-gray-700 lg:text-[32px] xl:text-4xl md:text-3xl sm:text-2xl">
                            <span>
                                I am a
                            </span>
                            <WordRotate
                                className="text-[20px] font-bold text-purple-500 dark:text-white sm:text-2xl md:text-3xl lg:text-[32px] xl:text-4xl"
                                words={["Front End Developer", "Programmer", "MERN Stack Developer"]}
                            />
                        </div>
                        <p className="mt-2 text-[16px] font-medium text-pretty text-gray-500 sm:text-[18px] lg:mt-4">
                            A motivated MERN Stack Developer, FrontEnd Developer, and Programmer, I thrive on challenges and learning. With a growth mindset and dedication to quality, I'm poised to make meaningful contributions and achieve greatness.
                        </p>
                        <div className="mt-8 flex items-center justify-center sm:justify-start gap-x-6">
                            <a
                                href={resume}
                                download="Resume_Prince.pdf"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Get Resume
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    />
                </div>
            </div>
        </WarpBackground>
    )
}