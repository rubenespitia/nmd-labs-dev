import React from "react";

export default function Component() {
  return (
    <>
      <section
        className="case_studies_section"
        style={{
          boxSizing: "border-box",
          display: "block",
          paddingBottom: "8rem",
        }}
      >
        <div
          className="container_vd"
          style={{
            boxSizing: "border-box",
            zIndex: 1,
            alignSelf: "center",
            width: "100%",
            maxWidth: "84rem",
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "2rem",
            paddingRight: "2rem",
            position: "relative",
          }}
        >
          <div
            className="case_study_showcase_wrap"
            style={{
              boxSizing: "border-box",
              borderRadius: "1.5rem",
              transition: "opacity 0.45s ease 0s",
              overflow: "hidden",
              opacity: 0.8,
              paddingTop: "3.5rem",
              position: "relative",
            }}
          >
            <div
              className="z-index-1"
              style={{
                boxSizing: "border-box",
                zIndex: 1,
                position: "relative",
              }}
            >
              <div
                className="max-width-medium align-center-fs text-align-center"
                style={{
                  boxSizing: "border-box",
                  marginLeft: "auto",
                  marginRight: "auto",
                  textAlign: "center",
                  width: "100%",
                  maxWidth: "32rem",
                }}
              >
                <div
                  className="margin-bottom medium-s"
                  style={{
                    boxSizing: "border-box",
                    marginBottom: "1.5rem",
                    marginTop: "0rem",
                    marginRight: "0rem",
                    marginLeft: "0rem",
                  }}
                >
                  <h2
                    className="heading-style-h4"
                    style={{
                      boxSizing: "border-box",
                      letterSpacing: "-0.03rem",
                      marginTop: "0px",
                      marginBottom: "0px",
                      fontSize: "3rem",
                      fontWeight: 500,
                      lineHeight: 1.16,
                      fontFamily: "Helvetica"
                    }}
                  >
                    Deja de quemar dinero
                  </h2>
                </div>
                <p
                  className="margin-bottom margin-xlarge"
                  style={{
                    boxSizing: "border-box",
                    color: "#d6e3ff",
                    fontSize: "1rem",
                    fontWeight: 400,
                    lineHeight: 1.5,
                    margin: "4rem",
                    marginBottom: "4rem",
                    marginTop: "0rem",
                    marginRight: "0rem",
                    marginLeft: "0rem",
                    fontFamily: "Helvetica"
                  }}
                >
                  Nos centramos en las metricas que importan
                </p>
              </div>
              <div
                className="case_study-slider"
                style={{
                  boxSizing: "border-box",
                  gap: "2rem",
                  display: "flex",
                  position: "relative",
                  bottom: "-0.5rem",
                }}
              >
                <div
                  className="no-grow w-dyn-list"
                  style={{ boxSizing: "border-box", flex: "0 0 auto" }}
                >
                  <div
                    className="case_study-slide w-dyn-items"
                    role="list"
                    style={{
                      boxSizing: "border-box",
                      gap: "2rem",
                      display: "flex",
                      animation:
                        "180s linear 0s infinite normal none running scroll",
                    }}
                  >
                    <div
                      className="no-grow w-dyn-item"
                      role="listitem"
                      style={{ boxSizing: "border-box", flex: "0 0 auto" }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        aria-label="Case study link"
                        href=""
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                          backgroundImage:
                            'url("https://cdn.prod.website-files.com/65f43207d485843526415f97/65f43207d485843526416e73_Hero%20(1).jpg")',
                        }}
                      >
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#8e0505)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            Strivacity
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="no-grow w-dyn-item"
                      role="listitem"
                      style={{ boxSizing: "border-box", flex: "0 0 auto" }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        aria-label="Case study link"
                        href=""
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                          backgroundImage:
                            'url("https://cdn.prod.website-files.com/65f43207d485843526415f97/662629ac052d8ea20eeb1893_Banner.jpg")',
                        }}
                      >
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            Shipwell
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="no-grow w-dyn-item"
                      role="listitem"
                      style={{ boxSizing: "border-box", flex: "0 0 auto" }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        aria-label="Case study link"
                        href=""
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                          backgroundImage:
                            'url("https://cdn.prod.website-files.com/65f43207d485843526415f97/65f43207d485843526416db8_Hero%20(1).jpg")',
                        }}
                      >
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            Adonis
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="no-grow w-dyn-item"
                      role="listitem"
                      style={{ boxSizing: "border-box", flex: "0 0 auto" }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        aria-label="Case study link"
                        href=""
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                          backgroundImage:
                            'url("https://cdn.prod.website-files.com/65f43207d485843526415f97/66263ab769b7511d019cddb3_Banner.jpg")',
                        }}
                      >
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            Trumpet
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="no-grow w-dyn-item"
                      role="listitem"
                      style={{ boxSizing: "border-box", flex: "0 0 auto" }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        aria-label="Case study link"
                        href=""
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                          backgroundImage:
                            'url("https://cdn.prod.website-files.com/65f43207d485843526415f97/6626426af70e38c8bdfd8359_main.jpg")',
                        }}
                      >
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            Smartrr
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="no-grow w-dyn-item"
                      role="listitem"
                      style={{ boxSizing: "border-box", flex: "0 0 auto" }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        aria-label="Case study link"
                        href=""
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                          backgroundImage:
                            'url("https://cdn.prod.website-files.com/65f43207d485843526415f97/66264c89499e9728d09e9857_Banner.jpg")',
                        }}
                      >
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            Liquibase
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="no-grow w-dyn-item"
                      role="listitem"
                      style={{ boxSizing: "border-box", flex: "0 0 auto" }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        aria-label="Case study link"
                        href=""
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                          backgroundImage:
                            'url("https://cdn.prod.website-files.com/65f43207d485843526415f97/667999c073294e6863973250_Banner.jpg")',
                        }}
                      >
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            GoodShip
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="no-grow w-dyn-item"
                      role="listitem"
                      style={{ boxSizing: "border-box", flex: "0 0 auto" }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        aria-label="Case study link"
                        href=""
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                          backgroundImage:
                            'url("https://cdn.prod.website-files.com/65f43207d485843526415f97/65f43207d485843526416ab0_MacBook%20Pro%20_15%202.jpg")',
                        }}
                      >
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            Chili Piper
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="no-grow w-dyn-item"
                      role="listitem"
                      style={{ boxSizing: "border-box", flex: "0 0 auto" }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        aria-label="Case study link"
                        href=""
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                          backgroundImage:
                            'url("https://cdn.prod.website-files.com/65f43207d485843526415f97/65f43207d485843526416af3_Hero%20(2).jpg")',
                        }}
                      >
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            Grata
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="no-grow w-dyn-item"
                      role="listitem"
                      style={{ boxSizing: "border-box", flex: "0 0 auto" }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        aria-label="Case study link"
                        href=""
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                          backgroundImage:
                            'url("https://cdn.prod.website-files.com/65f43207d485843526415f97/65f43207d485843526416eca_Hero.jpg")',
                        }}
                      >
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            Slash
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="no-grow w-dyn-item"
                      role="listitem"
                      style={{ boxSizing: "border-box", flex: "0 0 auto" }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        aria-label="Case study link"
                        href=""
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                          backgroundImage:
                            'url("https://cdn.prod.website-files.com/65f43207d485843526415f97/662a4adcde75be4a5ab89e22_Banner.jpg")',
                        }}
                      >
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            Nansen
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="no-grow w-dyn-item"
                      role="listitem"
                      style={{ boxSizing: "border-box", flex: "0 0 auto" }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        aria-label="Case study link"
                        href=""
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                          backgroundImage:
                            'url("https://cdn.prod.website-files.com/65f43207d485843526415f97/65f43207d485843526416b89_Hero.jpg")',
                        }}
                      >
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            WebConnex Ads
                          </h3>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="no-grow w-dyn-list"
                  style={{ boxSizing: "border-box", flex: "0 0 auto" }}
                >
                  <div
                    className="case_study-slide w-dyn-items"
                    role="list"
                    style={{
                      boxSizing: "border-box",
                      gap: "2rem",
                      display: "flex",
                      animation:
                        "180s linear 0s infinite normal none running scroll",
                    }}
                  >
                    <div
                      className="no-grow w-dyn-item"
                      role="listitem"
                      style={{ boxSizing: "border-box", flex: "0 0 auto" }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        href="https://www.vezadigital.com/case-studies/strivacity"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundImage:
                            'url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg")',
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                        }}
                      >
                        <img
                          className="case_study_thumnail_img w-dyn-bind-empty"
                          src="https://cdn.prod.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                          style={{
                            boxSizing: "border-box",
                            border: "0px",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            objectFit: "cover",
                            width: "15rem",
                            height: "19rem",
                            display: "none",
                          }}
                        />
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            Strivacity
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="no-grow w-dyn-item"
                      role="listitem"
                      style={{ boxSizing: "border-box", flex: "0 0 auto" }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        href="https://www.vezadigital.com/case-studies/shipwell"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundImage:
                            'url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg")',
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                        }}
                      >
                        <img
                          className="case_study_thumnail_img"
                          src="https://cdn.prod.website-files.com/65f43207d485843526415f97/662629ac052d8ea20eeb1893_Banner.jpg"
                          style={{
                            boxSizing: "border-box",
                            border: "0px",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            display: "inline-block",
                            objectFit: "cover",
                            width: "15rem",
                            height: "19rem",
                          }}
                        />
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            Shipwell
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="no-grow w-dyn-item"
                      role="listitem"
                      style={{ boxSizing: "border-box", flex: "0 0 auto" }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        href="https://www.vezadigital.com/case-studies/adonis"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundImage:
                            'url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg")',
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                        }}
                      >
                        <img
                          className="case_study_thumnail_img w-dyn-bind-empty"
                          src="https://cdn.prod.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                          style={{
                            boxSizing: "border-box",
                            border: "0px",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            objectFit: "cover",
                            width: "15rem",
                            height: "19rem",
                            display: "none",
                          }}
                        />
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            Adonis
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="no-grow w-dyn-item"
                      role="listitem"
                      style={{ boxSizing: "border-box", flex: "0 0 auto" }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        href="https://www.vezadigital.com/case-studies/trumpet"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundImage:
                            'url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg")',
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                        }}
                      >
                        <img
                          className="case_study_thumnail_img"
                          src="https://cdn.prod.website-files.com/65f43207d485843526415f97/66263ab769b7511d019cddb3_Banner.jpg"
                          style={{
                            boxSizing: "border-box",
                            border: "0px",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            display: "inline-block",
                            objectFit: "cover",
                            width: "15rem",
                            height: "19rem",
                          }}
                        />
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            Trumpet
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="no-grow w-dyn-item"
                      role="listitem"
                      style={{ boxSizing: "border-box", flex: "0 0 auto" }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        href="https://www.vezadigital.com/case-studies/smartrr"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundImage:
                            'url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg")',
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                        }}
                      >
                        <img
                          className="case_study_thumnail_img"
                          src="https://cdn.prod.website-files.com/65f43207d485843526415f97/6626426af70e38c8bdfd8359_main.jpg"
                          style={{
                            boxSizing: "border-box",
                            border: "0px",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            display: "inline-block",
                            objectFit: "cover",
                            width: "15rem",
                            height: "19rem",
                          }}
                        />
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            Smartrr
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="no-grow w-dyn-item"
                      role="listitem"
                      style={{ boxSizing: "border-box", flex: "0 0 auto" }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        href="https://www.vezadigital.com/case-studies/liquibase"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundImage:
                            'url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg")',
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                        }}
                      >
                        <img
                          className="case_study_thumnail_img"
                          src="https://cdn.prod.website-files.com/65f43207d485843526415f97/66264c89499e9728d09e9857_Banner.jpg"
                          style={{
                            boxSizing: "border-box",
                            border: "0px",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            display: "inline-block",
                            objectFit: "cover",
                            width: "15rem",
                            height: "19rem",
                          }}
                        />
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            Liquibase
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="no-grow w-dyn-item"
                      role="listitem"
                      style={{ boxSizing: "border-box", flex: "0 0 auto" }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        href="https://www.vezadigital.com/case-studies/goodship"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundImage:
                            'url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg")',
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                        }}
                      >
                        <img
                          className="case_study_thumnail_img"
                          src="https://cdn.prod.website-files.com/65f43207d485843526415f97/667999c073294e6863973250_Banner.jpg"
                          style={{
                            boxSizing: "border-box",
                            border: "0px",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            display: "inline-block",
                            objectFit: "cover",
                            width: "15rem",
                            height: "19rem",
                          }}
                        />
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            GoodShip
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="no-grow w-dyn-item"
                      role="listitem"
                      style={{ boxSizing: "border-box", flex: "0 0 auto" }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        href="https://www.vezadigital.com/case-studies/chili-piper"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundImage:
                            'url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg")',
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                        }}
                      >
                        <img
                          className="case_study_thumnail_img"
                          src="https://cdn.prod.website-files.com/65f43207d485843526415f97/65f43207d485843526416fa6_IMG-1.jpg"
                          style={{
                            boxSizing: "border-box",
                            border: "0px",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            display: "inline-block",
                            objectFit: "cover",
                            width: "15rem",
                            height: "19rem",
                          }}
                        />
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            Chili Piper
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="no-grow w-dyn-item"
                      role="listitem"
                      style={{ boxSizing: "border-box", flex: "0 0 auto" }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        href="https://www.vezadigital.com/case-studies/grata"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundImage:
                            'url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg")',
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                        }}
                      >
                        <img
                          className="case_study_thumnail_img"
                          src="https://cdn.prod.website-files.com/65f43207d485843526415f97/65f43207d485843526416fa5_IMG-3.jpg"
                          style={{
                            boxSizing: "border-box",
                            border: "0px",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            display: "inline-block",
                            objectFit: "cover",
                            width: "15rem",
                            height: "19rem",
                          }}
                        />
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            Grata
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="no-grow w-dyn-item"
                      role="listitem"
                      style={{ boxSizing: "border-box", flex: "0 0 auto" }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        href="https://www.vezadigital.com/case-studies/slash"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundImage:
                            'url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg")',
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                        }}
                      >
                        <img
                          className="case_study_thumnail_img w-dyn-bind-empty"
                          src="https://cdn.prod.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                          style={{
                            boxSizing: "border-box",
                            border: "0px",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            objectFit: "cover",
                            width: "15rem",
                            height: "19rem",
                            display: "none",
                          }}
                        />
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            Slash
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="no-grow w-dyn-item"
                      role="listitem"
                      style={{ boxSizing: "border-box", flex: "0 0 auto" }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        href="https://www.vezadigital.com/case-studies/nansen"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundImage:
                            'url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg")',
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                        }}
                      >
                        <img
                          className="case_study_thumnail_img"
                          src="https://cdn.prod.website-files.com/65f43207d485843526415f97/662a4adcde75be4a5ab89e22_Banner.jpg"
                          style={{
                            boxSizing: "border-box",
                            border: "0px",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            display: "inline-block",
                            objectFit: "cover",
                            width: "15rem",
                            height: "19rem",
                          }}
                        />
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            Nansen
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="no-grow w-dyn-item"
                      role="listitem"
                      style={{ boxSizing: "border-box", flex: "0 0 auto" }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        href="https://www.vezadigital.com/case-studies/webconnex-ads"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundImage:
                            'url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg")',
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                        }}
                      >
                        <img
                          className="case_study_thumnail_img w-dyn-bind-empty"
                          src="https://cdn.prod.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                          style={{
                            boxSizing: "border-box",
                            border: "0px",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            objectFit: "cover",
                            width: "15rem",
                            height: "19rem",
                            display: "none",
                          }}
                        />
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            WebConnex Ads
                          </h3>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="home-sc-swiper-wrap"
                style={{
                  boxSizing: "border-box",
                  zIndex: 1,
                  width: "100%",
                  display: "none",
                  position: "relative",
                  bottom: "-0.5rem",
                }}
              >
                <div
                  className="swiper home-cs w-dyn-list"
                  style={{
                    boxSizing: "border-box",
                    listStyle: "none",
                    padding: "0px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    position: "relative",
                    zIndex: 1,
                    display: "block",
                    overflow: "hidden",
                    width: "100%",
                  }}
                >
                  <div
                    className="swiper-wrapper home-cs w-dyn-items"
                    role="list"
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      zIndex: 1,
                      transitionProperty: "transform",
                      transitionTimingFunction:
                        "var(--swiper-wrapper-transition-timing-function,initial)",
                      boxSizing: "content-box",
                      transform: "translate3d(0px, 0px, 0px)",
                      justifyContent: "space-between",
                      display: "flex",
                    }}
                  >
                    <div
                      className="swiper-slide home-cs w-dyn-item"
                      role="listitem"
                      style={{
                        boxSizing: "border-box",
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        transitionProperty: "transform",
                        display: "block",
                        flex: "0 0 auto",
                        flexShrink: 0,
                      }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        href="https://www.vezadigital.com/case-studies/strivacity"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundImage:
                            'url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg")',
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                        }}
                      >
                        <img
                          className="case_study_thumnail_img w-dyn-bind-empty"
                          src="https://cdn.prod.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                          style={{
                            boxSizing: "border-box",
                            border: "0px",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            objectFit: "cover",
                            width: "15rem",
                            height: "19rem",
                            display: "none",
                          }}
                        />
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            Strivacity
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="swiper-slide home-cs w-dyn-item"
                      role="listitem"
                      style={{
                        boxSizing: "border-box",
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        transitionProperty: "transform",
                        display: "block",
                        flex: "0 0 auto",
                        flexShrink: 0,
                      }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        href="https://www.vezadigital.com/case-studies/shipwell"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundImage:
                            'url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg")',
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                        }}
                      >
                        <img
                          className="case_study_thumnail_img"
                          sizes="100vw"
                          src="https://cdn.prod.website-files.com/65f43207d485843526415f97/662629ac052d8ea20eeb1893_Banner.jpg"
                          srcSet="https://cdn.prod.website-files.com/65f43207d485843526415f97/662629ac052d8ea20eeb1893_Banner-p-500.jpg 500w, https://cdn.prod.website-files.com/65f43207d485843526415f97/662629ac052d8ea20eeb1893_Banner-p-800.jpg 800w, https://cdn.prod.website-files.com/65f43207d485843526415f97/662629ac052d8ea20eeb1893_Banner-p-1080.jpg 1080w, https://cdn.prod.website-files.com/65f43207d485843526415f97/662629ac052d8ea20eeb1893_Banner-p-1600.jpg 1600w, https://cdn.prod.website-files.com/65f43207d485843526415f97/662629ac052d8ea20eeb1893_Banner-p-2000.jpg 2000w, https://cdn.prod.website-files.com/65f43207d485843526415f97/662629ac052d8ea20eeb1893_Banner.jpg 2400w"
                          style={{
                            boxSizing: "border-box",
                            border: "0px",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            display: "inline-block",
                            objectFit: "cover",
                            width: "15rem",
                            height: "19rem",
                          }}
                        />
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            Shipwell
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="swiper-slide home-cs w-dyn-item"
                      role="listitem"
                      style={{
                        boxSizing: "border-box",
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        transitionProperty: "transform",
                        display: "block",
                        flex: "0 0 auto",
                        flexShrink: 0,
                      }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        href="https://www.vezadigital.com/case-studies/adonis"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundImage:
                            'url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg")',
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                        }}
                      >
                        <img
                          className="case_study_thumnail_img w-dyn-bind-empty"
                          src="https://cdn.prod.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                          style={{
                            boxSizing: "border-box",
                            border: "0px",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            objectFit: "cover",
                            width: "15rem",
                            height: "19rem",
                            display: "none",
                          }}
                        />
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            Adonis
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="swiper-slide home-cs w-dyn-item"
                      role="listitem"
                      style={{
                        boxSizing: "border-box",
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        transitionProperty: "transform",
                        display: "block",
                        flex: "0 0 auto",
                        flexShrink: 0,
                      }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        href="https://www.vezadigital.com/case-studies/trumpet"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundImage:
                            'url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg")',
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                        }}
                      >
                        <img
                          className="case_study_thumnail_img"
                          sizes="100vw"
                          src="https://cdn.prod.website-files.com/65f43207d485843526415f97/66263ab769b7511d019cddb3_Banner.jpg"
                          srcSet="https://cdn.prod.website-files.com/65f43207d485843526415f97/66263ab769b7511d019cddb3_Banner-p-500.jpg 500w, https://cdn.prod.website-files.com/65f43207d485843526415f97/66263ab769b7511d019cddb3_Banner-p-800.jpg 800w, https://cdn.prod.website-files.com/65f43207d485843526415f97/66263ab769b7511d019cddb3_Banner-p-1080.jpg 1080w, https://cdn.prod.website-files.com/65f43207d485843526415f97/66263ab769b7511d019cddb3_Banner-p-1600.jpg 1600w, https://cdn.prod.website-files.com/65f43207d485843526415f97/66263ab769b7511d019cddb3_Banner.jpg 2400w"
                          style={{
                            boxSizing: "border-box",
                            border: "0px",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            display: "inline-block",
                            objectFit: "cover",
                            width: "15rem",
                            height: "19rem",
                          }}
                        />
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            Trumpet
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="swiper-slide home-cs w-dyn-item"
                      role="listitem"
                      style={{
                        boxSizing: "border-box",
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        transitionProperty: "transform",
                        display: "block",
                        flex: "0 0 auto",
                        flexShrink: 0,
                      }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        href="https://www.vezadigital.com/case-studies/smartrr"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundImage:
                            'url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg")',
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                        }}
                      >
                        <img
                          className="case_study_thumnail_img"
                          sizes="100vw"
                          src="https://cdn.prod.website-files.com/65f43207d485843526415f97/6626426af70e38c8bdfd8359_main.jpg"
                          srcSet="https://cdn.prod.website-files.com/65f43207d485843526415f97/6626426af70e38c8bdfd8359_main-p-500.jpg 500w, https://cdn.prod.website-files.com/65f43207d485843526415f97/6626426af70e38c8bdfd8359_main-p-800.jpg 800w, https://cdn.prod.website-files.com/65f43207d485843526415f97/6626426af70e38c8bdfd8359_main-p-1080.jpg 1080w, https://cdn.prod.website-files.com/65f43207d485843526415f97/6626426af70e38c8bdfd8359_main-p-1600.jpg 1600w, https://cdn.prod.website-files.com/65f43207d485843526415f97/6626426af70e38c8bdfd8359_main.jpg 2400w"
                          style={{
                            boxSizing: "border-box",
                            border: "0px",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            display: "inline-block",
                            objectFit: "cover",
                            width: "15rem",
                            height: "19rem",
                          }}
                        />
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            Smartrr
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="swiper-slide home-cs w-dyn-item"
                      role="listitem"
                      style={{
                        boxSizing: "border-box",
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        transitionProperty: "transform",
                        display: "block",
                        flex: "0 0 auto",
                        flexShrink: 0,
                      }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        href="https://www.vezadigital.com/case-studies/liquibase"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundImage:
                            'url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg")',
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                        }}
                      >
                        <img
                          className="case_study_thumnail_img"
                          sizes="100vw"
                          src="https://cdn.prod.website-files.com/65f43207d485843526415f97/66264c89499e9728d09e9857_Banner.jpg"
                          srcSet="https://cdn.prod.website-files.com/65f43207d485843526415f97/66264c89499e9728d09e9857_Banner-p-500.jpg 500w, https://cdn.prod.website-files.com/65f43207d485843526415f97/66264c89499e9728d09e9857_Banner-p-800.jpg 800w, https://cdn.prod.website-files.com/65f43207d485843526415f97/66264c89499e9728d09e9857_Banner-p-1080.jpg 1080w, https://cdn.prod.website-files.com/65f43207d485843526415f97/66264c89499e9728d09e9857_Banner-p-1600.jpg 1600w, https://cdn.prod.website-files.com/65f43207d485843526415f97/66264c89499e9728d09e9857_Banner-p-2000.jpg 2000w, https://cdn.prod.website-files.com/65f43207d485843526415f97/66264c89499e9728d09e9857_Banner.jpg 2400w"
                          style={{
                            boxSizing: "border-box",
                            border: "0px",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            display: "inline-block",
                            objectFit: "cover",
                            width: "15rem",
                            height: "19rem",
                          }}
                        />
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            Liquibase
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="swiper-slide home-cs w-dyn-item"
                      role="listitem"
                      style={{
                        boxSizing: "border-box",
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        transitionProperty: "transform",
                        display: "block",
                        flex: "0 0 auto",
                        flexShrink: 0,
                      }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        href="https://www.vezadigital.com/case-studies/goodship"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundImage:
                            'url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg")',
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                        }}
                      >
                        <img
                          className="case_study_thumnail_img"
                          sizes="100vw"
                          src="https://cdn.prod.website-files.com/65f43207d485843526415f97/667999c073294e6863973250_Banner.jpg"
                          srcSet="https://cdn.prod.website-files.com/65f43207d485843526415f97/667999c073294e6863973250_Banner-p-500.jpg 500w, https://cdn.prod.website-files.com/65f43207d485843526415f97/667999c073294e6863973250_Banner-p-800.jpg 800w, https://cdn.prod.website-files.com/65f43207d485843526415f97/667999c073294e6863973250_Banner-p-1080.jpg 1080w, https://cdn.prod.website-files.com/65f43207d485843526415f97/667999c073294e6863973250_Banner-p-1600.jpg 1600w, https://cdn.prod.website-files.com/65f43207d485843526415f97/667999c073294e6863973250_Banner-p-2000.jpg 2000w, https://cdn.prod.website-files.com/65f43207d485843526415f97/667999c073294e6863973250_Banner.jpg 2400w"
                          style={{
                            boxSizing: "border-box",
                            border: "0px",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            display: "inline-block",
                            objectFit: "cover",
                            width: "15rem",
                            height: "19rem",
                          }}
                        />
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            GoodShip
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="swiper-slide home-cs w-dyn-item"
                      role="listitem"
                      style={{
                        boxSizing: "border-box",
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        transitionProperty: "transform",
                        display: "block",
                        flex: "0 0 auto",
                        flexShrink: 0,
                      }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        href="https://www.vezadigital.com/case-studies/chili-piper"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundImage:
                            'url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg")',
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                        }}
                      >
                        <img
                          className="case_study_thumnail_img"
                          src="https://cdn.prod.website-files.com/65f43207d485843526415f97/65f43207d485843526416fa6_IMG-1.jpg"
                          style={{
                            boxSizing: "border-box",
                            border: "0px",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            display: "inline-block",
                            objectFit: "cover",
                            width: "15rem",
                            height: "19rem",
                          }}
                        />
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            Chili Piper
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="swiper-slide home-cs w-dyn-item"
                      role="listitem"
                      style={{
                        boxSizing: "border-box",
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        transitionProperty: "transform",
                        display: "block",
                        flex: "0 0 auto",
                        flexShrink: 0,
                      }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        href="https://www.vezadigital.com/case-studies/grata"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundImage:
                            'url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg")',
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                        }}
                      >
                        <img
                          className="case_study_thumnail_img"
                          src="https://cdn.prod.website-files.com/65f43207d485843526415f97/65f43207d485843526416fa5_IMG-3.jpg"
                          style={{
                            boxSizing: "border-box",
                            border: "0px",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            display: "inline-block",
                            objectFit: "cover",
                            width: "15rem",
                            height: "19rem",
                          }}
                        />
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            Grata
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="swiper-slide home-cs w-dyn-item"
                      role="listitem"
                      style={{
                        boxSizing: "border-box",
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        transitionProperty: "transform",
                        display: "block",
                        flex: "0 0 auto",
                        flexShrink: 0,
                      }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        href="https://www.vezadigital.com/case-studies/slash"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundImage:
                            'url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg")',
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                        }}
                      >
                        <img
                          className="case_study_thumnail_img w-dyn-bind-empty"
                          src="https://cdn.prod.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                          style={{
                            boxSizing: "border-box",
                            border: "0px",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            objectFit: "cover",
                            width: "15rem",
                            height: "19rem",
                            display: "none",
                          }}
                        />
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            Slash
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="swiper-slide home-cs w-dyn-item"
                      role="listitem"
                      style={{
                        boxSizing: "border-box",
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        transitionProperty: "transform",
                        display: "block",
                        flex: "0 0 auto",
                        flexShrink: 0,
                      }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        href="https://www.vezadigital.com/case-studies/nansen"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundImage:
                            'url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg")',
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                        }}
                      >
                        <img
                          className="case_study_thumnail_img"
                          sizes="100vw"
                          src="https://cdn.prod.website-files.com/65f43207d485843526415f97/662a4adcde75be4a5ab89e22_Banner.jpg"
                          srcSet="https://cdn.prod.website-files.com/65f43207d485843526415f97/662a4adcde75be4a5ab89e22_Banner-p-500.jpg 500w, https://cdn.prod.website-files.com/65f43207d485843526415f97/662a4adcde75be4a5ab89e22_Banner-p-800.jpg 800w, https://cdn.prod.website-files.com/65f43207d485843526415f97/662a4adcde75be4a5ab89e22_Banner-p-1080.jpg 1080w, https://cdn.prod.website-files.com/65f43207d485843526415f97/662a4adcde75be4a5ab89e22_Banner-p-1600.jpg 1600w, https://cdn.prod.website-files.com/65f43207d485843526415f97/662a4adcde75be4a5ab89e22_Banner-p-2000.jpg 2000w, https://cdn.prod.website-files.com/65f43207d485843526415f97/662a4adcde75be4a5ab89e22_Banner.jpg 2400w"
                          style={{
                            boxSizing: "border-box",
                            border: "0px",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            display: "inline-block",
                            objectFit: "cover",
                            width: "15rem",
                            height: "19rem",
                          }}
                        />
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            Nansen
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="swiper-slide home-cs w-dyn-item"
                      role="listitem"
                      style={{
                        boxSizing: "border-box",
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        transitionProperty: "transform",
                        display: "block",
                        flex: "0 0 auto",
                        flexShrink: 0,
                      }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        href="https://www.vezadigital.com/case-studies/webconnex-ads"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundImage:
                            'url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg")',
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                        }}
                      >
                        <img
                          className="case_study_thumnail_img w-dyn-bind-empty"
                          src="https://cdn.prod.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                          style={{
                            boxSizing: "border-box",
                            border: "0px",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            objectFit: "cover",
                            width: "15rem",
                            height: "19rem",
                            display: "none",
                          }}
                        />
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            WebConnex Ads
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="swiper-slide home-cs w-dyn-item"
                      role="listitem"
                      style={{
                        boxSizing: "border-box",
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        transitionProperty: "transform",
                        display: "block",
                        flex: "0 0 auto",
                        flexShrink: 0,
                      }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        href="https://www.vezadigital.com/case-studies/unity-charity"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundImage:
                            'url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg")',
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                        }}
                      >
                        <img
                          className="case_study_thumnail_img w-dyn-bind-empty"
                          src="https://cdn.prod.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                          style={{
                            boxSizing: "border-box",
                            border: "0px",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            objectFit: "cover",
                            width: "15rem",
                            height: "19rem",
                            display: "none",
                          }}
                        />
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            Unity Charity
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="swiper-slide home-cs w-dyn-item"
                      role="listitem"
                      style={{
                        boxSizing: "border-box",
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        transitionProperty: "transform",
                        display: "block",
                        flex: "0 0 auto",
                        flexShrink: 0,
                      }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        href="https://www.vezadigital.com/case-studies/ticketspice"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundImage:
                            'url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg")',
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                        }}
                      >
                        <img
                          className="case_study_thumnail_img"
                          sizes="100vw"
                          src="https://cdn.prod.website-files.com/65f43207d485843526415f97/65f43207d485843526416fa4_IMG-2.jpg"
                          srcSet="https://cdn.prod.website-files.com/65f43207d485843526415f97/65f43207d485843526416fa4_IMG-2-p-500.jpg 500w, https://cdn.prod.website-files.com/65f43207d485843526415f97/65f43207d485843526416fa4_IMG-2.jpg 552w"
                          style={{
                            boxSizing: "border-box",
                            border: "0px",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            display: "inline-block",
                            objectFit: "cover",
                            width: "15rem",
                            height: "19rem",
                          }}
                        />
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            TicketSpice
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="swiper-slide home-cs w-dyn-item"
                      role="listitem"
                      style={{
                        boxSizing: "border-box",
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        transitionProperty: "transform",
                        display: "block",
                        flex: "0 0 auto",
                        flexShrink: 0,
                      }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        href="https://www.vezadigital.com/case-studies/spatial"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundImage:
                            'url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg")',
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                        }}
                      >
                        <img
                          className="case_study_thumnail_img"
                          sizes="100vw"
                          src="https://cdn.prod.website-files.com/65f43207d485843526415f97/65f43207d485843526416fa7_IMG.jpg"
                          srcSet="https://cdn.prod.website-files.com/65f43207d485843526415f97/65f43207d485843526416fa7_IMG-p-500.jpg 500w, https://cdn.prod.website-files.com/65f43207d485843526415f97/65f43207d485843526416fa7_IMG.jpg 552w"
                          style={{
                            boxSizing: "border-box",
                            border: "0px",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            display: "inline-block",
                            objectFit: "cover",
                            width: "15rem",
                            height: "19rem",
                          }}
                        />
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            Spatial
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="swiper-slide home-cs w-dyn-item"
                      role="listitem"
                      style={{
                        boxSizing: "border-box",
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        transitionProperty: "transform",
                        display: "block",
                        flex: "0 0 auto",
                        flexShrink: 0,
                      }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        href="https://www.vezadigital.com/case-studies/regfox"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundImage:
                            'url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg")',
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                        }}
                      >
                        <img
                          className="case_study_thumnail_img"
                          src="https://cdn.prod.website-files.com/65f43207d485843526415f97/65f43207d485843526416fa1_IMG-6.jpg"
                          style={{
                            boxSizing: "border-box",
                            border: "0px",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            display: "inline-block",
                            objectFit: "cover",
                            width: "15rem",
                            height: "19rem",
                          }}
                        />
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            RegFox
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="swiper-slide home-cs w-dyn-item"
                      role="listitem"
                      style={{
                        boxSizing: "border-box",
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        transitionProperty: "transform",
                        display: "block",
                        flex: "0 0 auto",
                        flexShrink: 0,
                      }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        href="https://www.vezadigital.com/case-studies/realblocks"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundImage:
                            'url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg")',
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                        }}
                      >
                        <img
                          className="case_study_thumnail_img"
                          src="https://cdn.prod.website-files.com/65f43207d485843526415f97/65f43207d485843526416fa3_IMG-4.jpg"
                          style={{
                            boxSizing: "border-box",
                            border: "0px",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            display: "inline-block",
                            objectFit: "cover",
                            width: "15rem",
                            height: "19rem",
                          }}
                        />
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            RealBlocks
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="swiper-slide home-cs w-dyn-item"
                      role="listitem"
                      style={{
                        boxSizing: "border-box",
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        transitionProperty: "transform",
                        display: "block",
                        flex: "0 0 auto",
                        flexShrink: 0,
                      }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        href="https://www.vezadigital.com/case-studies/northbeam"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundImage:
                            'url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg")',
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                        }}
                      >
                        <img
                          className="case_study_thumnail_img w-dyn-bind-empty"
                          src="https://cdn.prod.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                          style={{
                            boxSizing: "border-box",
                            border: "0px",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            objectFit: "cover",
                            width: "15rem",
                            height: "19rem",
                            display: "none",
                          }}
                        />
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            Northbeam
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="swiper-slide home-cs w-dyn-item"
                      role="listitem"
                      style={{
                        boxSizing: "border-box",
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        transitionProperty: "transform",
                        display: "block",
                        flex: "0 0 auto",
                        flexShrink: 0,
                      }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        href="https://www.vezadigital.com/case-studies/instabug"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundImage:
                            'url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg")',
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                        }}
                      >
                        <img
                          className="case_study_thumnail_img w-dyn-bind-empty"
                          src="https://cdn.prod.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                          style={{
                            boxSizing: "border-box",
                            border: "0px",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            objectFit: "cover",
                            width: "15rem",
                            height: "19rem",
                            display: "none",
                          }}
                        />
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            Instabug
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="swiper-slide home-cs w-dyn-item"
                      role="listitem"
                      style={{
                        boxSizing: "border-box",
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        transitionProperty: "transform",
                        display: "block",
                        flex: "0 0 auto",
                        flexShrink: 0,
                      }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        href="https://www.vezadigital.com/case-studies/dcg-expeditions"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundImage:
                            'url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg")',
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                        }}
                      >
                        <img
                          className="case_study_thumnail_img w-dyn-bind-empty"
                          src="https://cdn.prod.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                          style={{
                            boxSizing: "border-box",
                            border: "0px",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            objectFit: "cover",
                            width: "15rem",
                            height: "19rem",
                            display: "none",
                          }}
                        />
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            DCG Expeditions
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="swiper-slide home-cs w-dyn-item"
                      role="listitem"
                      style={{
                        boxSizing: "border-box",
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        transitionProperty: "transform",
                        display: "block",
                        flex: "0 0 auto",
                        flexShrink: 0,
                      }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        href="https://www.vezadigital.com/case-studies/connect-ca"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundImage:
                            'url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg")',
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                        }}
                      >
                        <img
                          className="case_study_thumnail_img w-dyn-bind-empty"
                          src="https://cdn.prod.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                          style={{
                            boxSizing: "border-box",
                            border: "0px",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            objectFit: "cover",
                            width: "15rem",
                            height: "19rem",
                            display: "none",
                          }}
                        />
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            Connect.ca
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="swiper-slide home-cs w-dyn-item"
                      role="listitem"
                      style={{
                        boxSizing: "border-box",
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        transitionProperty: "transform",
                        display: "block",
                        flex: "0 0 auto",
                        flexShrink: 0,
                      }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        href="https://www.vezadigital.com/case-studies/coherent"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundImage:
                            'url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg")',
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                        }}
                      >
                        <img
                          className="case_study_thumnail_img w-dyn-bind-empty"
                          src="https://cdn.prod.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                          style={{
                            boxSizing: "border-box",
                            border: "0px",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            objectFit: "cover",
                            width: "15rem",
                            height: "19rem",
                            display: "none",
                          }}
                        />
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            Coherent
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="swiper-slide home-cs w-dyn-item"
                      role="listitem"
                      style={{
                        boxSizing: "border-box",
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        transitionProperty: "transform",
                        display: "block",
                        flex: "0 0 auto",
                        flexShrink: 0,
                      }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        href="https://www.vezadigital.com/case-studies/cavelier"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundImage:
                            'url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg")',
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                        }}
                      >
                        <img
                          className="case_study_thumnail_img w-dyn-bind-empty"
                          src="https://cdn.prod.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                          style={{
                            boxSizing: "border-box",
                            border: "0px",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            objectFit: "cover",
                            width: "15rem",
                            height: "19rem",
                            display: "none",
                          }}
                        />
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            Cavelier Abogados
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="swiper-slide home-cs w-dyn-item"
                      role="listitem"
                      style={{
                        boxSizing: "border-box",
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        transitionProperty: "transform",
                        display: "block",
                        flex: "0 0 auto",
                        flexShrink: 0,
                      }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        href="https://www.vezadigital.com/case-studies/bramar"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundImage:
                            'url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg")',
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                        }}
                      >
                        <img
                          className="case_study_thumnail_img w-dyn-bind-empty"
                          src="https://cdn.prod.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                          style={{
                            boxSizing: "border-box",
                            border: "0px",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            objectFit: "cover",
                            width: "15rem",
                            height: "19rem",
                            display: "none",
                          }}
                        />
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            Bramar
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="swiper-slide home-cs w-dyn-item"
                      role="listitem"
                      style={{
                        boxSizing: "border-box",
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        transitionProperty: "transform",
                        display: "block",
                        flex: "0 0 auto",
                        flexShrink: 0,
                      }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        href="https://www.vezadigital.com/case-studies/bibliu"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundImage:
                            'url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg")',
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                        }}
                      >
                        <img
                          className="case_study_thumnail_img w-dyn-bind-empty"
                          src="https://cdn.prod.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                          style={{
                            boxSizing: "border-box",
                            border: "0px",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            objectFit: "cover",
                            width: "15rem",
                            height: "19rem",
                            display: "none",
                          }}
                        />
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            BibliU
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="swiper-slide home-cs w-dyn-item"
                      role="listitem"
                      style={{
                        boxSizing: "border-box",
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        transitionProperty: "transform",
                        display: "block",
                        flex: "0 0 auto",
                        flexShrink: 0,
                      }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        href="https://www.vezadigital.com/case-studies/avasta"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundImage:
                            'url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg")',
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                        }}
                      >
                        <img
                          className="case_study_thumnail_img w-dyn-bind-empty"
                          src="https://cdn.prod.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                          style={{
                            boxSizing: "border-box",
                            border: "0px",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            objectFit: "cover",
                            width: "15rem",
                            height: "19rem",
                            display: "none",
                          }}
                        />
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            Avasta
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="swiper-slide home-cs w-dyn-item"
                      role="listitem"
                      style={{
                        boxSizing: "border-box",
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        transitionProperty: "transform",
                        display: "block",
                        flex: "0 0 auto",
                        flexShrink: 0,
                      }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        href="https://www.vezadigital.com/case-studies/accelevents"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundImage:
                            'url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg")',
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                        }}
                      >
                        <img
                          className="case_study_thumnail_img"
                          src="https://cdn.prod.website-files.com/65f43207d485843526415f97/65f43207d485843526416fa0_IMG-7.jpg"
                          style={{
                            boxSizing: "border-box",
                            border: "0px",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            display: "inline-block",
                            objectFit: "cover",
                            width: "15rem",
                            height: "19rem",
                          }}
                        />
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            Accelevents
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="swiper-slide home-cs w-dyn-item"
                      role="listitem"
                      style={{
                        boxSizing: "border-box",
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        transitionProperty: "transform",
                        display: "block",
                        flex: "0 0 auto",
                        flexShrink: 0,
                      }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        href="https://www.vezadigital.com/case-studies/7bridges"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundImage:
                            'url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg")',
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                        }}
                      >
                        <img
                          className="case_study_thumnail_img w-dyn-bind-empty"
                          src="https://cdn.prod.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                          style={{
                            boxSizing: "border-box",
                            border: "0px",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            objectFit: "cover",
                            width: "15rem",
                            height: "19rem",
                            display: "none",
                          }}
                        />
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            7Bridges
                          </h3>
                        </div>
                      </a>
                    </div>
                    <div
                      className="swiper-slide home-cs w-dyn-item"
                      role="listitem"
                      style={{
                        boxSizing: "border-box",
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        transitionProperty: "transform",
                        display: "block",
                        flex: "0 0 auto",
                        flexShrink: 0,
                      }}
                    >
                      <a
                        className="case_study_thumnail w-inline-block"
                        href="https://www.vezadigital.com/case-studies/krado"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          maxWidth: "100%",
                          display: "inline-block",
                          backgroundPosition: "50% center",
                          overflow: "hidden",
                          color: "white",
                          backgroundImage:
                            'url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg")',
                          backgroundSize: "cover",
                          borderTopLeftRadius: "1rem",
                          borderTopRightRadius: "1rem",
                          width: "15rem",
                          height: "19rem",
                          position: "relative",
                        }}
                      >
                        <img
                          className="case_study_thumnail_img w-dyn-bind-empty"
                          src="https://cdn.prod.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                          style={{
                            boxSizing: "border-box",
                            border: "0px",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            objectFit: "cover",
                            width: "15rem",
                            height: "19rem",
                            display: "none",
                          }}
                        />
                        <div
                          className="case_study_thumbnail_hover"
                          style={{
                            boxSizing: "border-box",
                            padding: "1rem 1rem 1.4rem 1.4rem",
                            transition: "opacity 0.35s ease 0s",
                            inset: "0%",
                            backgroundImage:
                              "linear-gradient(180deg,transparent,#0e031e)",
                            opacity: 0,
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            display: "flex",
                            position: "absolute",
                          }}
                        >
                          <h3
                            className="text-size-large"
                            style={{
                              boxSizing: "border-box",
                              letterSpacing: "-0.035px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              fontWeight: 500,
                              fontSize: "1.5rem",
                              lineHeight: 1.5,
                            }}
                          >
                            Krado
                          </h3>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="lightleaks-ds-gore"
              src="https://cdn.prod.website-files.com/65f43207d485843526415f76/65fc5e06b16a9e9f5054a570_cs.svg"
              style={{
                boxSizing: "border-box",
                border: "0px",
                verticalAlign: "middle",
                maxWidth: "100%",
                display: "inline-block",
                inset: "0% 0% auto",
                width: "100%",
                position: "absolute",
              }}
            />
          </div>
        </div>
      </section>
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  box-sizing: border-box;
  text-size-adjust: 100%;
  font-family: sans-serif;
  height: 100%;
}

body {
  box-sizing: border-box;
  margin: 0px;
  min-height: 100%;
  background-color: #0e031e;
  color: white;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.4;
  text-rendering: optimizelegibility;
  -webkit-font-smoothing: antialiased;
  font-family: Neuemontreal, sans-serif;
  cursor: default;
  overflow: scroll;
  margin-left: 0px;
  width: 100%;
  position: absolute;
}
`,
        }}
      />
    </>
  );
}
