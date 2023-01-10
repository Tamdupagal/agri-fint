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
        <div className=" px-4 py-4 rounded-xl flex flex-col lg:flex-row">
          <p className="py-2 bg-primary rounded-xl m-2 px-2  ">
            Fresh Harvest - Ploughing is the first step of farming, It is done
            to looses the soil and all the unwanted plants present in the soil
            are removed. Just like that a monthly investment plan.
          </p>
          <p className="py-2 bg-primary rounded-xl m-2 px-2  ">
            Sowing Seeds - Various types of modern farming methods which are
            used nowadays are agribusiness, intensive farming, organic and
            sustainable agriculture help farmers buy and sell products in world
            market. An yearly plan initiative.
          </p>
          <p className="py-2 bg-primary rounded-xl m-2 px-2  ">
            Agro Gain - Farmers in modern farming use mixed farming technique.
            Mixed farming technique is crop production combined with rearing of
            livestock. An early plan of modern farming teahnique.
          </p>
          <p className="py-2 bg-primary rounded-xl m-2 px-2  ">
            High Yield farm - Integrated farming is zero-waste procedure. This
            allows maximum utilisation of resources and increases efficiency of
            production. Agventure of high returns with an efficient farming
            technique
          </p>
        </div>
        <div class="container flex justify-center mx-auto">
          <div class="flex flex-col">
            <div class="w-full">
              <div class="border-b border-gray-200 shadow pt-10">
                <table class="divide-y divide-gray-300  text-white">
                  <thead class="bg-primary">
                    <tr>
                      <th class="px-6 py-2 text-base text-white">Products</th>
                      <th class="px-6 py-2 text-base text-white">
                        Fresh Harvest
                      </th>
                      <th class="px-6 py-2 text-base text-white">
                        Sowing Seeds
                      </th>

                      <th class="px-6 py-2 text-base text-white">Agro Gain</th>
                      <th class="px-6 py-2 text-base text-white">Agventure</th>
                    </tr>
                  </thead>
                  <tbody class="bg-cardBg divide-y divide-gray-300">
                    <tr class="whitespace-nowrap">
                      <td class="px-6 py-4 text-base text-paraclr">
                        Unit Investment (INR)
                      </td>
                      <td class="px-6 py-4">
                        <div class="text-base text-paraclr">5000 p.m.</div>
                      </td>
                      <td class="px-6 py-4">
                        <div class="text-base text-paraclr">20000</div>
                      </td>
                      <td class="px-6 py-4 text-base text-paraclr">200000</td>
                      <td class="px-6 py-4 text-base text-paraclr">1000000</td>
                    </tr>
                    <tr class="whitespace-nowrap">
                      <td class="px-6 py-4 text-base text-paraclr">ROI</td>
                      <td class="px-6 py-4 ">
                        <div class="text-base text-paraclr">10%</div>
                      </td>
                      <td class="px-6 py-4 text-base text-paraclr">
                        <div class="text-base text-paraclr">12%</div>
                      </td>
                      <td class="px-6 py-4 text-base text-paraclr">16%</td>
                      <td class="px-6 py-4 text-base text-paraclr">18%</td>
                    </tr>
                    <tr class="whitespace-nowrap">
                      <td class="px-6 py-4 text-base text-paraclr">Lockin</td>
                      <td class="px-6 py-4">
                        <div class="text-base text-paraclr">12 months</div>
                      </td>
                      <td class="px-6 py-4">
                        <div class="text-base text-paraclr">12 months</div>
                      </td>
                      <td class="px-6 py-4 text-base text-paraclr">
                        12 months
                      </td>
                      <td class="px-6 py-4 text-base text-paraclr">
                        18 months
                      </td>
                    </tr>
                    <tr class="whitespace-nowrap">
                      <td class="px-6 py-4 text-base text-paraclr">
                        Payout Frequency
                      </td>
                      <td class="px-6 py-4">
                        <div class="text-base text-paraclr">Quarterly</div>
                      </td>
                      <td class="px-6 py-4">
                        <div class="text-base text-paraclr">Quarterly</div>
                      </td>
                      <td class="px-6 py-4 text-base text-paraclr">
                        Quarterly
                      </td>
                      <td class="px-6 py-4 text-base text-paraclr">
                        Quarterly
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
