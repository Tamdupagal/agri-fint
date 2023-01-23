import Image from "next/image";
import React from "react";

const Shop = () => {
  return (
    <div className="lg:pt-32 pt-20 pb-20 bg-dark">
      <div className={"shop_page"}>
        <div className="text-center text-white pt-24 ">
          <a className="px-5 rounded-full About_btn text-xl p-1.5 " href="#">
            Home / Shop{" "}
          </a>
          <h2 className="text-5xl font-bold tracking-widest py-3">Shop</h2>
        </div>
      </div>
      <div className="lg:px-48 px-4 text-base text-white py-10  text-center ">
        <div className="container flex justify-center mx-auto">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-white ">
              <thead className="text-xs text-white uppercase bg-primary ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Products
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Fresh Harvest
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Sowing Seeds
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Agro Gain
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <i>AG</i>venture
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-cardBg border-b  hover:bg-primary ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap text-white"
                  >
                    Unit Investment (INR)
                  </th>
                  <td className="px-6 py-4">5000</td>
                  <td className="px-6 py-4">25000</td>
                  <td className="px-6 py-4">200000</td>
                  <td className="px-6 py-4 ">1000000 </td>
                </tr>
                <tr className="bg-cardBg border-b  hover:bg-primary ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium  whitespace-nowrap text-white"
                  >
                    ROI
                  </th>
                  <td className="px-6 py-4">10%</td>
                  <td className="px-6 py-4">12%</td>
                  <td className="px-6 py-4">16% </td>
                  <td className="px-6 py-4">18%</td>
                </tr>
                <tr className="bg-cardBg border-b  hover:bg-primary ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium  whitespace-nowrap text-white"
                  >
                    Lockin
                  </th>
                  <td className="px-6 py-4">12 months</td>
                  <td className="px-6 py-4">12 months</td>
                  <td className="px-6 py-4">12 months</td>
                  <td className="px-6 py-4 ">18 months</td>
                </tr>
                <tr className="bg-cardBg   hover:bg-primary ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium  whitespace-nowrap text-white"
                  >
                    Payout Frequency
                  </th>
                  <td className="px-6 py-4">Monthly</td>
                  <td className="px-6 py-4">Monthly</td>
                  <td className="px-6 py-4">Quarterly</td>
                  <td className="px-6 py-4 ">Quarterly</td>
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
              <i>AG</i>venture
            </p>
            <p className="py-2 bg-primary rounded-bl-lg rounded-br-lg px-2">
              Integrated farming is zero-waste procedure. This allows maximum
              utilisation of resources and increases efficiency of production.
              <i>AG</i>venture of high returns with an efficient farming
              technique
            </p>
          </div>
        </div>
        <div>
          <b>
            <p className="py-3">Banks Details:</p>
          </b>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-white ">
              <thead className="text-xs text-white uppercase bg-primary ">
                <tr>
                  <th scope="col" className="px-6 py-3 rounded-tl-xl">
                    Account Name
                  </th>
                  <th scope="col" className="px-6 py-3 rounded-tr-xl">
                    Account Number
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-cardBg border-b  hover:bg-primary ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap text-white"
                  >
                    Fintlivest Service Pvt Ltd Escrow Account
                  </th>
                  <td className="px-6 py-4">00014407466918</td>
                </tr>
              </tbody>
              <thead className="text-xs text-white uppercase bg-primary ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Purpose
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-cardBg border-b  hover:bg-primary ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap text-white"
                  >
                    Vidit@fintlivest.com
                  </th>
                  <td className="px-6 py-4">Payment</td>
                </tr>
              </tbody>
              <thead className="text-xs text-white uppercase bg-primary ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    IFSC
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Start Date
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-cardBg hover:bg-primary ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap text-white rounded-bl-xl"
                  >
                    RATN0000100
                  </th>
                  <td className="px-6 py-4 rounded-br-xl">21 Jul 2022</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="py-6  container flex justify-center mx-auto">
            <Image
              src={"/assets/qrcode.png"}
              alt="qrcode"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
