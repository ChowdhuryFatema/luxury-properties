import img1 from '../../../assets/home1.png';
import img2 from '../../../assets/home2.png';
import img3 from '../../../assets/home3.png';
import img4 from '../../../assets/home4.png';
import img5 from '../../../assets/home5.png';

const Property = () => {
	return (
		<div>
			<div className="p-5 max-w-7xl mx-auto">
				<div>
					<h1 className="text-2xl md:text-3xl text-center font-semibold my-10">EXPLORE PROPERTY</h1>
				</div>
				<div className="grid grid-cols-2 gap-4 md:grid-cols-4">
					<div className='property col-span-2 md:row-span-2 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square relative'>
						<img src={img2} alt="" className="w-full h-full rounded shadow-sm" />
						<div className='overlay3'></div>
						<div className='property-content absolute top-1/2 left-2/4 z-50 -translate-x-1/2 -translate-y-1/2 opacity-0 space-y-2'>
						<p className='text-2xl md:text-3xl lg:text-4xl text-white font-semibold text-center'>Villa</p>

						<p className='text-white font-semibold text-sm md:text-lg lg:text-xl text-center'><span className='text-[#23BE0A]'>5</span> Properties</p>
						</div>
					</div>
					<div className='property relative'>
					<img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src={img1} />
					<div className='overlay3'></div>
						<div className='property-content absolute top-1/2 left-2/4 z-50 -translate-x-1/2 -translate-y-1/2 opacity-0 space-y-2'>
						<p className='text-2xl md:text-3xl lg:text-4xl text-white font-semibold text-center'>House</p>

						<p className='text-white font-semibold text-sm md:text-lg lg:text-xl text-center'><span className='text-[#23BE0A]'>7</span> Properties</p>
						</div>
					</div>
					<div className='property relative'>
					<img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src={img3} />
					<div className='overlay3'></div>
						<div className='property-content absolute top-1/2 left-2/4 z-50 -translate-x-1/2 -translate-y-1/2 opacity-0 space-y-2'>
						<p className='text-2xl md:text-3xl lg:text-4xl text-white font-semibold text-center'>Apartment</p>

						<p className='text-white font-semibold text-sm md:text-lg lg:text-xl text-center'><span className='text-[#23BE0A]'>3</span> Properties</p>
						</div>
					</div>
					<div className='property relative'>
					<img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src={img4} />
					<div className='overlay3'></div>
						<div className='property-content absolute top-1/2 left-2/4 z-50 -translate-x-1/2 -translate-y-1/2 opacity-0 space-y-2'>
						<p className='text-2xl md:text-3xl lg:text-4xl text-white font-semibold text-center'>Campus</p>

						<p className='text-white font-semibold text-sm md:text-lg lg:text-xl text-center'><span className='text-[#23BE0A]'>2</span> Properties</p>
						</div>
					</div>
					<div className='property relative'>
					<img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src={img5} />
					<div className='overlay3'></div>
						<div className='property-content absolute top-1/2 left-2/4 z-50 -translate-x-1/2 -translate-y-1/2 opacity-0 space-y-3'>
						<p className='text-2xl md:text-3xl lg:text-4xl text-white font-semibold text-center'>Farm</p>

						<p className='text-white font-semibold text-sm md:text-lg lg:text-xl text-center'><span className='text-[#23BE0A]'>1</span> Properties</p>
						</div>
					</div>

				</div>
			</div>
		</div>
	);
};

export default Property;