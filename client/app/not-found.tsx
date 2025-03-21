import { ButtonV2 } from "@/components/button/ButtonV2";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
   title: "Not Found",
};

export default function NotFound() {
   return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b ">
         <div className="text-center">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
            <p className="text-xl mb-8">Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
            <ButtonV2
               variant={"ringHover"}
               className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
            >
               <Link href={"/"}> Go Home</Link>
            </ButtonV2>
         </div>
      </div>
   );
}
