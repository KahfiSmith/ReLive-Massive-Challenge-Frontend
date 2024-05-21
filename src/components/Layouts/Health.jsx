import { Link } from "react-router-dom";

const Health = () => {
  return (
    <div
      id="artikel"
      className="pt-12 flex justify-center text-white bg-teal-500"
    >
      <div className="container">
        <div className="flex flex-wrap mb-20">
          <div className="w-full self-center px-8 md:px-12 lg:px-20">
            <h1 className="font-bold text-2xl mb-20 md:text-3xl lg:text-4xl text-center w-full">
              Artikel
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:gap-6 md:grid-cols-2 lg:grid-cols-4 w-full">
            <Link to={"/artikel"}>
            <div className="card-artikel">
              <div className="flex justify-center">
                <img
                  src="/images/health1.png"
                  alt=""
                  className="w-1/2 lg:w-3/4"
                />
              </div>
              <div>
                <h1 className="title-artikel">Apa itu mental health?</h1>
              </div>
            </div>
            </Link>
            <div className="card-artikel">
              <div className="flex justify-center">
                <img
                  src="/images/health2.png"
                  alt=""
                  className="w-1/2 lg:w-3/4"
                />
              </div>
              <h1 className="title-artikel">
                Apa itu konseling? dan apa saja jenisnya?
              </h1>
            </div>
            <div className="card-artikel">
              <div className="flex justify-center">
                <img
                  src="/images/health3.png"
                  alt=""
                  className="w-1/2 lg:w-3/4"
                />
              </div>
              <h1 className="title-artikel">
                Contoh gangguan kesehatan mental
              </h1>
            </div>
            <div className="card-artikel">
              <div className="flex justify-center">
                <img
                  src="/images/health4.png"
                  alt=""
                  className="w-1/2 lg:w-3/4"
                />
              </div>
              <h1 className="title-artikel">Breaking the stigma</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Health;
