import React from "react";

function About() {
  return (
    <div>
      <br />
      <div className="d-flex flex-column align-items-center">
        <div className="w-100 d-flex flex-column justify-content-center align-items-center">
          <div className="d-flex justify-content-center align-items-center">
            <h1 className="d-flex align-items-center"> </h1>
          </div>
        </div>

        <div className="w-75 d-flex flex-column align-items-start">
          <h4>
            <b>Idea</b>
          </h4>
          <h6>
            Melodify is a music generator site that lets you enter a valid
            website url and it scrapes words from the contents of the website.
            It then translates the words into musical notes using magic math
            functions. The idea initially came out from the silly question,
            "What might a website sound like?” A wikipedia page of your favorite
            actor might sound like a soundtrack from a dungeon scene of a movie,
            and perhaps your facebook page might sound so out of tune and
            chaotic. You have the option to choose from different instruments:
            from piano to edm. Try it out, and hear what your favorite website
            tells you.
          </h6>
        </div>

        <br />

        <div className="w-75 d-flex flex-column align-items-start">
          <h4>
            <b>How It Works</b>
          </h4>
          <h6>
            We first scrape a website of a portion of its words. Depending on
            the word a mucical note will be assigned to it - The first letter
            will dictate the note, meanwhile the length will dictate duration.
            Using Keith William Horwood's dynamically generated synthetic
            keyboard we were able to map the words into a song on the client
            browser.
          </h6>
        </div>

        <br />

        <div className="w-75 d-flex flex-column align-items-start">
          <h4>
            <b>Technologies</b>
          </h4>
          <h6>
            Angular.js (Now React.js), Bootstrap, CSS, HTML, JavaScript,
            Node.js, Puppeteer, and Typescript.
          </h6>
        </div>

        <br />

        <div className="d-flex flex-column align-items-center w-75">
          <div className="d-flex w-100 justify-content-around align-items-center">
            <div className="d-flex flex-column align-items-center">
              <img
                className="images mb-2 shadow rounded"
                src="/assets/yusra.jpg"
                alt="yusra"
              />
              <h5>Yusra Irfan</h5>
              <p>Missisauga, ON, Canada</p>
              <p>Western University</p>
              <div className="d-flex w-50 justify-content-around">
                <a href="https://github.com/irfanyusra">
                  {" "}
                  <i
                    className="fa fa-github"
                    style={{ fontSize: "36px", color: "#28054d" }}
                  />
                </a>
                <a href="https://www.linkedin.com/in/irfanyusra/">
                  <i
                    className="fa fa-linkedin-square"
                    style={{ fontSize: "36px", color: "#28054d" }}
                  />
                </a>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center">
              <img
                className="images mb-2 shadow rounded"
                src="/assets/judy.jpg"
                alt="judy"
              />
              <h5>Judy Ham</h5>
              <p>Richmond Hill, ON, Canada</p>
              <p>York University</p>
              <div className="d-flex w-50 justify-content-around">
                <a href="https://github.com/judyyhha">
                  {" "}
                  <i
                    className="fa fa-github"
                    style={{ fontSize: "36px", color: "#28054d" }}
                  />
                </a>
                <a href="https://www.linkedin.com/in/yeonghyeon-ham/">
                  <i
                    className="fa fa-linkedin-square"
                    style={{ fontSize: "36px", color: "#28054d" }}
                  />
                </a>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center">
              <img
                className="images mb-2 shadow rounded"
                src="/assets/phil.jpg"
                alt="phil"
              />
              <h5>Phillip Truong</h5>
              <p>Niagara Falls, ON, Canada</p>
              <p>Western University</p>
              <div className="d-flex w-50 justify-content-around">
                <a href="https://github.com/PhillipTruong">
                  {" "}
                  <i
                    className="fa fa-github"
                    style={{ fontSize: "36px", color: "#28054d" }}
                  />
                </a>
                <a href="https://www.linkedin.com/in/truonghphillip/">
                  <i
                    className="fa fa-linkedin-square"
                    style={{ fontSize: "36px", color: "#28054d" }}
                  />
                </a>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center">
              <img
                className="images mb-2 shadow rounded"
                src="/assets/ged.jpg"
                alt="ged"
              />
              <h5>Gedion Teshome</h5>
              <p>Addis Ababa, ADD, Ethiopia</p>
              <p>Addis Ababa Science and Tech University</p>
              <div className="d-flex w-50 justify-content-around">
                <a href="https://github.com/GedionT">
                  {" "}
                  <i
                    className="fa fa-github"
                    style={{ fontSize: "36px", color: "#28054d" }}
                  />
                </a>
                <a href="https://www.linkedin.com/in/gedion-teshome-142431146/">
                  <i
                    className="fa fa-linkedin-square"
                    style={{ fontSize: "36px", color: "#28054d" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default About;
