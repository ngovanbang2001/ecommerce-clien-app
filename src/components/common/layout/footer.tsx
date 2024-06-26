import Link from "next/link"
import NewsLetter from "./news-letter"
import { TiSocialTwitter, TiSocialYoutube, TiSocialFacebook, TiSocialInstagram } from "react-icons/ti";

type FooterProps = {
}

export default function Footer({ }: FooterProps) {
  return (
    <div>
      <NewsLetter />
      <div className="flex justify-between items-center py-[30px] border-t-[1px] border-gray">
        <div>
          <p className="text-gray-800 font-thin">
            Copyright © DEPOT. All rights reserved.
          </p>
        </div>
        <div className="flex gap-[20px]">
          <Link href="#">
            <TiSocialTwitter size="24px" className="text-gray-800" />
          </Link>
          <Link href="#">
            <TiSocialYoutube size="24px" className="text-gray-800"  />
          </Link>
          <Link href="#">
            <TiSocialFacebook size="24px" className="text-gray-800" />
          </Link>
          <Link href="#">
            <TiSocialInstagram size="24px" className="text-gray-800" />
          </Link>
        </div>
        <div>
          <ul className="flex gap-[40px]">
            <li>
              <Link href="#" className="text-gray-800 font-thin">
                About us
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-800 font-thin">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-800 font-thin">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-800 font-thin">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
