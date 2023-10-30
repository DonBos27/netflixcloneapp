import React from "react";

function Footer() {
  return (
    <div className="w-full text-white">
      <h1 className="lg:text-5xl text-2xl lg:pl-[250px] font-bold pb-5 pt-20 lg:text-left text-center">
        Frequently Asked Questions
      </h1>

      <div className="grid lg:grid-cols-1 gap-4 lg:mx-[250px] mx-3">
        {/* FAQ 1 */}
        <div className="bg-slate-700 mb-2">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <h2 className="text-3xl px-5 py-8">What is Netflix?</h2>
              <span className="transition group-open:rotate-180 px-5">
                <svg
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="p-5 mt-3 group-open:animate-fadeIn bg-slate-700 lg:text-2xl text-lg w-full border-t border-black">
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries, and more on
              thousands of internet-connected devices.
              <br />
              <br />
              You can watch as much as you want, whenever you want without a
              single commercial – all for one low monthly price. There's always
              something new to discover and new TV shows and movies are added
              every week!
            </p>
          </details>
        </div>

        {/* FAQ 2 */}
        <div className="bg-slate-700 mb-2">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <h2 className="text-3xl px-5 py-8">
                How much does Netflix cost?
              </h2>
              <span className="transition group-open:rotate-180 px-5">
                <svg
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="p-5 mt-3 group-open:animate-fadeIn bg-slate-700 lg:text-2xl text-lg w-full border-t border-black">
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              R49 to R199 a month. No extra costs, no contracts.
            </p>
          </details>
        </div>
        {/* FAQ 3 */}
        <div className="bg-slate-700 mb-2">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <h2 className="text-3xl px-5 py-8">Where can I watch?</h2>
              <span className="transition group-open:rotate-180 px-5">
                <svg
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="p-5 mt-3 group-open:animate-fadeIn bg-slate-700 lg:text-2xl text-lg w-full border-t border-black">
              Watch anywhere, anytime. Sign in with your Netflix account to
              watch instantly on the web at netflix.com from your personal
              computer or on any internet-connected device that offers the
              Netflix app, including smart TVs, smartphones, tablets, streaming
              media players and game consoles. <br /> <br />
              You can also download your favorite shows with the iOS, Android,
              or Windows 10 app. Use downloads to watch while you're on the go
              and without an internet connection. Take Netflix with you
              anywhere. every week!
            </p>
          </details>
        </div>
        {/* FAQ 4 */}
        <div className="bg-slate-700 mb-2">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <h2 className="text-3xl px-5 py-8">How do I cancel?</h2>
              <span className="transition group-open:rotate-180 px-5">
                <svg
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="p-5 mt-3 group-open:animate-fadeIn bg-slate-700 lg:text-2xl text-lg w-full border-t border-black">
              Netflix is flexible. There are no pesky contracts and no
              commitments. You can easily cancel your account online in two
              clicks. There are no cancellation fees – start or stop your
              account anytime.
            </p>
          </details>
        </div>
        {/* FAQ 5 */}
        <div className="bg-slate-700 mb-2">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <h2 className="text-3xl px-5 py-8">
                What can I watch on Netflix?
              </h2>
              <span className="transition group-open:rotate-180 px-5">
                <svg
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="p-5 mt-3 group-open:animate-fadeIn bg-slate-700 lg:text-2xl text-lg w-full border-t border-black">
              Netflix has an extensive library of feature films, documentaries,
              TV shows, anime, award-winning Netflix originals, and more. Watch
              as much as you want, anytime you want.
            </p>
          </details>
        </div>
        {/* FAQ 6 */}
        <div className="bg-slate-700 mb-2">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <h2 className="text-3xl px-5 py-8">Is Netflix good for kids?</h2>
              <span className="transition group-open:rotate-180 px-5">
                <svg
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="p-5 mt-3 group-open:animate-fadeIn bg-slate-700 lg:text-2xl text-lg w-full border-t border-black">
              The Netflix Kids experience is included in your membership to give
              parents control while kids enjoy family-friendly TV shows and
              movies in their own space.
              <br /> <br />
              Kids profiles come with PIN-protected parental controls that let
              you restrict the maturity rating of content kids can watch and
              block specific titles you don’t want kids to see.
            </p>
          </details>
        </div>

        <div className=" pt-8 mb-[180px]">
          <p className="text-2xl font-bold mb-5 lg:px-0 px-5">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="flex flex-col lg:flex-row lg:px-[0px] px-5">
            <input
              type="email"
              placeholder="Email address"
              className="bg-black/50 border-2 border-gray-600 text-white text-xl font-bold pl-5 py-5 mb-4 lg:mb-0 lg:mr-5 rounded w-full lg:w-auto"
            />
            <button className="bg-red-600 text-white text-xl font-bold px-10 py-2 rounded cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
