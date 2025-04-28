import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { Textarea } from "./components/ui/textarea"
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
import { toast } from "sonner";

export const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                toast.success('Message sent successfully!');
                form.current.reset();
            })
            .catch((error) => {
                toast.error('Failed to send message. Please try again.');
                console.error('Error:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <>
            <div className="relative contact-section">
                <div className="relative rounded ">
                    <div className="isolate px-4 lg:px-6 pb-10 z-10">
                        <div className="text-center">
                            <h1 className="flex flex-col text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
                                Contact
                            </h1>
                            <p className="mt-2 text-[16px] font-medium text-pretty text-gray-500 sm:text-lg sm:mt-4">
                                Feel free to reach out to me for any questions or opportunities!
                            </p>
                        </div>
                        <form 
                            ref={form} 
                            onSubmit={sendEmail}
                            className="max-w-[500px] xl:max-w-[600px]  flex flex-col mx-auto bg-white border rounded-2xl py-4 lg:py-6 xl:py-8 px-4 lg:px-7 mt-4 sm:mt-6 gap-3 lg:gap-4 xl:gap-5"
                        >
                            <b className="text-[20px] xl:text-2xl">Email Me 🚀</b>
                            <Input 
                                type="email" 
                                placeholder="Your Email" 
                                name="user_email" 
                                className="placeholder:text-[16px] xl:placeholder:text-lg py-5 xl:py-6" 
                                required 
                            />
                            <Input 
                                type="text" 
                                placeholder="Your Name" 
                                name="name" 
                                className="placeholder:text-[16px] xl:placeholder:text-lg py-5 xl:py-6" 
                                required 
                            />
                            <Input 
                                type="text" 
                                placeholder="Subject" 
                                name="title" 
                                className="placeholder:text-[16px] xl:placeholder:text-lg py-5 xl:py-6" 
                                required 
                            />
                            <Textarea 
                                placeholder="Message" 
                                name="message" 
                                className="placeholder:text-[16px] xl:placeholder:text-lg h-24 lg:h-30 xl:h-40" 
                                required 
                            />
                            <Button 
                                type="submit"
                                disabled={loading}
                                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-[16px] sm:text-lg px-4 py-5 xl:py-6 rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-700"
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </Button>
                        </form>
                    </div>
                </div>
                <footer>
                    <div className="flex flex-col items-center">
                        <h1 className="text-lg sm:text-xl font-bold  text-violet-500 tracking-wide">
                            Prince Khant
                        </h1>
                        <div className="flex justify-center gap-7 sm:gap-10 py-4">
                            <Icons.facebook />
                            <Icons.twitter />
                            <Icons.linkedin />
                            <Icons.instagram />
                        </div>
                    </div>
                    <p className="text-sm sm:text-lg text-center py-5">© 2024 Prince Khant. All rights reserved.</p>
                </footer>
                <a className="absolute right-12 bottom-5 border border-gray-500 p-3 xl:p-4 rounded-[50%] hover:cursor-pointer transition-all ease-in-out animate-bounce hover:text-gray-950 text-gray-800 hidden md:block" href="#hero">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                    </svg>
                </a>
            </div>
        </>
    )
}

const Icons = {
    facebook: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 20 20" fill="#000000" className="cursor-pointer hover:fill-purple-950">
            <title>facebook</title>
            <g id="SVGRepo_bgCarrier" stroke-width="0" />
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
            <g id="SVGRepo_iconCarrier"> <rect x="0" fill="none" width="20" height="20" /> <g> <path d="M2.89 2h14.23c.49 0 .88.39.88.88v14.24c0 .48-.39.88-.88.88h-4.08v-6.2h2.08l.31-2.41h-2.39V7.85c0-.7.2-1.18 1.2-1.18h1.28V4.51c-.22-.03-.98-.09-1.86-.09-1.85 0-3.11 1.12-3.11 3.19v1.78H8.46v2.41h2.09V18H2.89c-.49 0-.89-.4-.89-.88V2.88c0-.49.4-.88.89-.88z" /> </g> </g>
        </svg>
    ),
    twitter: () => (
        <svg viewBox="0 -2 20 20" width="24px" height="24px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" className="cursor-pointer hover:fill-purple-700"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>twitter</title>  <g id="Dribbble-Light-Preview" className="hover:fill-purple-950" transform="translate(-60.000000, -7521.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705" id="twitter-[#154]"> </path> </g> </g> </g></svg>
    ),
    linkedin: () => (
        <svg fill="#000000" viewBox="0 0 32 32" width="24px" height="24px" version="1.1" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer hover:fill-purple-950"><g id="SVGRepo_bgCarrier" strokeWidth="0" ></g> <title>linkedin</title><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>linkedin</title> <path d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"></path> </g></svg>
    ),
    instagram: () => (
        <svg
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
            className="cursor-pointer hover:fill-purple-950 icon"
            xmlns="http://www.w3.org/2000/svg"
        >
            <title>instagram</title>
            <g id="SVGRepo_iconCarrier">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                    className="icon-path"
                ></path>
                <path
                    d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                    className="icon-path"
                ></path>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                    className="icon-path"
                ></path>
            </g>
        </svg>

    ),
}

