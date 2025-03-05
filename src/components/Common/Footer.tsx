import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";

const menuItems = [
  {
    name: "MAIN MENU",
    list: ["Home", "Catalog", "Shop", "Blog", "Pages"],
  },
  {
    name: "SECOND MENU",
    list: ["Home", "Catalog", "Shop", "Blog", "Pages"],
  },
  {
    name: "THIRD MENU",
    list: ["Home", "Catalog", "Shop", "Blog", "Pages"],
  },
];
const socialIcons = [
  { Icon: Facebook, href: "#" },
  { Icon: Twitter, href: "#" },
  { Icon: Youtube, href: "#" },
  { Icon: Instagram, href: "#" },
];
const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white pt-12 pb-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 text-center sm:text-left">
          {/* company info  */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-yellow-400 rounded-full p-2">
                <span className="text-2xl font-bold">E</span>
              </div>
              <span className="uppercase text-2xl font-bold text-white">
                Ecommerce
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              It is a long established fact that reader will distract by the
              readable content of a page...
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>
                <span className="font-semibold">Address:</span>
                MIG 2/2 Kohoka Housing Board ,Bhilai Chhattisgah,490023
              </p>
              <p>
                <span className="font-semibold">Email:</span>
                <Link
                  href="mailto:Demo@Masstechnologist.Com"
                  className="hover:text-yellow-400 ml-1"
                >
                  harshvardhandwivedi18@gmail.com
                </Link>
              </p>
              <p>
                <span className="font-semibold">Phone:</span>
                <Link
                  href="tel:(1234) 567 890"
                  className="hover:text-yellow-400 ml-1"
                >
                  (1234) 567 890
                </Link>
              </p>
            </div>
            <div className="flex justify-center sm:justify-start gap-4 flex-wrap">
              {socialIcons?.map(({ Icon, href }, index) => (
                <Link key={index} href={href} className="hover:text-yellow-400">
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* main menu  */}
          {menuItems.map((item, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold relative pb-2 before:absolute before:bottom-0 before:left-1/2 sm:before:left-0 before:w-12 before:h-0.5 before:bg-yellow-400">
                {item.name}
              </h3>
              <ul className="space-y-2">
                {item.list.map((itm) => (
                  <li key={itm}>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-yellow-400"
                    >
                      {itm}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-4 mt-8">
          <div className="flex flex-col sm:flex-row text-center sm:text-left">
            <p className="text-sm text-gray-400">
              © 2025{" "}
              . All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;