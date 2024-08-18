import React from "react";
import ReactPlayer from 'react-player/youtube';
import '../styles/GridComponent.css';
import FadeInComponent from "./piezas/headers/FadeInComponent";
import ScaleUpComponent from "./piezas/headers/ScaleUpComponent";

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
          paddingTop: "6rem",
          color: "rgb(245, 245, 245)",
          fontFamily: "Poppins",
          fontSize: "18px",
          font: "18px / 27.9px Poppins",
          lineHeight: "27.9px",
          alignContent: "center"
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
              textAlign: "left",
            }}
          >
            <FadeInComponent>
              <div className="player-wrapper" style={{ position: 'relative', paddingTop: '56.25%' /* Aspect ratio 16:9 */ }}>
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=ssfkASaR2Ww"
                  className="react-player"
                  playing={false}
                  controls={true}
                  width="100%"
                  height="100%"
                  style={{ position: 'absolute', top: 0, left: 0 }}
                />
              </div>
            </FadeInComponent>
          </div>
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
              textAlign: "left",
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
                
              }}
            >
              <div
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  fontFamily: "Helvetica"
                }}
              >
                <ScaleUpComponent>
                ¿Quiénes somos? 
                </ScaleUpComponent>

              </div>
            </h1>{" "}
            <h2
              className="_subtitle sm:text-xl whitespace-pre-wrap max-w-[650px] svelte-iy6bba"
              style={{
                borderWidth: "0px",
                borderStyle: "solid",
                borderColor: "rgb(229, 231, 235)",
                boxSizing: "border-box",
                fontWeight: "inherit",
                margin: "0px",
                maxWidth: "650px",
                whiteSpace: "pre-wrap",
                color: "#f5f5f5",
                opacity: 0.7,
                fontSize: "1.25rem",
                lineHeight: "1.75rem",
                fontFamily: "Helvetica",
              }}
            >
            <FadeInComponent>
            <p>Aquí estamos: Diego y Andrés, dos apasionados del marketing y las ventas, una dupla dedicada a transformar la manera en que los negocios atraen y retienen clientes.</p>
          
            <p>Diego: Con años de experiencia en ventas, sé que estas son el motor que no solo mantiene a un negocio, sino que también impulsa su crecimiento. Mi enfoque siempre ha sido maximizar el potencial de cada oportunidad de negocio.</p>

            <p>Andrés: Tras años trabajando en agencias de marketing, me cansé de ver cómo se cobraban grandes sumas por estrategias de marketing sin enfoque y resultados tangibles. Estoy dedicado a asegurar que cada inversión en marketing genere resultados reales y medibles.</p>
           
            <p>En NOMADA Labs, creemos que todos los negocios merecen una estrategia de marketing integral y efectiva. Merecen tener a su disposición las herramientas necesarias para competir en el mercado actual y alcanzar el éxito. Nuestra misión es ser la mano derecha de marketing para nuestros clientes, proporcionando soluciones que realmente marcan la diferencia.</p>
           
            </FadeInComponent>
            </h2>{" "}
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
                          marginLeft:"9rem",
                        }}
                      >
                        Agendar una llamada
                      </button>
                    </HoverTapComponent>
                    </FadeInComponent>
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
                  className="text-sm opacity-80 mt-4 max-w-[400px]"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    marginTop: "1rem",
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
            <div
              className="py-4 mt-8 sm:mt-16"
              style={{
                borderWidth: "0px",
                borderStyle: "solid",
                borderColor: "rgb(229, 231, 235)",
                boxSizing: "border-box",
                paddingTop: "1rem",
                marginTop: "4rem",
              }}
            >
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
  background-color: rgb(0, 16, 16);
}
`,
        }}
      />
    </>
  );
}
