import { Contact } from "./Contact"
import { Education } from "./Education"
import { Experience } from "./Experience"
import { Hero } from "./Hero"
import Navbar from "./Navbar"
import { Project } from "./Project"
import { Skills } from "./Skills"


export default function Portfolio () {
    return (
        <div className="bg-white">
            <header>
                <Navbar />
            </header>
            <main>
                <section id="hero">
                    <Hero />
                </section>
                <section id="skills">
                    <Skills />
                </section>
                <section id="experience">
                    <Experience />
                </section>
                <section id="project">
                    <Project />
                </section>
                <section id="education">
                    <Education />
                </section>
                <section id="contact">
                    <Contact />
                </section>
            </main>
        </div>
    )
}