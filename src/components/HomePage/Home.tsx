import Background from "../Layout/Background";

const Home = () => {
  return (
    <Background>
      <section className="h-screen pt-[60px]">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-6">
            Hugh Stoddart
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-12 text-center">
            British screenwriter
          </h2>
        </div>
      </section>
    </Background>
  );
};

export default Home;
