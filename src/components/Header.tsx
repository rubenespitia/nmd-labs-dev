import React from "react";

export default function Component() {
  return (
    <>
      <div
        className="fixed w-full _header backdrop-blur-lg _border-b-theme svelte-1j0bvgh"
        style={{
          borderWidth: "0px",
          background: "rgb(21, 21, 21)", 
          borderStyle: "solid",
          borderColor: "rgb(229, 231, 235)",
          boxSizing: "border-box",
          position: "fixed",
          backdropFilter:
            "blur(16px) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)",
          borderBottom: "1px rgba(255,255,255,.1) solid",
          padding: "0.25rem",
          width: "100%",
          zIndex: 100,
          color: "rgb(245, 245, 245)",
          fontFamily: "Poppins",
          fontSize: "18px",
          font: "18px / 27.9px Poppins",
          lineHeight: "27.9px",
        }}
      >
        <div
          className="px-4 sm:px-0 mb-4 _header-content flex justify-between items-center svelte-1j0bvgh"
          style={{
            borderWidth: "0px",
            borderStyle: "solid",
            borderColor: "rgb(229, 231, 235)",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: "0px",
            paddingRight: "0px",
            margin: "0px auto",
            maxWidth: "1200px",
            marginBottom: "0px",
          }}
        >
          <div
            className="flex flex-grow py-4 sm:py-0"
            style={{
              borderWidth: "0px",
              borderStyle: "solid",
              borderColor: "rgb(229, 231, 235)",
              boxSizing: "border-box",
              display: "flex",
              flexGrow: 1,
              paddingTop: "0px",
              paddingBottom: "0px",
            }}
          >
            <a
              className="flex items-center shrink-0 _logo"
              href="https://nmdmkt.com/"
              style={{
                borderWidth: "0px",
                borderStyle: "solid",
                borderColor: "rgb(229, 231, 235)",
                boxSizing: "border-box",
                textDecoration: "inherit",
                color: "inherit",
                display: "flex",
                flexShrink: 0,
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <div
                className="inline-block"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  display: "inline-block",
                }}
              >
                <div
                  className="mr-3 rounded _emoji flex svelte-10e1qk5"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    marginRight: "0.75rem",
                    display: "flex",
                    borderRadius: "0.25rem",
                    fontSize: "32px",
                    lineHeight: 1,
                  }}
                >
                  <img
                    className="rounded"
                    alt="Logo"
                    src={`${process.env.PUBLIC_URL}/assets/stock_images/nomad_logo.jpg`}
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "block",
                      verticalAlign: "middle",
                      maxWidth: "100%",
                      borderRadius: "0.25rem",
                      width: "32px",
                      height: "32px",
                    }}
                  />
                </div>
              </div>{" "}
              <span
                className="font-medium text-base"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  fontSize: "1rem",
                  lineHeight: "1.5rem",
                  fontWeight: 500,
                  fontFamily: "Helvetica",
                }}
              >
                NOMADA LABS
              </span>
            </a>{" "}
            <div
              className="hidden ml-8 sm:flex items-center justify-end text-sm py-1 gap-4 w-full mr-8"
              style={{
                borderWidth: "0px",/* Fondo opcional para mejor visualización */
                borderStyle: "solid",
                borderColor: "rgb(229, 231, 235)",
                boxSizing: "border-box",
                marginLeft: "2rem",
                marginRight: "2rem",
                width: "100%",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: "1rem",
                paddingTop: "0.25rem",
                paddingBottom: "0.25rem",
                fontSize: "0.875rem",
                lineHeight: "1.25rem",
                display: "flex",
                zIndex: 50,
              }}
            >
              {" "}
              <div
                className="group relative"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  position: "relative",
                }}
              >
                <div
                  className="font-medium flex items-center justify-center group-hover:bg-cta-stronger p-1 rounded cursor-pointer"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    display: "flex",
                    cursor: "pointer",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "0.25rem",
                    padding: "0.25rem",
                    fontWeight: 500,
                    fontFamily:"Helvetica"
                  }}
                >
                  Servicios{" "}
                  <div
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                    }}
                  >
                    <svg
                      className="feather feather-chevron-down ml-1 group-hover:rotate-180 origin-center transition svelte-17vecal"
                      height="15"
                      width="15"
                      fill="none"
                      stroke="#f6f5f4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "block",
                        verticalAlign: "middle",
                        marginLeft: "0.25rem",
                        transformOrigin: "center center",
                        transitionProperty:
                          "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter",
                        transitionTimingFunction:
                          "cubic-bezier(0.4, 0, 0.2, 1)",
                        transitionDuration: "0.15s",
                      }}
                    >
                      <polyline
                        points="6 9 12 15 18 9"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                        }}
                      />
                    </svg>{" "}
                    <i
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                </div>{" "}
                <div
                  className="hidden opacity-0 group-hover:opacity-100 group-hover:block transition duration-300 absolute top-[20px] py-6 right-0 rounded min-w-[200px]"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    position: "absolute",
                    right: "0px",
                    top: "20px",
                    display: "none",
                    minWidth: "200px",
                    borderRadius: "0.25rem",
                    paddingTop: "1.5rem",
                    paddingBottom: "1.5rem",
                    opacity: 0,
                    transitionProperty:
                      "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    transitionDuration: "0.3s",
                    transform: "translateY(0%)",
                  }}
                >
                  <div
                    className="_bg-cta ring-1 ring-white/30 p-3 shadow-md shadow-black flex flex-col gap-2 rounded"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                      borderRadius: "0.25rem",
                      padding: "0.75rem",
                      boxShadow:
                        "0 0 0 0px #fff,0 0 0 calc(1px + 0px) rgb(255 255 255 / .3),var(--tw-shadow, 0 0 #0000)",
                      background: "#181818",
                    }}
                  >
                    <a
                      className="block shrink-0 px-2 py-2 cursor-pointer rounded transition duration-75 hover:bg-cta-stronger"
                      href="https://saltnbold.com/services"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        textDecoration: "inherit",
                        color: "inherit",
                        display: "block",
                        flexShrink: 0,
                        borderRadius: "0.25rem",
                        paddingLeft: "0.5rem",
                        paddingRight: "0.5rem",
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        transitionProperty:
                          "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter",
                        transitionTimingFunction:
                          "cubic-bezier(0.4, 0, 0.2, 1)",
                        transitionDuration: "75ms",
                        cursor: "pointer",
                      }}
                    >
                      All services{" "}
                    </a>
                    <a
                      className="block shrink-0 px-2 py-2 cursor-pointer rounded transition duration-75 hover:bg-cta-stronger"
                      href="https://saltnbold.com/services/logo"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        textDecoration: "inherit",
                        color: "inherit",
                        display: "block",
                        flexShrink: 0,
                        borderRadius: "0.25rem",
                        paddingLeft: "0.5rem",
                        paddingRight: "0.5rem",
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        transitionProperty:
                          "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter",
                        transitionTimingFunction:
                          "cubic-bezier(0.4, 0, 0.2, 1)",
                        transitionDuration: "75ms",
                        cursor: "pointer",
                      }}
                    >
                      Logo & branding{" "}
                    </a>
                    <a
                      className="block shrink-0 px-2 py-2 cursor-pointer rounded transition duration-75 hover:bg-cta-stronger"
                      href="https://saltnbold.com/services/social-media-asset"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        textDecoration: "inherit",
                        color: "inherit",
                        display: "block",
                        flexShrink: 0,
                        borderRadius: "0.25rem",
                        paddingLeft: "0.5rem",
                        paddingRight: "0.5rem",
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        transitionProperty:
                          "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter",
                        transitionTimingFunction:
                          "cubic-bezier(0.4, 0, 0.2, 1)",
                        transitionDuration: "75ms",
                        cursor: "pointer",
                      }}
                    >
                      Social media asset{" "}
                    </a>
                    <a
                      className="block shrink-0 px-2 py-2 cursor-pointer rounded transition duration-75 hover:bg-cta-stronger"
                      href="https://saltnbold.com/services/uiux-prototype"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        textDecoration: "inherit",
                        color: "inherit",
                        display: "block",
                        flexShrink: 0,
                        borderRadius: "0.25rem",
                        paddingLeft: "0.5rem",
                        paddingRight: "0.5rem",
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        transitionProperty:
                          "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter",
                        transitionTimingFunction:
                          "cubic-bezier(0.4, 0, 0.2, 1)",
                        transitionDuration: "75ms",
                        cursor: "pointer",
                      }}
                    >
                      Product prototype{" "}
                    </a>
                    <a
                      className="block shrink-0 px-2 py-2 cursor-pointer rounded transition duration-75 hover:bg-cta-stronger"
                      href="https://saltnbold.com/services/landing-page"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        textDecoration: "inherit",
                        color: "inherit",
                        display: "block",
                        flexShrink: 0,
                        borderRadius: "0.25rem",
                        paddingLeft: "0.5rem",
                        paddingRight: "0.5rem",
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        transitionProperty:
                          "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter",
                        transitionTimingFunction:
                          "cubic-bezier(0.4, 0, 0.2, 1)",
                        transitionDuration: "75ms",
                        cursor: "pointer",
                      }}
                    >
                      Landing page{" "}
                    </a>
                    <a
                      className="block shrink-0 px-2 py-2 cursor-pointer rounded transition duration-75 hover:bg-cta-stronger"
                      href="https://saltnbold.com/services/pitch-deck"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        textDecoration: "inherit",
                        color: "inherit",
                        display: "block",
                        flexShrink: 0,
                        borderRadius: "0.25rem",
                        paddingLeft: "0.5rem",
                        paddingRight: "0.5rem",
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        transitionProperty:
                          "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter",
                        transitionTimingFunction:
                          "cubic-bezier(0.4, 0, 0.2, 1)",
                        transitionDuration: "75ms",
                        cursor: "pointer",
                      }}
                    >
                      Pitch deck{" "}
                    </a>
                    <a
                      className="block shrink-0 px-2 py-2 cursor-pointer rounded transition duration-75 hover:bg-cta-stronger"
                      href="https://saltnbold.com/services/uiux-audit-of-your-website"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        textDecoration: "inherit",
                        color: "inherit",
                        display: "block",
                        flexShrink: 0,
                        borderRadius: "0.25rem",
                        paddingLeft: "0.5rem",
                        paddingRight: "0.5rem",
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        transitionProperty:
                          "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter",
                        transitionTimingFunction:
                          "cubic-bezier(0.4, 0, 0.2, 1)",
                        transitionDuration: "75ms",
                        cursor: "pointer",
                      }}
                    >
                      Design audit{" "}
                    </a>
                    <a
                      className="block shrink-0 px-2 py-2 cursor-pointer rounded transition duration-75 hover:bg-cta-stronger"
                      href="https://saltnbold.com/services/design-subscription"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        textDecoration: "inherit",
                        color: "inherit",
                        display: "block",
                        flexShrink: 0,
                        borderRadius: "0.25rem",
                        paddingLeft: "0.5rem",
                        paddingRight: "0.5rem",
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        transitionProperty:
                          "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter",
                        transitionTimingFunction:
                          "cubic-bezier(0.4, 0, 0.2, 1)",
                        transitionDuration: "75ms",
                        cursor: "pointer",
                      }}
                    >
                      Design subscription{" "}
                    </a>
                  </div>
                </div>{" "}
              </div>
              <div
                className="group relative"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  position: "relative",
                }}
              >
                <div
                  className="font-medium flex items-center justify-center group-hover:bg-cta-stronger p-1 rounded cursor-pointer"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    display: "flex",
                    cursor: "pointer",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "0.25rem",
                    padding: "0.25rem",
                    fontWeight: 500,
                  }}
                >
                  {/* Free resources{" "} */}
                  <div
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                    }}
                  >

                    <i
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                </div>{" "}
                <div
                  className="hidden opacity-0 group-hover:opacity-100 group-hover:block transition duration-300 absolute top-[20px] py-6 right-0 rounded min-w-[200px]"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    position: "absolute",
                    right: "0px",
                    top: "20px",
                    display: "none",
                    minWidth: "200px",
                    borderRadius: "0.25rem",
                    paddingTop: "1.5rem",
                    paddingBottom: "1.5rem",
                    opacity: 0,
                    transitionProperty:
                      "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    transitionDuration: "0.3s",
                    transform: "translateY(0%)",
                  }}
                >
                  <div
                    className="_bg-cta ring-1 ring-white/30 p-3 shadow-md shadow-black flex flex-col gap-2 rounded"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                      borderRadius: "0.25rem",
                      padding: "0.75rem",
                      boxShadow:
                        "0 0 0 0px #fff,0 0 0 calc(1px + 0px) rgb(255 255 255 / .3),var(--tw-shadow, 0 0 #0000)",
                      background: "#181818",
                    }}
                  >
                    <a
                      className="block shrink-0 px-2 py-2 cursor-pointer rounded transition duration-75 hover:bg-cta-stronger"
                      href="https://saltnbold.com/resources/free-tools"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        textDecoration: "inherit",
                        color: "inherit",
                        display: "block",
                        flexShrink: 0,
                        borderRadius: "0.25rem",
                        paddingLeft: "0.5rem",
                        paddingRight: "0.5rem",
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        transitionProperty:
                          "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter",
                        transitionTimingFunction:
                          "cubic-bezier(0.4, 0, 0.2, 1)",
                        transitionDuration: "75ms",
                        cursor: "pointer",
                      }}
                    >
                      Free Tools{" "}
                    </a>
                    <a
                      className="block shrink-0 px-2 py-2 cursor-pointer rounded transition duration-75 hover:bg-cta-stronger"
                      href="https://saltnbold.com/resources/hero-figma-kit"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        textDecoration: "inherit",
                        color: "inherit",
                        display: "block",
                        flexShrink: 0,
                        borderRadius: "0.25rem",
                        paddingLeft: "0.5rem",
                        paddingRight: "0.5rem",
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        transitionProperty:
                          "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter",
                        transitionTimingFunction:
                          "cubic-bezier(0.4, 0, 0.2, 1)",
                        transitionDuration: "75ms",
                        cursor: "pointer",
                      }}
                    >
                      Hero Figma Kit{" "}
                    </a>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>{" "}
          <div
            style={{
              borderWidth: "0px",
              borderStyle: "solid",
              borderColor: "rgb(229, 231, 235)",
              boxSizing: "border-box",
            }}
          >
            <div
              className="sm:hidden"
              style={{
                borderWidth: "0px",
                borderStyle: "solid",
                borderColor: "rgb(229, 231, 235)",
                boxSizing: "border-box",
                display: "none",
              }}
            >
              <svg
                className="feather feather-menu svelte-17vecal"
                height="24"
                width="24"
                fill="none"
                stroke="#f6f5f4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  display: "block",
                  verticalAlign: "middle",
                }}
              >
                <line
                  x1="3"
                  x2="21"
                  y1="12"
                  y2="12"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                  }}
                />
                <line
                  x1="3"
                  x2="21"
                  y1="6"
                  y2="6"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                  }}
                />
                <line
                  x1="3"
                  x2="21"
                  y1="18"
                  y2="18"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                  }}
                />
              </svg>{" "}
              <i
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                }}
              />
            </div>{" "}
            <div
              className="shrink-0 hidden md:flex gap-6 items-center text-sm py-1"
              style={{
                borderWidth: "0px",
                borderStyle: "solid",
                borderColor: "rgb(229, 231, 235)",
                boxSizing: "border-box",
                flexShrink: 0,
                alignItems: "center",
                gap: "1.5rem",
                paddingTop: "0.25rem",
                paddingBottom: "0.25rem",
                fontSize: "0.875rem",
                lineHeight: "1.25rem",
                display: "flex",
              }}
            >
              {" "}
              <div
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                }}
              >
                <div
                  className="flex flex-wrap justify-center sm:[justify-content:normal] svelte-1ko2zfs"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "normal",
                  }}
                >
                  <div
                    className="flex flex-row flex-wrap justify-center gap-4 sm:gap-6 items-center sm:w-auto"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "auto",
                      gap: "1.5rem",
                    }}
                  >
                    <a
                      className="shrink-0 cursor-pointer sm:w-auto _issmall svelte-1ko2zfs"
                      href="https://cal.com/team/salt-and-bold/intro-call"
                      target="_blank"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        textDecoration: "inherit",
                        color: "inherit",
                        flexShrink: 0,
                        width: "auto",
                        cursor: "pointer",
                      }}
                    >
                      <button
                        className="relative overflow-hidden shadow hover:shadow-md flex justify-center items-center svelte-1ko2zfs"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          fontFamily: "Helvetica",
                          lineHeight: "inherit",
                          textTransform: "none",
                          appearance: "button",
                          backgroundImage: "none",
                          borderRadius: "24px",
                          padding: "8px 12px",
                          cursor: "pointer",
                          backgroundColor: "rgb(179, 8, 8)",
                          transitionProperty:
                            "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter",
                          transitionTimingFunction:
                            "cubic-bezier(0.4, 0, 0.2, 1)",
                          transitionDuration: "0.15s",
                          position: "relative",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          overflow: "hidden",
                          boxShadow:
                            "var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1)",
                          color: "var(--button-color, #ffffff)",
                          fontSize: "13px",
                          fontWeight: 500,
                          
                        }}
                      >
                        {" "}
                        Llamanos →
                      </button>
                    </a>{" "}
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  border-width: 0px;
  border-style: solid;
  border-color: rgb(229, 231, 235);
  box-sizing: border-box;
  line-height: 1.5;
  text-size-adjust: 100%;
  tab-size: 4;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-feature-settings: normal;
}

body {
  border-width: 0px;
  border-style: solid;
  border-color: rgb(229, 231, 235);
  box-sizing: border-box;
  margin: 0px;
  line-height: inherit;
  font-family: var(--text-font);
  background-color: rgb(16, 16, 16);
}
`,
        }}
      />
    </>
  );
}
