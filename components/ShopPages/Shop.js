import React from "react";

const Shop = () => {
  return (
    <div className="lg:pt-32 pt-20 pb-20 bg-dark">
      <div className={"service_page"}>
        <div className="text-center text-white pt-24 ">
          <a className="px-5 rounded-full About_btn text-xl p-1.5 " href="#">
            Home / Shop{" "}
          </a>
          <h2 className="text-5xl font-bold tracking-widest py-3">Shop</h2>
        </div>
      </div>
      <div className="lg:px-48 px-4 text-base text-white py-10  text-center ">
        <div class="container flex justify-center mx-auto">
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-white ">
              <thead class="text-xs text-white uppercase bg-primary ">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Products
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Fresh Harvest
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Sowing Seeds
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Agro Gain
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Agventure
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-cardBg border-b  hover:bg-primary ">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium whitespace-nowrap text-white"
                  >
                    Unit Investment (INR)
                  </th>
                  <td class="px-6 py-4">5000 p.m.</td>
                  <td class="px-6 py-4">20000</td>
                  <td class="px-6 py-4">200000</td>
                  <td class="px-6 py-4 text-right">1000000 </td>
                </tr>
                <tr class="bg-cardBg border-b  hover:bg-primary ">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium  whitespace-nowrap text-white"
                  >
                    ROI
                  </th>
                  <td class="px-6 py-4">10%</td>
                  <td class="px-6 py-4">12%</td>
                  <td class="px-6 py-4">16% </td>
                  <td class="px-6 py-4 text-right">18%</td>
                </tr>
                <tr class="bg-cardBg border-b  hover:bg-primary ">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium  whitespace-nowrap text-white"
                  >
                    Lockin
                  </th>
                  <td class="px-6 py-4">12 months</td>
                  <td class="px-6 py-4">12 months</td>
                  <td class="px-6 py-4">12 months</td>
                  <td class="px-6 py-4 text-right">18 months</td>
                </tr>
                <tr class="bg-cardBg   hover:bg-primary ">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium  whitespace-nowrap text-white"
                  >
                    Payout Frequency
                  </th>
                  <td class="px-6 py-4">Quarterly</td>
                  <td class="px-6 py-4">Quarterly</td>
                  <td class="px-6 py-4">Quarterly</td>
                  <td class="px-6 py-4 text-right">Quarterly</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className=" px-4 py-4 rounded-xl flex flex-col lg:flex-row">
          <div className="py-2 m-2 px-2  ">
            <p className="py-2 bg-cardBg  rounded-tl-lg rounded-tr-lg px-2">
              Fresh Harvest
            </p>
            <p className="py-2 bg-primary rounded-bl-lg rounded-br-lg px-2 ">
              Ploughing is the first step of farming, It is done to looses the
              soil and all the unwanted plants present in the soil are removed.
              Just like that a monthly investment plan.
            </p>
          </div>
          <div className="py-2 m-2 px-2  ">
            <p className="py-2 bg-cardBg  rounded-tl-lg rounded-tr-lg px-2">
              Sowing Seeds
            </p>
            <p className="py-2 bg-primary rounded-bl-lg rounded-br-lg px-2">
              Various types of modern farming methods which are used nowadays
              are agribusiness, intensive farming, organic and sustainable
              agriculture help farmers buy and sell products in world market. An
              yearly plan initiative.
            </p>
          </div>
          <div className="py-2 m-2 px-2  ">
            <p className="py-2 bg-cardBg  rounded-tl-lg rounded-tr-lg px-2">
              Agro Gain
            </p>
            <p className="py-2 bg-primary rounded-bl-lg rounded-br-lg px-2">
              Farmers in modern farming use mixed farming technique. Mixed
              farming technique is crop production combined with rearing of
              livestock. An early plan of modern farming teahnique.
            </p>
          </div>
          <div className="py-2 m-2 px-2  ">
            <p className="py-2 bg-cardBg  rounded-tl-lg rounded-tr-lg px-2">
              High Yield farm
            </p>
            <p className="py-2 bg-primary rounded-bl-lg rounded-br-lg px-2">
              Integrated farming is zero-waste procedure. This allows maximum
              utilisation of resources and increases efficiency of production.
              Agventure of high returns with an efficient farming technique
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
