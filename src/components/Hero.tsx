import React from "react";
import '../styles/AnimationsComponents.css';
import FadeInComponent from "./piezas/headers/FadeInComponent";
import HoverTapComponent from "./piezas/headers/HoverTapComponent";
import AnimatedComponent from "./piezas/headers/AnimatedComponent";


export default function Component() {
  return (
    <>
      <div
        className="h-full py-16 sm:py-24 flex items-center svelte-iy6bba"
        style={{
          borderWidth: "0px",
          borderStyle: "solid",
          borderColor: "rgb(229, 231, 235)",
          boxSizing: "border-box",
          display: "flex",
          height: "100%",
          alignItems: "center",
          paddingTop: "16rem",
          paddingBottom: "12rem",
          paddingLeft: "4rem",
          paddingRight: "2rem",
          color: "rgb(245, 245, 245)",
          fontFamily: "Poppins",
          fontSize: "18px",
          font: "18px / 27.9px Poppins",
          lineHeight: "27.9px",
          alignContent: "center",
          
          
        }}
      >
        <div
          className="p-4 xl:p-0 flex h-full w-full flex-col justify-between sm:flex-row items-center svelte-iy6bba"
          style={{
            borderWidth: "0px",
            borderStyle: "solid",
            borderColor: "rgb(229, 231, 235)",
            boxSizing: "border-box",
            display: "flex",
            height: "100%",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            padding: "0px",
            
          }}
        >
          <div
            className="w-full text-center sm:text-left items-center sm:mr-8 svelte-iy6bba"
            style={{
              borderWidth: "0px",
              borderStyle: "solid",
              borderColor: "rgb(229, 231, 235)",
              boxSizing: "border-box",
              width: "100%",
              alignItems: "center",
              marginRight: "2rem",
              marginLeft: "2rem",
              textAlign: "center",
              
            }}
          >
            {" "}
            <h1
              className="_hero-title svelte-iy6bba"
              style={{
                borderWidth: "0px",
                borderStyle: "solid",
                borderColor: "rgb(229, 231, 235)",
                boxSizing: "border-box",
                margin: "0px",
                fontFamily: "DM Sans",
                fontSize: "72px",
                fontWeight: 700,
                lineHeight: "var(--title-line-height, 1.2)",
                marginBottom: "32px",
              }}
            >
              <div className="fade-in"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  fontFamily: "Helvetica",
                  
                }}
              >

                <FadeInComponent>
                No hacemos marketing
                </FadeInComponent>
              </div>
            </h1>{" "}
            <div
                style={{
                  display: "flex",
                  justifyContent: "center", // Centra horizontalmente
                  alignItems: "center", // Centra verticalmente
                  textAlign: "center", // Opcional: centra el texto dentro del h2
                }}
              >
                <h2
                  className="_subtitle sm:text-xl whitespace-pre-wrap max-w-[650px] svelte-iy6bba fade-in"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    fontWeight: "inherit",
                    margin: "0px",
                    whiteSpace: "pre-wrap",
                    color: "#f5f5f5",
                    opacity: 0.7,
                    fontFamily: "Poppins",
                  }}
                >
                  <FadeInComponent>
                    Olvidamos el marketing tradicional, diseñando estrategias que dominan. 
                    <br></br>
                    No se trata solo de vender más, sino de impactar,
                    transformar y liderar.
                  </FadeInComponent>
                </h2>
              </div>
            <div
              id="header-cta"
              className="w-full"
              style={{
                borderWidth: "0px",
                borderStyle: "solid",
                borderColor: "rgb(229, 231, 235)",
                boxSizing: "border-box",
                width: "100%",
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
                  className="flex flex-wrap justify-center sm:justify-normal svelte-1ko2zfs"
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
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <FadeInComponent>
                    <HoverTapComponent>
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
                          cursor: "pointer",
                          backgroundColor: "rgb(179, 8, 8)",
                          transition: "color 0.15s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), outline-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), text-decoration-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), fill 0.15s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.15s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1), transform 0.15s cubic-bezier(0.4, 0, 0.2, 1), filter 0.15s cubic-bezier(0.4, 0, 0.2, 1), backdrop-filter 0.15s cubic-bezier(0.4, 0, 0.2, 1), -webkit-backdrop-filter 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
                          position: "relative",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          overflow: "hidden",
                          boxShadow: "var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1)",
                          color: "var(--button-color, #ffffff)",
                          padding: "12px 24px",
                          borderRadius: "32px",
                          fontSize: "18px",
                          fontWeight: 500,
                          marginTop: "1rem",
                          paddingTop:"0.6rem",
                        }}
                      >
                        Contáctanos
                      </button>
                    </HoverTapComponent>
                    </FadeInComponent>
                  </div>
                </div>

                <div
                  className="text-sm opacity-80 mt-4 max-w-[400px]"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    maxWidth: "400px",
                    fontSize: "0.875rem",
                    lineHeight: "1.25rem",
                    opacity: 0.8,
                  }}
                >
                  <br
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                    }}
                  />
                </div>{" "}
              </div>
            </div>{" "}
            <FadeInComponent>
            <HoverTapComponent>
            <AnimatedComponent/>
            <div
              className="py-4 mt-8 sm:mt-16"
              style={{
                borderWidth: "0px",
                borderStyle: "solid",
                borderColor: "rgb(229, 231, 235)",
                boxSizing: "border-box",
                paddingBottom: "1rem",
                marginTop: "4rem",
              }}
            >
              <div
                className="_social-proof _dense _small flex justify-center inline-flex svelte-iy6bba"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  display: "inline-flex",
                  justifyContent: "center",
                }}
              >
                <img
                  className="rounded-full svelte-iy6bba"
                  alt="Avatar of user 1"
                  src="https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1701537402054-image.png"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    display: "block",
                    verticalAlign: "middle",
                    maxWidth: "100%",
                    borderRadius: "9999px",
                    border: "2px #101010 solid",
                    width: "70px",
                    height: "70px",
                    marginRight: "-10px",
                  }}
                />
                <img
                  className="rounded-full svelte-iy6bba"
                  alt="Avatar of user 2"
                  src="https://ship-app-assets.fra1.digitaloceanspaces.com/stream/recTKH5haJV20MzAq/1716299064476-Ellipse 7.png"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    display: "block",
                    verticalAlign: "middle",
                    maxWidth: "100%",
                    borderRadius: "9999px",
                    border: "2px #101010 solid",
                    width: "70px",
                    height: "70px",
                    marginRight: "-10px",
                  }}
                />
                <img
                  className="rounded-full svelte-iy6bba"
                  alt="Avatar of user 3"
                  src="https://ship-app-assets.fra1.digitaloceanspaces.com/stream/recTKH5haJV20MzAq/1716299071401-Ellipse 6.png"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    display: "block",
                    verticalAlign: "middle",
                    maxWidth: "100%",
                    borderRadius: "9999px",
                    border: "2px #101010 solid",
                    width: "70px",
                    height: "70px",
                    marginRight: "-10px",
                  }}
                />
                
              </div>{" "}

            <div
              className="text-sm mt-2 opacity-80 max-w-[400px]"
              style={{
                borderWidth: "0px",
                borderStyle: "solid",
                borderColor: "rgb(229, 231, 235)",
                boxSizing: "border-box",
                marginTop: "0.5rem",
                fontSize: "1.3rem",
                lineHeight: "1.25rem",
                opacity: 0.8,
                fontFamily: "Helvetica",
                textAlign: "center", // Alinea el texto a la derecha
              }}
            >
              NOMADA es un Startup Zacatecano 100% Mexicano
            </div>
  
            </div>
          </HoverTapComponent>
          </FadeInComponent>
          </div>{" "}

        </div>



        <div
    className="p-4 xl:p-0 flex h-full w-full flex-col justify-center items-center svelte-iy6bba"
    style={{
      borderWidth: "0px",
      borderStyle: "solid",
      borderColor: "rgb(229, 231, 235)",
      boxSizing: "border-box",
      display: "flex",
      height: "100%",
      width: "100%",
      alignItems: "left",
      justifyContent: "left", // Centra el contenido horizontalmente
      flexDirection: "row",
      padding: "0px",
    }}
  >
    <div
      style={{
        marginLeft:"2rem",
        display: "flex",
        alignItems: "left",
        justifyContent: "center",
        width: "80%", // Ajusta el tamaño del contenedor del GIF si es necesario
        maxWidth: "600px", // Ajusta el tamaño máximo del contenedor del GIF si es necesario
      }}
    >
      <FadeInComponent>
      <HoverTapComponent>
      <img
        src={`${process.env.PUBLIC_URL}/assets/stock_images/hero_gif.gif`} className="image"
        alt="My GIF"
        style={{
          width: "145%", // Ajusta el tamaño del GIF
          height: "auto", // Mantiene la proporción del GIF
        }}
      />
        </HoverTapComponent>
        </FadeInComponent>
    </div>
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
