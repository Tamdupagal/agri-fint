import { Box, Slider } from '@material-ui/core';
import Image from 'next/image';
import React, { useState } from 'react';
import { calcolatorData } from '../../public/homeData';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

const customMarks = [
    {
        value: 0,
        label: '5000',
        amount: 5000,


    },
    {
        value: 17,
        amount: 10000,
    },
    {
        value: 34,
        label: '20000',
        amount: 20000,
    },
    {
        value: 51,
        amount: 40000,
    },
    {
        value: 68,
        label: '200000',
        amount: 200000,
    },
    {
        value: 85,
        amount: 1000000,
    },
    {
        value: 100,
        label: '2000000',
        amount: 2000000,
    },
];








const Calculator = () => {
    return (
        <div className='px-6 lg:px-36 bg-dark text-fontclr  py-10 '>
            <div className='flex flex-col items-center text-center'>
                <p className='text-xl font-semibold text-primary capitalize'>CALCULATE YOUR RETURNS ON INVESTMENT</p>
                <h2 className='text-3xl lg:text-5xl my-3 uppercase'>Estimate your Earnings before Investing</h2>
                <Image src={"/assets/section-title-icon-1.png"} width={54} height={21} alt="title icon" />
            </div>

            <SliderBar />

        </div>
    );
};

export default Calculator;


const SliderBar = () => {

    const [value, setValue] = useState(0);

    const changeValue = (event, value) => {
        setValue(value);
    };
    const getText = (value) => `${value}`;

    const getPackage = calcolatorData.find(data => value === data.value);
    const { packages, payout, rate, amount, img } = getPackage;
    const getTakeaway = (parseInt(amount) + parseInt((amount * (10 / 100))))

    console.log(getTakeaway);

    const data = {
        labels: ['Bank FD', 'Bond',  'Mutual Fund', 'Agrifint'],
        datasets: [{
            label: 'Profits',
            data: [1800, 3000, 3600, 3000,],
            backgroundColor: [
                '#1F6306',
                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                
            ],
        },
        {
            label: 'Taxs',
            data: [180,300, 360, 0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                
            ],
        }]
    }




    return (
        <div className='flex flex-col lg:flex-row items-center justify-between gap-10 my-10'>
            <div className='bg-darkBg text-white p-10 h-auto lg:h-[610px] rounded-lg w-full lg:w-1/2 flex flex-col items-center justify-center gap-5'>
                <h2 className='text-3xl lg:text-4xl font-bold h-20 text-center'>Investment Amount <span className='text-yellow'>₹{amount}</span></h2>
                <div className='h-20'>
                    <Box display="flex" flexDirection="column"  >
                        <Slider
                            style={{ width: "320px",height:"20px", fontSize: "20px" }}
                            min={0}
                            max={100}
                            step={17}
                            value={value}
                            marks={customMarks}
                            onChange={changeValue}
                            getAriaValueText={getText}
                        />
                    </Box>
                </div>

                <div className='flex  flex-col lg:flex-row items-center gap-4 justify-between w-full'>
                    <div className='flex items-center gap-2'>
                        <Image src={'/assets/lock.svg'} width={24} height={24} alt={"lock"} />
                        <h2 className='text-xl font-bold'>LOCK IN: 12 MONTHS</h2>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Image src={'/assets/sandwatch.svg'} width={24} height={24} alt={"lock"} />
                        <h2 className='text-xl font-bold'>TENURE: 36 MONTHS</h2>
                    </div>
                </div>

                <div className='flex items-center gap-2 my-5'>
                    <Image src={img} width={37} height={27} alt={packages} />
                    <h2 className='text-3xl text-yellow font-bold'>{packages}</h2>
                </div>

                <div className='flex  flex-col lg:flex-row items-center gap-4 justify-between w-full'>
                    <div className='flex flex-col items-center justify-center'>
                        <h3 className='text-4xl font-bold text-white'>{rate}%</h3>
                        <p>ROI</p>
                    </div>

                    <div className='flex flex-col items-center justify-center'>
                        <h3 className='text-4xl font-bold text-white'>{getTakeaway}</h3>
                        <p>Takeaway</p>
                    </div>

                    <div className='flex flex-col items-center justify-center'>
                        <h3 className='text-4xl font-bold text-white'>{payout}</h3>
                        <p>Payout</p>
                    </div>
                </div>


            </div>



            <div className='bg-darkBg text-white p-10 h-[400px] lg:h-[610px] rounded-lg w-full lg:w-1/2 flex flex-col items-center justify-center gap-5'>
                <Bar
                    data={data}
                    width={400}
                    height={200}
                    options={{
                        maintainAspectRatio: false
                    }}
                />

            </div>

        </div>
    )
}