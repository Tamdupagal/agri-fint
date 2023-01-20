import React from "react";
import Image from "next/image";

function Team_members() {
  return (
    <div className="lg:px-20 bg-dark  text-fontclr py-20 ">
      <div className="flex flex-col items-center gap-3">
        <p className="text-lg font-semibold text-primary">Team Members</p>
        <h2 className="text-3xl lg:text-5xl uppercase ">The tripod team</h2>
        <Image
          src={"/assets/section-title-icon-1.png"}
          width={54}
          height={21}
          alt="title icon"
        />
      </div>
      <div className="lg:flex lg:justify-around items-center p-5 lg:px-20  py-10">
        {/* social start */}
        <div className="Social_media_icons rounded-full rounded-br-lg w-20 h-40">
          <ul className="ml-7 mt-3">
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        {/* social end */}

        <div className="sm:flex sm:flex-col sm:justify-center py-5 relative rounded-full rounded-br-lg">
          <img
            src="/assets/team3.jpg"
            alt="title icon"
            className="Team_member1 duration-500 rounded-full rounded-br-lg"
          />
          <div className="sm:text-right text-right mt-2">
            <h3 className=" text-3xl font-bold ">Nirvan Nandy</h3>
            <p className="text-md text-paraclr">CSO (Chief Sales officer)</p>
          </div>
        </div>
        <div className="sm:flex sm:flex-col py-5 sm:justify-center">
          <img
            src="/assets/team1.jpg"
            alt="title icon"
            className="Team_member2 duration-500 rounded-full rounded-br-lg"
          />

          <div className="sm:text-right text-right mt-2">
            <h3 className=" text-3xl font-bold ">Abhijeet Vidit</h3>
            <p className="text-md text-paraclr">Founder</p>
          </div>
        </div>
        <div className="sm:flex sm:flex-col py-5 sm:justify-center">
          <img
            src="/assets/team22.jpg"
            alt="title icon"
            className="Team_member3  duration-500 rounded-full rounded-br-lg"
          />

          <div className="sm:text-right text-right mt-2">
            <h3 className=" text-3xl font-bold ">Saket Kale</h3>
            <p className="text-md text-paraclr">
              CMO (Chief Marketing Officer)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team_members;
