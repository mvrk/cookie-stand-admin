import { hourlySales } from "../data"
export default function InputForm(props) {

    function totalDay(arr) {
        let total = 0
        arr.forEach(
            number => total += number
        )
        return total
    }

    function handleSubmit(e) {
        e.preventDefault();

        let cookieStore = {
            id: location.length + 1,
            hourlySales: hourlySales,
            Location: e.target.location.value,
            minCustomers: e.target.minCustomers.value,
            maxCustomers: e.target.maxCustomers.value,
            avgCookies: e.target.avgCookies.value,
        };
        const totalDaySales = totalDay(cookieStore.hourlySales);
        cookieStore.total = totalDaySales
        props.inputHandler(cookieStore)
        e.target.reset();
    }
    return (
        <form onSubmit={handleSubmit} className='w-full max-w-screen-lg p-3 px-5 my-10 bg-emerald-500 rounded-md'>

            <h1 className='flex justify-center py-3 text-xl'>Create Cookie Stand</h1>
            <div className='flex flex-wrap'>
                <label className='pr-3'>Location</label>
                <input id='location' className='flex-auto px-2' placeholder="" required />
            </div>

            <div className='flex '>

                <div className='mx-2 mt-6 text-center bg-green-300 rounded'>
                    <label>
                        Minimum Customers per Hour
                    </label>
                    <input
                        className='w-64 mx-2 my-2'
                        id='minCustomers'

                        placeholder=''
                        required
                    />
                </div>

                <div className='mx-2 mt-6 text-center bg-green-300 rounded'>
                    <label>
                        Maximum Customers per Hour
                    </label>
                    <input
                        className='w-64 mx-2 my-2'
                        id='maxCustomers'

                        placeholder=''
                        required
                    />
                </div>

                <div className='mx-2 mt-6 text-center bg-green-300 rounded'>
                    <label>
                        Average Cookies per Hour
                    </label>
                    <input
                        className='w-64 mx-2 my-2'
                        id='avgCookies'

                        placeholder=''
                        required
                    />

                </div>
                <button className='px-7 py-2 mt-6 ml-3 bg-green-300h-16 bg-emerald-600 rounded'>Create</button>

            </div>
        </form>
    )

}