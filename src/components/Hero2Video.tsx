import React from "react";
import ReactPlayer from 'react-player/youtube';
import '../styles/GridComponent.css';

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
          paddingBottom: "6rem",
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
                marginBottom: "32px",
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
                Consecuencias en Soluciones
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
                marginBottom: "40px",
                fontFamily: "Helvetica",
              }}
            >
            <p>Utilizamos AC Compacta para los títulos y encabezados, proyectando fuerza y modernidad, mientras que Helvetica en los textos refleja claridad y profesionalismo. Esta combinación de tipografías simboliza nuestra dedicación a la excelencia y a la simplicidad efectiva.</p>
          
            <p>Utilizamos AC Compacta para los títulos y encabezados, proyectando fuerza y modernidad, mientras que Helvetica en los textos refleja claridad y profesionalismo. Esta combinación de tipografías simboliza nuestra dedicación a la excelencia y a la simplicidad efectiva.</p>

            <p>Utilizamos AC Compacta para los títulos y encabezados, proyectando fuerza y modernidad, mientras que Helvetica en los textos refleja claridad y profesionalismo. Esta combinación de tipografías simboliza nuestra dedicación a la excelencia y a la simplicidad efectiva.</p>
            </h2>{" "}
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
                      className="shrink-0 cursor-pointer sm:w-auto _ishuge svelte-1ko2zfs"
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
                        fontSize: "20px",
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
                          padding: "12px 24px",
                          borderRadius: "32px",
                          fontSize: "18px",
                          fontWeight: 500,
                        }}
                      >
                        {" "}
                        Llamanos →
                      </button>
                    </a>{" "}
                  </div>
                </div>{" "}
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
                paddingBottom: "1rem",
                marginTop: "4rem",
              }}
            >
            </div>
    


          </div>{" "}
        </div>
      </div>
        <div className="centered-container">
          <div className="grid-container">
            <div className="grid-item item-1">
              <div className="text-box">
                <h4>
                  QUE TU COMPETENCIA TE SIGA
                  NO TE ALCANCE
                </h4>
                <h6>Desarrollamos una propuesta de valor unica y potente que destaca y
                  posiciona tu marca com olider indiscutible en el mercado.
                </h6>
              </div>
            </div>
            <div className="grid-item item-2">
              <img src={`${process.env.PUBLIC_URL}/assets/stock_images/nomad_1.png`} alt="Imagen 1" className="image"/>
            </div>
            <div className="grid-item item-3">
              <img src={`${process.env.PUBLIC_URL}/assets/stock_images/nomad_2.png`} alt="Imagen 2" className="image"/>
            </div>
            <div className="grid-item item-4">
              <div className="text-box">
                <h4>
                    CONVIERTE ATENCION EN LEALTAD
                  </h4>
                  <h6>
                    Implementamos camañas que involucran activamente a los usuarios y
                     los motivan a participar, reforzando su vinculo con la marca
                  </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="centered-container">
          <div className="grid-container">
            <div className="grid-item item-1">
              <div className="text-box">
                <h4>
                  DEJA DE QUEMAR DINERO
                </h4>
                <h6>
                  Nos centramos en las metricas que importan y eliminamos actividades
                  que no contribuyen a tus objetivos de negocio, asegurando un uso optimo de tu presupuesto.
                </h6>
              </div>
            </div>
            <div className="grid-item item-2">
              <img src={`${process.env.PUBLIC_URL}/assets/stock_images/nomad_3.png`} alt="Imagen 1" className="image"/>
            </div>
            <div className="grid-item item-3">
              <img src={`${process.env.PUBLIC_URL}/assets/stock_images/nomad_4.png`} alt="Imagen 2" className="image"/>
            </div>
            <div className="grid-item item-4">
              <div className="text-box">
                <h4>
                    UN PLAN QUE SE ADECUA A TUS METAS
                  </h4>
                  <h6>
                    Nos centramos en las metricas que importan y eliminamos actividades que no 
                    contribuyen a tus objetivos de negocio, asegurando un uso optimo 
                    de tu presupuesto.
                  </h6>
              </div>
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
  background-color: rgb(0, 16, 16);
}
`,
        }}
      />
    </>
  );
}