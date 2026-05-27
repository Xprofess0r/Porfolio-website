import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import CodeThinking from "./CodeThinking";
import ReactTypingEffect from "react-typing-effect";

export default function Greeting(props) {
  const theme = props.theme;
  const isDark = props.isDark;
  return (
    <Fade bottom duration={1000} distance="30px">
      <div className={`greet-main${isDark ? " greet-dark" : ""}`} id="greeting">
        {/* Animated gradient blobs */}
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />

        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <span className="greeting-badge" style={{ color: theme.imageHighlight, borderColor: theme.imageHighlight + "44", background: theme.imageHighlight + "12" }}>
                <span className="badge-dot" style={{ background: theme.imageHighlight }} />
                Open to opportunities
              </span>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                Hi, I'm{" "}
                <span className="greeting-name-highlight" style={{ color: theme.imageHighlight }}>
                  {greeting.title}
                </span>
              </h1>
              {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.secondaryText }}>
                  ( {greeting.nickname} )
                </h2>
              )}
              <p className="greeting-text-p subTitle" style={{ color: theme.secondaryText }}>
                <ReactTypingEffect
                  text={greeting.subTitle}
                  eraseSpeed={80}
                  speed={90}
                  eraseDelay={1800}
                  typingDelay={300}
                />
              </p>
              <SocialMedia theme={theme} />
              <div className="portfolio-repo-btn-div">
                <Button
                  text="❤️ See My Resume"
                  newTab={true}
                  href={greeting.resumeLink}
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <CodeThinking theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
