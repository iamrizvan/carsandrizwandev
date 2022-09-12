import { useState } from "react";
import "./NewsLetter.css";

function NewsLetter() {
  const mystyle = {
    color: "rgba(22, 25, 28, 0.84)",
    padding: "15px",
    marginLeft: "3%",
    textAlign: "start",
    fontSize: "36px",
  };

  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log(email);
    } else {
      console.log("Empty Values");
    }
  };

  return (
    <>
      <section className="sec-news">
        <h1 style={mystyle}>Newsletter</h1>
        <div className="news-container">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-control">
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <button type="submit">Subscribe</button>
            </div>
            <p>
              Subscribe our newsletter to get updated about our best deal and
              latest collection.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

export default NewsLetter;
