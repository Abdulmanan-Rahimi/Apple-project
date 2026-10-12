import React from "react";

import { useState } from "react";

const footerData = [
  {
    title: "Shop and Learn",
    links: [
      ["Store", "https://www.apple.com/us/shop/goto/store"],
      ["Mac", "https://www.apple.com/mac/"],
      ["iPad", "https://www.apple.com/ipad/"],
      ["iPhone", "https://www.apple.com/iphone/"],
      ["Watch", "https://www.apple.com/watch/"],
      ["Vision", "https://www.apple.com/apple-vision-pro/"],
      ["AirPods", "https://www.apple.com/airpods/"],
      ["TV & Home", "https://www.apple.com/tv-home/"],
      ["AirTag", "https://www.apple.com/airtag/"],
      ["Accessories", "https://www.apple.com/us/shop/goto/buy_accessories"],
      ["Gift Cards", "https://www.apple.com/us/shop/goto/giftcards"],
    ],
  },
  {
    title: "Apple Wallet",
    links: [
      ["Wallet", "https://www.apple.com/wallet/"],
      ["Apple Card", "https://www.apple.com/apple-card/"],
      ["Apple Pay", "https://www.apple.com/apple-pay/"],
      ["Apple Cash", "https://www.apple.com/apple-cash/"],
      ["Manage Your Apple Account", "https://account.apple.com/"],
      ["Apple Store Account", "https://www.apple.com/us/shop/goto/account"],
      ["iCloud.com", "https://www.icloud.com/"],
      ["Ethics & Compliance", "https://www.apple.com/compliance/"],
      ["Events", "https://www.apple.com/apple-events/"],
      ["Contact Apple", "https://www.apple.com/contact/"],
    ],
  },

  {
    title: "Entertainment",
    links: [
      ["Apple One", "https://www.apple.com/apple-one/"],
      ["Apple TV", "https://www.apple.com/apple-tv/"],
      ["Apple Music", "https://www.apple.com/apple-music/"],
      ["Apple Arcade", "https://www.apple.com/apple-arcade/"],
      ["Apple Fitness+", "https://www.apple.com/apple-fitness-plus/"],
      ["Apple News+", "https://www.apple.com/apple-news/"],
      ["Apple Podcasts", "https://www.apple.com/apple-podcasts/"],
      ["Apple Books", "https://www.apple.com/apple-books/"],
      ["App Store", "https://www.apple.com/app-store/"],
    ],
  },
  {
    title: "Apple Store",
    links: [
      ["Find a Store", "https://www.apple.com/retail/"],
      ["Genius Bar", "https://www.apple.com/retail/geniusbar/"],
      ["Today at Apple", "https://www.apple.com/today/"],
      ["Group Reservations", "https://www.apple.com/today/groups/"],
      ["Apple Camp", "https://www.apple.com/today/camp/"],
      [
        "Apple Store App",
        "https://apps.apple.com/us/app/apple-store/id375380948",
      ],
      [
        "Certified Refurbished",
        "https://www.apple.com/us/shop/goto/special_deals",
      ],
      ["Apple Upgrade", "https://www.apple.com/us/shop/goto/apple_upgrade"],
      ["Apple Trade In", "https://www.apple.com/us/shop/goto/trade_in"],
      ["Financing", "https://www.apple.com/us/shop/goto/payment_plan"],
      [
        "Carrier Deals at Apple",
        "https://www.apple.com/us/shop/goto/buy_iphone/carrier_offers",
      ],
      ["Order Status", "https://www.apple.com/us/shop/goto/order/list"],
      ["Shopping Help", "https://www.apple.com/us/shop/goto/help"],
    ],
  },
  {
    title: "For Education",
    links: [
      ["Apple and Education", "https://www.apple.com/education/"],
      ["Shop for K-12", "https://www.apple.com/education/k12/how-to-buy/"],
      [
        "Shop for College",
        "https://www.apple.com/us/shop/goto/educationrouting",
      ],
      ["Apple One", "https://www.apple.com/apple-one/"],
      ["Apple TV", "https://www.apple.com/apple-tv/"],
      ["Apple Music", "https://www.apple.com/apple-music/"],
      ["Apple Arcade", "https://www.apple.com/apple-arcade/"],
      ["Apple Fitness+", "https://www.apple.com/apple-fitness-plus/"],
      ["Apple News+", "https://www.apple.com/apple-news/"],
      ["Apple Podcasts", "https://www.apple.com/apple-podcasts/"],
      ["Apple Books", "https://www.apple.com/apple-books/"],
      ["App Store", "https://www.apple.com/app-store/"],
    ],
  },

  {
    title: "For Government",
    links: [
      ["Apple and Government", "https://www.apple.com/government/"],
      [
        "Shop for Veterans and Military",
        "https://www.apple.com/us/shop/goto/eppstore/veteransandmilitary",
      ],
      [
        "Shop for State and Local Employees",
        "https://www.apple.com/us_epp_67909/store",
      ],
      [
        "Shop for Federal Employees",
        "https://www.apple.com/us_epp_55499/store",
      ],
      ["Investors", "https://investor.apple.com/"],
      ["Ethics & Compliance", "https://www.apple.com/compliance/"],
      ["Events", "https://www.apple.com/apple-events/"],
      ["Contact Apple", "https://www.apple.com/contact/"],
    ],
  },
  {
    title: "Apple Values",
    links: [
      ["Accessibility", "https://www.apple.com/accessibility/"],
      ["Education", "https://www.apple.com/education-initiative/"],
      ["Environment", "https://www.apple.com/environment/"],
      ["Inclusion and Diversity", "https://www.apple.com/diversity/"],
      ["Privacy", "https://www.apple.com/privacy/"],
      [
        "Racial Equity and Justice",
        "https://www.apple.com/racial-equity-justice-initiative/",
      ],
      [
        "Racial Equity and Justice Initiative",
        "https://www.apple.com/racial-equity-justice-initiative/",
      ],
      ["Supply Chain Innovation", "https://www.apple.com/supply-chain/"],
    ],
  },
  {
    title: "About Apple",
    links: [
      ["Newsroom", "https://www.apple.com/newsroom/"],
      ["Apple Leadership", "https://www.apple.com/leadership/"],
      ["Career Opportunities", "https://www.apple.com/careers/us/"],
      ["Investors", "https://investor.apple.com/"],
      ["Ethics & Compliance", "https://www.apple.com/compliance/"],
      ["Events", "https://www.apple.com/apple-events/"],
      ["Contact Apple", "https://www.apple.com/contact/"],
    ],
  },
];

