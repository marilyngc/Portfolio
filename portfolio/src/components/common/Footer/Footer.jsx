// import logo from "../../../assets/logo/logoMarilyn.png"

export const Footer = () => {
  return (
    <>
    <footer className="hcode-footer-bottom bg-neutral-900 ">
  <div className="container mx-auto">
    <div className="flex flex-wrap justify-between py-3">
      <div className="w-full md:w-2/3 text-left text-gray-500 text-sm  xs:text-center xs:mb-2">
        <div className="inline-block align-middle">
          <div className="mx-10 mt-5 md:mt-0   md:mx-0">
            © 2024{" "}
            <a
              href="https://github.com/marilyngc"
              target="_blank"
              className="text-gray-400 hover:text-white"
              rel="noopener"
            >
              Marilyn
            </a>{" "}
            v2. Aprendiendo a construir software con ♥ desde Maracaibo para el mundo.
          </div>
        </div>{" "}
       
      </div>
     
    </div>
  </div>
</footer>

    </>
  );
};
