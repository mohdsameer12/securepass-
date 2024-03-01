import React from "react";
import web3 from "../../assets/web3.jpg";
import encrypt from "../../assets/encrypt.jpg";
import blockchain from "../../assets/blockchain.jpg";
import future from "../../assets/future.jpg";

function Features(props) {
  return (
    
    <div className="py-10 px-80 bg-gradient-to-b from-blue-900 to-black">
      
      <div className="text-center mx-[40vh]"> 
        <h2 class="mb-4 mt-10 text-4xl tracking-tight font-extrabold text-white dark:text-white ">
          Our Features
        </h2>

        <p class="font-light text-gray-400 lg:mb-16 sm:text-xl dark:text-gray-400">
        Imagine an event where everything runs smoothly, guests are engaged, and you can track your success in real-time.
        </p>
      </div>
      <div className="px-[10vh] shadow-xl">
      <div class="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800 ">
        <figure class="flex flex-col items-center justify-center  text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400 p-8">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              WEB 3.0
            </h3>
            <p class="my-4">
              Discover our event booking app, powered by Web 3.0 for
              unparalleled security.
            </p>
          </blockquote>
          <div className="aspect-w-16 aspect-h-9 w-full ">
            <img src={web3} className="object-cover" alt="Your Image" />
          </div>
          {/* <figcaption class="flex items-center justify-center ">
            <img
              class="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
              alt="profile picture"
            />
            <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
              <div>Bonnie Green</div>
              <div class="text-sm text-gray-500 dark:text-gray-400 ">
                Developer at Open AI
              </div>
            </div>
          </figcaption> */}
        </figure>
        <figure class="flex flex-col items-center justify-center  text-center bg-white border-b border-gray-200 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400 p-8">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Blockchain
            </h3>
            <p class="my-4">
              Blockchain technology ensures transparent transactions and
              seamless dispute resolution.
            </p>
          </blockquote>
          <div className="aspect-w-16 aspect-h-9 w-full">
            <img src={blockchain} className="object-cover" alt="Your Image" />
          </div>
          {/* <figcaption class="flex items-center justify-center ">
            <img
              class="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
              alt="profile picture"
            />
            <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
              <div>Roberta Casas</div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                Lead designer at Dropbox
              </div>
            </div>
          </figcaption> */}
        </figure>
        <figure class="flex flex-col items-center justify-center text-center bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e dark:bg-gray-800 dark:border-gray-700">
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400 p-8">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Encryption
            </h3>
            <p class="my-4">
              With advanced encryption, your data stays safe, free from breaches
              or central points of failure.
            </p>
          </blockquote>
          <div className="aspect-w-16 aspect-h-9 w-full">
            <img src={encrypt} className="object-cover " alt="Your Image" />
          </div>
          {/* <figcaption class="flex items-center justify-center ">
            <img
              class="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
              alt="profile picture"
            />
            <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
              <div>Jese Leos</div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                Software Engineer at Facebook
              </div>
            </div>
          </figcaption> */}
        </figure>
        <figure class="flex flex-col items-center justify-center text-center bg-white border-gray-200 rounded-b-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400 p-8 ">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Future
            </h3>
            <p class="my-4">
              Join us in shaping a safer, more transparent future for event
              booking. And change the world
            </p>
          </blockquote>
          <div className="aspect-w-16 aspect-h-9 w-full">
            <img src={future} className="object-cover" alt="Your Image" />
          </div>
          {/* <figcaption class="flex items-center justify-center ">
            <img
              class="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
              alt="profile picture"
            />
            <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
              <div>Joseph McFall</div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                CTO at Google
              </div>
            </div>
          </figcaption> */}
        </figure>
      </div>
    </div>
    </div>
  
  );
}

export default Features;
