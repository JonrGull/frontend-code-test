import { VoidFunctionComponent as VFC } from "react";

const Home: VFC<void> = () => {
  return (
    <main>
      <div className="home">
        <figure>
          <img
            src="https://static.octopuscdn.com/logos/logo.svg"
            alt="Octopus Energy Logo"
          />
        </figure>
        <h1>Welcome to the Octopus Energy Frontend code test!</h1>
        <p>
          Get started by visiting the <code>/product</code> URL and editing{" "}
          <code>client/pages/product.js</code>
        </p>
      </div>
    </main>
  );
}

export default Home;