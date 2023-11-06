"use client";


import Link from "next/link";




export const LandingHero = () => {


  return (
    <div className="font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>Welcome to Neat Group Tools</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          {/* <TypewriterComponent
            options={{
              strings: [
                "Pause",
                "Play",
                "Repeat",
              ],
              autoStart: true,
              loop: true,
            }}
          /> */}
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        Find Groups for your Gameplay Adventures
      </div>
      <div>
        {/* <Link href={isSignedIn ? "/academy/search" : "/sign-up"}>
          <Button variant="default" className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
                Browse Courses
          </Button>
        </Link> */}
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
      </div>
    </div>
  );
};