const Footer = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (title) => {
    setOpenItems((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div className="bg-[#F5F5F7]"> 
      <div className="px-2 py-10 bg-[#F5F5F7] md:w-[53.4%] md:mx-auto">
        <p className="text-xs">
          Based on data from an Apple-conducted study of heart rate accuracy,
          during July and August 2026, utilizing commercially available
          best-selling wearables available as of June 2026. For more
          information, visit apple.com/HRAccuracy. Apple Upgrade is a device
          leasing program available in the U.S. (excluding U.S. territories).
          Leases are provided by Klarna: subject to eligibility and credit
          approval, including final approval at checkout. To be eligible, you
          must be a U.S. resident, at least 18 years old (or the legal age in
          your state), have an accepted credit or debit card, and have an Apple
          Account. Additional eligibility criteria apply. Device must be in good
          condition upon return; damage fees may apply. For iPhone only: In
          order to lease an iPhone, you must select an eligible carrier (but you
          cannot use a prepaid carrier plan). Upgrades require entering into a
          new lease and are subject to eligibility and credit approval. Apple
          Upgrade is not available on refurbished devices or online at the
          following special stores: Apple Employee Purchase Plan; participating
          corporate Employee Purchase Programs; Apple at Work for small
          businesses or enterprises; Government, Education, or Veterans and
          Military Purchase Programs. To access and use all Apple Card features
          and products available only to Apple Card users, you must add Apple
          Card to Wallet on an iPhone or iPad that supports and has the latest
          version of iOS or iPadOS. Apple Card is subject to credit approval,
          available only for qualifying applicants in the United States, and
          issued by Goldman Sachs Bank USA, Salt Lake City Branch. Apple
          Payments Services LLC, a subsidiary of Apple Inc., is a service
          provider of Goldman Sachs Bank USA for Apple Card and Savings
          accounts. Neither Apple Inc. nor Apple Payments Services LLC is a
          bank. All communications from Apple and Goldman Sachs Bank USA about
          Apple Card (including transactional and marketing communications) and
          customer service support are available in English. Certain
          communications about Apple Card can be viewed in another language
          depending on your device language settings. If you reside in the U.S.
          Virgin Islands, American Samoa, Guam, Northern Mariana Islands, or
          U.S. Minor Outlying Islands, please call Goldman Sachs at 877-255-5923
          with questions about Apple Card. Learn more about how Apple Card
          applications are evaluated at support.apple.com/kb/HT209218. A
          subscription is required for Apple Arcade, Apple Fitness+, Apple
          Music, and Apple TV. Features are subject to change. Some features,
          applications, and services may not be available in all regions or all
          languages.
        </p>
      </div>
      <hr className="border-t border-gray-500 w-[52.4%] mx-auto" />
      {/* <div className=" border-t border-gray-300  pb-10 text-xs text-gray-500"></div> */}
      <footer className="bg-[#F5F5F7] px-5 py-8 text-[#424245] md:px-10">
        <div className="mx-auto max-w-[1000px]">
          <div className="grid grid-cols-1 md:grid-cols-5">
            {footerData.map((section) => (
              <div
                key={section.title}
                className="border-b border-gray-300 py-3 md:border-0 md:py-0 md:mb-7"
              >
                <button
                  onClick={() => toggleItem(section.title)}
                  className="flex w-full items-center justify-between text-left text-xs font-semibold md:mb-3 md:cursor-default"
                >
                  {section.title}
                  <span className="text-base font-normal md:hidden">
                    {openItems[section.title] ? "−" : "+"}
                  </span>
                </button>

                <ul
                  className={`${
                    openItems[section.title] ? "block" : "hidden"
                  } mt-3 space-y-2 pb-2 md:mt-0 md:block md:pb-0`}
                >
                  {section.links.map(([name, url]) => (
                    <li key={name}>
                      <a
                        href={url}
                        className="text-xs text-[#424245] hover:underline"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className=" pt-4 text-xs text-gray-500">
            <p>
              More ways to shop: Find an Apple Store or other retailer near you.
              Or call 1-800-MY-APPLE (1-800-692-7753).
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
