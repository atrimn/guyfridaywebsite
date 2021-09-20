import React from "react"
/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useState } from "react"
import { Dialog, Popover, Tab, Transition } from "@headlessui/react"
import {
  MenuIcon,
  QuestionMarkCircleIcon,
  SearchIcon,
  ShoppingBagIcon,
  XIcon,
} from "@heroicons/react/outline"
import ContactFooter from "./footer"

const currencies = ["CAD", "USD", "AUD", "EUR", "GBP"]
const navigation = {
  categories: [
    {
      name: "",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
        {
          name: "Accessories",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg",
          imageAlt:
            "Model wearing minimalist watch with black wristband and white watch face.",
        },
        {
          name: "Carry",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-04.jpg",
          imageAlt:
            "Model opening tan leather long wallet with credit card pockets and cash pouch.",
        },
      ],
    },
    {
      name: "",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg",
          imageAlt:
            "Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg",
          imageAlt: "Model wearing light heather gray t-shirt.",
        },
        {
          name: "Accessories",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg",
          imageAlt:
            "Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.",
        },
        {
          name: "Carry",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg",
          imageAlt:
            "Model putting folded cash into slim card holder olive leather wallet with hand stitching.",
        },
      ],
    },
  ],
}
const collections = [
  {
    name: "Social events",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80",
    imageAlt: "Birthday party",
  },
  {
    name: "Weddings",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1532713031318-db2d14e4b3e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80",
    imageAlt: "a wedding",
  },
  {
    name: "Corporate events",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80",
    imageAlt: "person writing notes ",
  },
]
const trendingProducts = [
  {
    id: 1,
    name: "Leather Long Wallet",
    color: "Natural",
    price: "$75",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
    imageAlt: "Hand stitched, orange leather long wallet.",
  },
  {
    id: 1,
    name: "Leather Long Wallet",
    color: "Natural",
    price: "$75",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
    imageAlt: "Hand stitched, orange leather long wallet.",
  },
  {
    id: 1,
    name: "Leather Long Wallet",
    color: "Natural",
    price: "$75",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
    imageAlt: "Hand stitched, orange leather long wallet.",
  },
  // More products...
]
const perks = [
  {
    name: "Privacy",
    imageUrl:
      "https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg",
    description:
      "Your Privacy is our priority. Our waitstaff will never take or ask for pictures",
  },
  {
    name: "Schedule",
    imageUrl:
      "https://tailwindui.com/img/ecommerce/icons/icon-calendar-light.svg",
    description:
      "Schedule us and let us take care of the rest. Be assured that your event will be ready and run smoothly",
  },
  {
    name: "Safety",
    imageUrl:
      "https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg",
    description:
      "All our staff will be provided with mask which they will wear throughout the event to gurantee your guests safety.",
  },
  {
    name: "Flexible",
    imageUrl:
      "https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg",
    description:
      "We know things change and we are ready for that. What ever happens we will do our best to accomodate",
  },
]
const footerNavigation = {
  products: [
    { name: "Bags", href: "#" },
    { name: "Tees", href: "#" },
    { name: "Objects", href: "#" },
    { name: "Home Goods", href: "#" },
    { name: "Accessories", href: "#" },
  ],
  company: [
    { name: "Who we are", href: "#" },
    { name: "Sustainability", href: "#" },
    { name: "Press", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy", href: "#" },
  ],
  customerService: [
    { name: "Contact", href: "#" },
    { name: "Shipping", href: "#" },
    { name: "Returns", href: "#" },
    { name: "Warranty", href: "#" },
    { name: "Secure Payments", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Find a store", href: "#" },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function HomeLayout() {
  const [open, setOpen] = useState(false)

  const bottomRef = React.useRef(null)

  const scrollToBottom = (e) => {
    e.preventDefault()
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="bg-white">
      <header className="relative">
        <nav aria-label="Top">
          {/* Top navigation */}

          {/* Secondary navigation */}
          <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="h-16 flex items-center justify-between">
                {/* Logo (lg+) */}
                <div className="hidden lg:flex-1 lg:flex lg:items-center">
                  <a href="#">
                    <span className="sr-only">Workflow</span>
                    <svg
                      id="Capa_1"
                      enableBackground="new 0 0 512 512"
                      className="h-8 w-auto"
                      height="512"
                      viewBox="0 0 512 512"
                      width="512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m486.466 208.294h-78.15v-38.885c20.776-3.573 36.638-21.707 36.638-43.487v-49.249c0-5.831-4.744-10.574-10.574-10.574h-67.127c-5.831 0-10.574 4.744-10.574 10.574v49.248c0 21.78 15.862 39.914 36.638 43.487v38.885h-78.15c-6.564 0-11.904 5.34-11.904 11.905v9.093c0 13.873 11.287 25.16 25.16 25.16h27.758v12.08c0 5.263 1.9 10.209 5.261 14.05l-4.09 11.275c-2.905-.834-5.974-.607-8.736.683-3.028 1.417-5.322 3.928-6.456 7.065l-19.766 54.51-11.5-33.883c-8.743-25.769-28.258-46.311-53.542-56.36l-36.93-14.68v-27.608c9.548-6.546 17.761-14.513 21.612-22.016 1.862-3.626 3.219-9.085 4.189-15.636h11.019c14.265 0 25.87-11.605 25.87-25.87 0-6.199-2.195-11.894-5.847-16.353 10.01-26.781 14.297-46.152 12.727-57.596-1.263-9.207-6.668-17.623-15.631-24.338-6.181-4.631-12.803-7.521-17.851-8.958-15.325-20.874-58.827-49.04-100.462-50.806-3.75-.165-7.252 1.756-9.153 4.999-1.912 3.26-1.87 7.28.102 10.478 1.86 3.03 3.343 5.55 4.541 7.677-16.833-4.488-46.393-9.395-74.599.541-3.173 1.112-5.584 3.719-6.45 6.974-.868 3.264-.068 6.735 2.155 9.301 7.445 8.545 15.48 16.463 20.346 21.098-6.877 12.684-20.171 44.99-2.808 81.721-3.142 4.281-5.003 9.558-5.003 15.264 0 14.265 11.601 25.87 25.86 25.87h11.013c.966 6.48 2.321 11.969 4.202 15.63 3.848 7.508 12.063 15.48 21.614 22.028v25.583c-27.456 2.882-54.218 21.669-81.572 57.191-2.527 3.282-1.916 7.991 1.367 10.518 1.363 1.05 2.973 1.558 4.57 1.558 2.248 0 4.471-1.006 5.948-2.925 10.606-13.773 20.968-24.735 31.175-32.967l10.233 59.003c2.15 12.396-1.264 25.213-9.148 34.903h-10.264v-21.463c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v21.492c-15.17.596-27.33 13.117-27.33 28.43v29.139c-16.376-1.595-29.218-15.441-29.218-32.234 0-6.032 1.885-12.253 5.449-17.989 2.496-4.014 18.175-30.267 24.031-39.433 2.23-3.49 1.208-8.128-2.283-10.358-3.49-2.23-8.128-1.209-10.358 2.283-5.978 9.356-11.329 18.316-16.05 26.221-2.907 4.868-5.653 9.466-8.08 13.368-5.044 8.116-7.71 17.075-7.71 25.908 0 25.067 19.563 45.639 44.218 47.273v8.852c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-53.03c0-7.421 6.038-13.459 13.459-13.459h79.629v107.545h-21.963v-36.563c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v36.563h-19.162v-14.532c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v14.532h-21.961v-6.055c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v11.505c0 5.266 4.284 9.549 9.549 9.549h203.091c6.964 0 12.63-5.661 12.63-12.62v-44.382c8.225 15.245 24.323 24.821 41.592 24.821 2.456 0 4.937-.194 7.419-.592 16.913-2.714 31.046-14.403 36.884-30.506l24.628-67.933c1.412-3.894-.601-8.195-4.495-9.607-3.895-1.414-8.196.6-9.607 4.495l-24.628 67.933c-3.982 10.984-13.623 18.957-25.158 20.808-15.036 2.414-29.843-6.178-35.213-20.425l-11.422-30.299v-14.722c0-.051-.008-.1-.009-.151v-45.827c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v30.827l-2.939-2.24c-12.942-9.885-19.254-25.989-16.473-42.028l10.143-58.516c17.757 9.187 31.351 24.873 37.846 44.016l17.526 51.635-6.404 17.665c-1.412 3.894.601 8.195 4.495 9.607.844.306 1.707.451 2.556.451 3.067 0 5.946-1.896 7.051-4.946l27.262-75.198c.004-.01.006-.02.009-.029l6.227-17.174 43.314 15.707-7.254 19.993c-1.413 3.894.598 8.195 4.492 9.608 3.893 1.414 8.196-.598 9.608-4.492l8.109-22.35c1.139-3.138.986-6.532-.43-9.558-1.295-2.767-3.512-4.909-6.278-6.124l7.948-21.927h5.641c16.642 0 30.18-13.534 30.18-30.169v-3.3h22.473c13.873 0 25.16-11.287 25.16-25.16v-9.093c-.001-6.563-5.341-11.903-11.905-11.903zm-56.513-127.195v28.119h-58.275v-28.119zm-58.275 44.822v-1.704h58.275v1.704c0 16.066-13.071 29.138-29.138 29.138-16.066 0-29.137-13.071-29.137-29.138zm-114.439 43.011h-9.52c.437-6.946.623-14.364.643-21.73h8.876c5.994 0 10.87 4.872 10.87 10.86 0 5.994-4.876 10.87-10.869 10.87zm-168.246-133.211c29.432-7.461 59.417 1.729 68.428 4.937 3.762 1.341 7.981.35 10.747-2.527 2.758-2.868 3.583-7.106 2.112-10.774-1.023-2.578-2.51-5.926-5.641-11.493 35.141 5.04 70.497 29.177 81 45.608 1.115 1.746 2.903 2.952 4.939 3.333 7.496 1.403 22.903 9.346 24.55 21.348 1.126 8.208-2.757 25.134-10.723 47.067-2.277-.658-4.68-1.017-7.167-1.017h-9.045c-.356-14.711-1.188-27.573-1.734-33.715-.926-10.555-9.628-18.514-20.241-18.514h-22.81c-1.946 0-3.816.756-5.215 2.11-19.495 18.86-44.93 31.597-71.619 35.864-3.541.566-6.186 3.559-6.312 7.142-.078 2.212-.15 4.601-.21 7.113h-9.014c-2.99 0-5.859.516-8.533 1.453-15.818-37.156 5.224-68.247 6.17-69.612 2.176-3.097 1.702-7.331-1.104-9.871-.106-.097-9.202-8.355-18.578-18.452zm22.047 133.211c-5.988 0-10.86-4.876-10.86-10.87 0-3.316 1.498-6.285 3.848-8.278.008-.007.015-.014.023-.021 1.891-1.595 4.328-2.56 6.989-2.56h8.85c.022 7.165.204 14.635.653 21.73h-9.503zm28.561 23.783c-1.481-2.884-2.643-8.63-3.443-16.527-.011-.335-.044-.663-.097-.986-.888-9.313-1.291-21.453-1.138-35.357.001-.048.007-.095.007-.143 0-.028-.004-.055-.004-.084.03-2.601.078-5.261.147-7.977 26.446-5.415 51.474-18.265 71.324-36.668h19.823c2.779 0 5.057 2.075 5.299 4.833 1.223 13.767 1.812 26.893 1.937 38.754-.057.373-.096.753-.096 1.142 0 .436.045.861.117 1.277.141 26.691-2.1 46.502-4.789 51.738-3.025 5.894-10.982 12.902-19.768 18.438-.069.044-.142.084-.21.13-8.744 5.479-18.275 9.487-24.57 9.487-12.685 0-38.49-16.254-44.539-28.057zm44.538 43.057c6.133 0 13.656-2.157 21.28-5.651v24.161c0 2.131.916 4.098 2.421 5.491l-3.163 8.218c-14.023 9.067-27.235 9.025-41.269-.132l-3.081-7.96c1.556-1.374 2.543-3.379 2.543-5.618v-24.155c7.619 3.491 15.138 5.646 21.269 5.646zm12.89 52.087-12.903 33.519-12.99-33.555c4.323 1.232 8.667 1.858 13.011 1.858 4.301-.001 8.601-.615 12.882-1.822zm6.142 106.67h8.06c8.473 0 15.367 6.894 15.367 15.367v4.87c0 8.473-6.894 15.367-15.367 15.367h-30.294v-50.505c0-.559.455-1.014 1.014-1.014h13.263c.252 0 .457.205.457.457v7.958c0 4.142 3.358 7.5 7.5 7.5zm52.902-1.023 12.037 9.172v12.358c0 .054.007.107.008.161 0 .023 0 .045.001.068v81.735h-87.182v-51.868h30.294c16.744 0 30.367-13.623 30.367-30.367v-4.87c0-16.745-13.623-30.367-30.367-30.367h-.56v-.458c0-8.523-6.934-15.457-15.457-15.457h-13.263c-7.019 0-12.983 4.546-15.141 10.843h-38.478c6.024-11.363 8.272-24.582 6.037-37.467l-11.418-65.838c7.509-4.315 14.954-7.127 22.372-8.459l27.152 70.139c1.879 4.853 6.453 7.987 11.656 7.987h.012c5.208-.005 9.782-3.148 11.654-8.009l25.795-67.009 23.076 9.173-10.75 62.016c-3.739 21.568 4.747 43.222 22.155 56.517zm179.665-135.754c0 8.364-6.81 15.169-15.18 15.169h-10.9c-3.157 0-5.976 1.977-7.051 4.944l-9.724 26.828-21.417-7.766 5.822-16.048c1.206-3.324-.074-7.039-3.071-8.915-1.903-1.191-3.039-3.223-3.039-5.433v-12.08h64.56zm47.632-28.46c0 5.602-4.558 10.16-10.16 10.16h-144.79c-5.602 0-10.16-4.558-10.16-10.16v-5.998h165.11z" />
                    </svg>
                  </a>
                </div>
                <div className="hidden h-full lg:flex">
                  {/* Flyout menus */}
                  <Popover.Group className="px-4 bottom-0 inset-x-0">
                    <div className="h-full flex justify-center space-x-8">
                      {navigation.categories.map((category) => (
                        <Popover key={category.name} className="flex">
                          {({ open }) => (
                            <>
                              <div className="relative flex">
                                <Popover.Button
                                  className={classNames(
                                    open
                                      ? "text-indigo-600"
                                      : "text-gray-700 hover:text-gray-800",
                                    "relative flex items-center justify-center transition-colors ease-out duration-200 text-sm font-medium"
                                  )}
                                >
                                  {category.name}
                                  <span
                                    className={classNames(
                                      open ? "bg-indigo-600" : "",
                                      "absolute z-20 -bottom-px inset-x-0 h-0.5 transition ease-out duration-200"
                                    )}
                                    aria-hidden="true"
                                  />
                                </Popover.Button>
                              </div>

                              <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <Popover.Panel className="absolute z-10 top-full inset-x-0 bg-white text-sm text-gray-500">
                                  {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                  <div
                                    className="absolute inset-0 top-1/2 bg-white shadow"
                                    aria-hidden="true"
                                  />
                                  {/* Fake border when menu is open */}
                                  <div
                                    className="absolute inset-0 top-0 h-px max-w-7xl mx-auto px-8"
                                    aria-hidden="true"
                                  >
                                    <div
                                      className={classNames(
                                        open ? "bg-gray-200" : "bg-transparent",
                                        "w-full h-px transition-colors ease-out duration-200"
                                      )}
                                    />
                                  </div>

                                  <div className="relative">
                                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                      <div className="grid grid-cols-4 gap-y-10 gap-x-8 py-16">
                                        {category.featured.map((item) => (
                                          <div
                                            key={item.name}
                                            className="group relative"
                                          >
                                            <div className="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                              <img
                                                src={item.imageSrc}
                                                alt={item.imageAlt}
                                                className="object-center object-cover"
                                              />
                                            </div>
                                            <a
                                              href={item.href}
                                              className="mt-4 block font-medium text-gray-900"
                                            >
                                              <span
                                                className="absolute z-10 inset-0"
                                                aria-hidden="true"
                                              />
                                              {item.name}
                                            </a>
                                            <p
                                              aria-hidden="true"
                                              className="mt-1"
                                            >
                                              Shop now
                                            </p>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </Popover.Panel>
                              </Transition>
                            </>
                          )}
                        </Popover>
                      ))}
                    </div>
                  </Popover.Group>
                </div>
                {/* Mobile menu and search (lg-) */}
                <div className="flex-1 flex items-center lg:hidden">
                  {/* Search */}
                </div>
                {/* Logo (lg-) */}
                <a href="#" className="lg:hidden">
                  <span className="sr-only">Guy friday</span>
                  <svg
                    id="Capa_1"
                    enableBackground="new 0 0 512 512"
                    className="h-8 w-auto"
                    height="512"
                    viewBox="0 0 512 512"
                    width="512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m486.466 208.294h-78.15v-38.885c20.776-3.573 36.638-21.707 36.638-43.487v-49.249c0-5.831-4.744-10.574-10.574-10.574h-67.127c-5.831 0-10.574 4.744-10.574 10.574v49.248c0 21.78 15.862 39.914 36.638 43.487v38.885h-78.15c-6.564 0-11.904 5.34-11.904 11.905v9.093c0 13.873 11.287 25.16 25.16 25.16h27.758v12.08c0 5.263 1.9 10.209 5.261 14.05l-4.09 11.275c-2.905-.834-5.974-.607-8.736.683-3.028 1.417-5.322 3.928-6.456 7.065l-19.766 54.51-11.5-33.883c-8.743-25.769-28.258-46.311-53.542-56.36l-36.93-14.68v-27.608c9.548-6.546 17.761-14.513 21.612-22.016 1.862-3.626 3.219-9.085 4.189-15.636h11.019c14.265 0 25.87-11.605 25.87-25.87 0-6.199-2.195-11.894-5.847-16.353 10.01-26.781 14.297-46.152 12.727-57.596-1.263-9.207-6.668-17.623-15.631-24.338-6.181-4.631-12.803-7.521-17.851-8.958-15.325-20.874-58.827-49.04-100.462-50.806-3.75-.165-7.252 1.756-9.153 4.999-1.912 3.26-1.87 7.28.102 10.478 1.86 3.03 3.343 5.55 4.541 7.677-16.833-4.488-46.393-9.395-74.599.541-3.173 1.112-5.584 3.719-6.45 6.974-.868 3.264-.068 6.735 2.155 9.301 7.445 8.545 15.48 16.463 20.346 21.098-6.877 12.684-20.171 44.99-2.808 81.721-3.142 4.281-5.003 9.558-5.003 15.264 0 14.265 11.601 25.87 25.86 25.87h11.013c.966 6.48 2.321 11.969 4.202 15.63 3.848 7.508 12.063 15.48 21.614 22.028v25.583c-27.456 2.882-54.218 21.669-81.572 57.191-2.527 3.282-1.916 7.991 1.367 10.518 1.363 1.05 2.973 1.558 4.57 1.558 2.248 0 4.471-1.006 5.948-2.925 10.606-13.773 20.968-24.735 31.175-32.967l10.233 59.003c2.15 12.396-1.264 25.213-9.148 34.903h-10.264v-21.463c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v21.492c-15.17.596-27.33 13.117-27.33 28.43v29.139c-16.376-1.595-29.218-15.441-29.218-32.234 0-6.032 1.885-12.253 5.449-17.989 2.496-4.014 18.175-30.267 24.031-39.433 2.23-3.49 1.208-8.128-2.283-10.358-3.49-2.23-8.128-1.209-10.358 2.283-5.978 9.356-11.329 18.316-16.05 26.221-2.907 4.868-5.653 9.466-8.08 13.368-5.044 8.116-7.71 17.075-7.71 25.908 0 25.067 19.563 45.639 44.218 47.273v8.852c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-53.03c0-7.421 6.038-13.459 13.459-13.459h79.629v107.545h-21.963v-36.563c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v36.563h-19.162v-14.532c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v14.532h-21.961v-6.055c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v11.505c0 5.266 4.284 9.549 9.549 9.549h203.091c6.964 0 12.63-5.661 12.63-12.62v-44.382c8.225 15.245 24.323 24.821 41.592 24.821 2.456 0 4.937-.194 7.419-.592 16.913-2.714 31.046-14.403 36.884-30.506l24.628-67.933c1.412-3.894-.601-8.195-4.495-9.607-3.895-1.414-8.196.6-9.607 4.495l-24.628 67.933c-3.982 10.984-13.623 18.957-25.158 20.808-15.036 2.414-29.843-6.178-35.213-20.425l-11.422-30.299v-14.722c0-.051-.008-.1-.009-.151v-45.827c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v30.827l-2.939-2.24c-12.942-9.885-19.254-25.989-16.473-42.028l10.143-58.516c17.757 9.187 31.351 24.873 37.846 44.016l17.526 51.635-6.404 17.665c-1.412 3.894.601 8.195 4.495 9.607.844.306 1.707.451 2.556.451 3.067 0 5.946-1.896 7.051-4.946l27.262-75.198c.004-.01.006-.02.009-.029l6.227-17.174 43.314 15.707-7.254 19.993c-1.413 3.894.598 8.195 4.492 9.608 3.893 1.414 8.196-.598 9.608-4.492l8.109-22.35c1.139-3.138.986-6.532-.43-9.558-1.295-2.767-3.512-4.909-6.278-6.124l7.948-21.927h5.641c16.642 0 30.18-13.534 30.18-30.169v-3.3h22.473c13.873 0 25.16-11.287 25.16-25.16v-9.093c-.001-6.563-5.341-11.903-11.905-11.903zm-56.513-127.195v28.119h-58.275v-28.119zm-58.275 44.822v-1.704h58.275v1.704c0 16.066-13.071 29.138-29.138 29.138-16.066 0-29.137-13.071-29.137-29.138zm-114.439 43.011h-9.52c.437-6.946.623-14.364.643-21.73h8.876c5.994 0 10.87 4.872 10.87 10.86 0 5.994-4.876 10.87-10.869 10.87zm-168.246-133.211c29.432-7.461 59.417 1.729 68.428 4.937 3.762 1.341 7.981.35 10.747-2.527 2.758-2.868 3.583-7.106 2.112-10.774-1.023-2.578-2.51-5.926-5.641-11.493 35.141 5.04 70.497 29.177 81 45.608 1.115 1.746 2.903 2.952 4.939 3.333 7.496 1.403 22.903 9.346 24.55 21.348 1.126 8.208-2.757 25.134-10.723 47.067-2.277-.658-4.68-1.017-7.167-1.017h-9.045c-.356-14.711-1.188-27.573-1.734-33.715-.926-10.555-9.628-18.514-20.241-18.514h-22.81c-1.946 0-3.816.756-5.215 2.11-19.495 18.86-44.93 31.597-71.619 35.864-3.541.566-6.186 3.559-6.312 7.142-.078 2.212-.15 4.601-.21 7.113h-9.014c-2.99 0-5.859.516-8.533 1.453-15.818-37.156 5.224-68.247 6.17-69.612 2.176-3.097 1.702-7.331-1.104-9.871-.106-.097-9.202-8.355-18.578-18.452zm22.047 133.211c-5.988 0-10.86-4.876-10.86-10.87 0-3.316 1.498-6.285 3.848-8.278.008-.007.015-.014.023-.021 1.891-1.595 4.328-2.56 6.989-2.56h8.85c.022 7.165.204 14.635.653 21.73h-9.503zm28.561 23.783c-1.481-2.884-2.643-8.63-3.443-16.527-.011-.335-.044-.663-.097-.986-.888-9.313-1.291-21.453-1.138-35.357.001-.048.007-.095.007-.143 0-.028-.004-.055-.004-.084.03-2.601.078-5.261.147-7.977 26.446-5.415 51.474-18.265 71.324-36.668h19.823c2.779 0 5.057 2.075 5.299 4.833 1.223 13.767 1.812 26.893 1.937 38.754-.057.373-.096.753-.096 1.142 0 .436.045.861.117 1.277.141 26.691-2.1 46.502-4.789 51.738-3.025 5.894-10.982 12.902-19.768 18.438-.069.044-.142.084-.21.13-8.744 5.479-18.275 9.487-24.57 9.487-12.685 0-38.49-16.254-44.539-28.057zm44.538 43.057c6.133 0 13.656-2.157 21.28-5.651v24.161c0 2.131.916 4.098 2.421 5.491l-3.163 8.218c-14.023 9.067-27.235 9.025-41.269-.132l-3.081-7.96c1.556-1.374 2.543-3.379 2.543-5.618v-24.155c7.619 3.491 15.138 5.646 21.269 5.646zm12.89 52.087-12.903 33.519-12.99-33.555c4.323 1.232 8.667 1.858 13.011 1.858 4.301-.001 8.601-.615 12.882-1.822zm6.142 106.67h8.06c8.473 0 15.367 6.894 15.367 15.367v4.87c0 8.473-6.894 15.367-15.367 15.367h-30.294v-50.505c0-.559.455-1.014 1.014-1.014h13.263c.252 0 .457.205.457.457v7.958c0 4.142 3.358 7.5 7.5 7.5zm52.902-1.023 12.037 9.172v12.358c0 .054.007.107.008.161 0 .023 0 .045.001.068v81.735h-87.182v-51.868h30.294c16.744 0 30.367-13.623 30.367-30.367v-4.87c0-16.745-13.623-30.367-30.367-30.367h-.56v-.458c0-8.523-6.934-15.457-15.457-15.457h-13.263c-7.019 0-12.983 4.546-15.141 10.843h-38.478c6.024-11.363 8.272-24.582 6.037-37.467l-11.418-65.838c7.509-4.315 14.954-7.127 22.372-8.459l27.152 70.139c1.879 4.853 6.453 7.987 11.656 7.987h.012c5.208-.005 9.782-3.148 11.654-8.009l25.795-67.009 23.076 9.173-10.75 62.016c-3.739 21.568 4.747 43.222 22.155 56.517zm179.665-135.754c0 8.364-6.81 15.169-15.18 15.169h-10.9c-3.157 0-5.976 1.977-7.051 4.944l-9.724 26.828-21.417-7.766 5.822-16.048c1.206-3.324-.074-7.039-3.071-8.915-1.903-1.191-3.039-3.223-3.039-5.433v-12.08h64.56zm47.632-28.46c0 5.602-4.558 10.16-10.16 10.16h-144.79c-5.602 0-10.16-4.558-10.16-10.16v-5.998h165.11z" />
                  </svg>
                </a>
                <div className="flex-1 flex items-center justify-end">
                  <div className="flex items-center lg:ml-8">
                    {/* Help */}

                    {/* Cart */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero section */}
        <div className="relative">
          {/* Background image and overlap */}
          <div
            aria-hidden="true"
            className="hidden absolute inset-0 sm:flex sm:flex-col"
          >
            <div className="flex-1 relative w-full bg-gray-800">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1531058020387-3be344556be6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80"
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gray-900 opacity-50" />
            </div>
            <div className="w-full bg-white h-32 md:h-40 lg:h-48" />
          </div>

          <div className="relative max-w-3xl mx-auto pb-96 px-4 text-center sm:pb-0 sm:px-6 lg:px-8">
            {/* Background image and overlap */}
            <div
              aria-hidden="true"
              className="absolute inset-0 flex flex-col sm:hidden"
            >
              <div className="flex-1 relative w-full bg-gray-800">
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/home-page-04-hero-full-width.jpg"
                    alt=""
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gray-900 opacity-50" />
              </div>
              <div className="w-full bg-white h-48" />
            </div>
            <div className="relative py-32">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                Guy Friday Events
              </h1>
              {/* <div className="mt-4 sm:mt-6">
                <a
                  href="#"
                  className="inline-block bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"
                >
                  Shop Collection
                </a>
              </div> */}
            </div>
          </div>

          <section
            aria-labelledby="collection-heading"
            className="-mt-96 relative sm:mt-0"
          >
            <h2 id="collection-heading" className="sr-only">
              Collections
            </h2>
            <div className="max-w-md mx-auto grid grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:px-6 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:px-8 lg:gap-x-8">
              {collections.map((collection) => (
                <div
                  onClick={(e) => scrollToBottom(e)}
                  key={collection.name}
                  className="group relative h-96 bg-white rounded-lg shadow-xl sm:h-auto sm:aspect-w-4 sm:aspect-h-5"
                >
                  <div>
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 rounded-lg overflow-hidden"
                    >
                      <div className="absolute inset-0 overflow-hidden group-hover:opacity-75">
                        <img
                          src={collection.imageSrc}
                          alt={collection.imageAlt}
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
                    </div>
                    <div className="absolute inset-0 rounded-lg p-6 flex items-end">
                      <div>
                        <p aria-hidden="true" className="text-sm text-white">
                          We do
                        </p>
                        <h3 className="mt-1 font-semibold text-white">
                          <a href={collection.href}>
                            <span className="absolute inset-0" />
                            {collection.name}
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section aria-labelledby="trending-heading">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 sm:py-16 lg:pt-16 lg:px-8"></div>
        </section>

        <section
          aria-labelledby="perks-heading"
          className="bg-gray-50 border-t border-gray-200"
        >
          <h2 id="perks-heading" className="sr-only">
            Our perks
          </h2>

          <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:px-8">
            <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
              {perks.map((perk) => (
                <div
                  key={perk.name}
                  className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                >
                  <div className="md:flex-shrink-0">
                    <div className="flow-root">
                      {perk.name === "Privacy" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="-my-1 h-16 w-auto mx-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                          />
                        </svg>
                      ) : perk.name === "Schedule" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="-my-1 h-16 w-auto mx-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      ) : perk.name === "Safety" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="-my-1 h-16 w-auto mx-auto"
                          viewBox="0 0 20 20"
                          stroke="currentColor"
                        >
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                        </svg>
                      ) : perk.name === "Flexible" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="-my-1 h-16 w-auto mx-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                          />
                        </svg>
                      ) : null}
                    </div>
                  </div>
                  <div className="mt-6 md:mt-0 md:ml-4 lg:mt-6 lg:ml-0">
                    <h3 className="text-sm font-semibold tracking-wide uppercase text-gray-900">
                      {perk.name}
                    </h3>
                    <p className="mt-3 text-sm text-gray-500">
                      {perk.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer aria-labelledby="footer-heading" className="bg-gray-50">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <ContactFooter innerRef={bottomRef} />
      </footer>
    </div>
  )
}
