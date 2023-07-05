import img from "../assets/img.jpg";
import imgbig from "../assets/img-wihtoutbg-big.png";
import imgsmall from "../assets/img-withoutbg-small.png";

function Home() {
  return (
    <>
      <div
        className="jumbotron"
        style={{
          textAlign: "center",
          margin: "auto",
        }}
      >
        <h1 className="display-4">Hello, world!</h1>
      </div>
      <div className="container-fluid">
        <center>
          <img src={imgsmall} className="rounded mx-auto d-block" alt="..." />
        </center>
      </div>
      <div
        className="jumbotron"
        style={{
          textAlign: "center",
          margin: "auto",
        }}
      >
        <p className="lead">
          I am Chayan Dashora, currently based in Sydney, an Android Developer,
          DevOps Engineer, Cybersecurity Student and IoT enthusiast.
        </p>
        <hr className="my-1" />
      </div>
    </>
  );
}

export default Home;
