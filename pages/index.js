import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState} from 'react';

export default function Home() {
    let [state, setState] = useState({data: []})

    function searchHandler(e) {
        e.preventDefault();
        let cookieStore = {
            Location: e.target.location.value,
            minCustomers: e.target.minCustomers.value,
            maxCustomers: e.target.maxCustomers.value,
            avgCookies: e.target.avgCookies.value,
        };
        // setState(cookieStore);
        e.target.reset();
    }

    return (
        <div>
            <Header/>
            <main data={state} className="flex flex-col items-center bg-green-50">
                <InputForm onSubmit={searchHandler}/>

                <Main data={state}/>
            </main>
            <Footer copyright='Code Fellows 2022'/>
        </div>
    )
}

function Header() {
    return <header className="px-5 py-4 bg-emerald-500">
        <h1 className='text-2xl'>Cookie Stand Admin</h1>
    </header>
}

function Main(props) {
    return (
        <main className="flex flex-col items-center pt-6 space-y-10 py-y">
            <p className="text-sm text-gray-600">Report Table Coming Soon...</p>
            <p className="text-sm text-gray-600"> 'location':Barcelona', 'miniCustomer':2, 'MaxCustomers':4,
                'avgCookies':2.5</p>
        </main>
    )
}

function Footer({copyright}) {
    return <footer className="px-8 py-4 bg-emerald-500">
        <p>&copy;{copyright}</p>
    </footer>


}


function InputForm(props) {
    return <form onSubmit={props.onSubmit} className='w-400 max-w-screen-lg p-3 px-5 my-5 bg-emerald-300 rounded-md'>
        <h1 className='flex justify-center py-2 text-xl'>Create Cookie Stand</h1>
        <div className='flex flex-wrap'>
            <label className='pr-3'>Location</label>
            <input id='location' className='flex-auto px-2' placeholder="Barcelona" required/>
        </div>

        <div className='flex flex-row'>

            <div className='mt-6 text-center'>
                <label>
                    Minimum Customers per Hour
                </label>
                <input
                    className='w-64'
                    id='minCustomers'
                    type='number'
                    placeholder='2'
                    required
                />
            </div>

            <div className='mt-6 text-center'>
                <label>
                    Maximum Customers per Hour
                </label>
                <input
                    className='w-64'
                    id='maxCustomers'
                    type='number'
                    placeholder='4'
                    required
                />
            </div>

            <div className='mt-6 text-center'>
                <label>
                    Average Cookies per Hour
                </label>
                <input
                    className='w-64'
                    id='avgCookies'
                    type='number'
                    placeholder='2.5'
                    required
                />

            </div>
            <button className='w-60 h-10 px-6 py-2 mt-8 ml-3 bg-emerald-500'>Create</button>

        </div>
    </form>
}