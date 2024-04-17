

const SideBar = () => {
    return (
        <div>
            <div className="bg-[#EDF1F2] p-5 rounded-md space-y-3">
                <h2 className="text-xl">Compare</h2>
                <p className="text-[#AA9CBA]">Select 2+ properties to compare</p>

            </div>
            <div className="bg-[#EDF1F2] p-5 rounded-md space-y-3 mt-5">
                <h2 className="text-xl">Sort</h2>
                <select className="w-full p-2" id="cars">
                    <option className="border-none" value="volvo" selected>Date Ascending</option>
                    <option value="saab">Price Ascending</option>
                    <option value="vw">Price Descending</option>
                </select>
            </div>
            <div className="bg-[#EDF1F2] p-5 rounded-md space-y-3 mt-5">
                <h2 className="text-xl">Search</h2>


                <div className="mr-auto flex justify-end">
                    <button type="submit" className="p-2 font-semibold bg-[#23BE0A] text-white">SEARCH</button>
                </div>

                <div className="bg-white p-5 rounded-md space-y-2">
                    <h3>Enter an address</h3>
                    <input type="text" placeholder="Enter an address, city, ZIP or property ID" className="input input-bordered w-full bg-[#EDF1F2] rounded-none border-0" />



                    <h3>Location</h3>

                    <select className="w-full px-2 py-3 bg-[#EDF1F2]" id="cars">
                        <option className="border-none" value="volvo" selected>-- County/State --</option>
                    </select>

                    <h3>State</h3>

                    <select className="w-full px-2 py-3 bg-[#EDF1F2]" id="cars">
                        <option className="border-none" value="volvo" selected>-- Country --</option>
                    </select>

                    <h3>City</h3>
                    <select className="w-full px-2 py-3 bg-[#EDF1F2]" id="cars">
                        <option className="border-none" value="volvo" selected>-- City --</option>
                    </select>
                    <h3>- Neighborhood -</h3>
                    <select className="w-full px-2 py-3 bg-[#EDF1F2]" id="cars">
                        <option className="border-none" value="volvo" selected>-- - Neighborhood - --</option>
                    </select>

                    <div className="pt-3 space-y-2">
                        <div className="flex items-center">
                            <input type="checkbox" /><span className="ml-2">Air Conditioning</span>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" /><span className="ml-2">Barbeque</span>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" /><span className="ml-2">Cable TV</span>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" /><span className="ml-2">Dryer</span>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" /><span className="ml-2">Kitchen</span>
                        </div>
                        
                        <div className="flex items-center">
                            <input type="checkbox" /><span className="ml-2">Swimming Pool</span>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" /><span className="ml-2">Wi-Fi</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SideBar;