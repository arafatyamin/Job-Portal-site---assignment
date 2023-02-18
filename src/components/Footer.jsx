import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer class="bg-white">
		<div class="container mx-auto  px-8">

			<div class="w-full flex flex-col md:flex-row py-6">

				<div class="flex-1 mb-6 text-black">

					<Link to="" class="text-orange-600   hover:  font-bold text-2xl lg:text-4xl">
						<svg class="h-8 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005">
							<rect fill="#2a2a31" x="16.539" y="425.626" width="479.767" height="50.502" transform="matrix(1,0,0,1,0,0)" />
							<path class="plane-take-off" d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z " />
						</svg> LANDING

					</Link>
				</div>


				<div class="flex-1">
					<p class="uppercase text-gray-500 md:mb-6">Links</p>
					<ul class="list-reset mb-6">
						<li class="mt-2 inline-block mr-2 md:block md:mr-0">
							<Link to="" class="  hover:underline text-gray-800 hover:text-orange-500">FAQ</Link>
						</li>
						<li class="mt-2 inline-block mr-2 md:block md:mr-0">
							<Link to="" class="  hover:underline text-gray-800 hover:text-orange-500">Help</Link>
						</li>
						<li class="mt-2 inline-block mr-2 md:block md:mr-0">
							<Link to="" class=" hover:underline text-gray-800 hover:text-orange-500">Support</Link>
						</li>
					</ul>
				</div>
				<div class="flex-1">
					<p class="uppercase text-gray-500 md:mb-6">Legal</p>
					<ul class="list-reset mb-6">
						<li class="mt-2 inline-block mr-2 md:block md:mr-0">
							<Link to="" class="  hover:underline text-gray-800 hover:text-orange-500">Terms</Link>
						</li>
						<li class="mt-2 inline-block mr-2 md:block md:mr-0">
							<Link to="" class="  hover:underline text-gray-800 hover:text-orange-500">Privacy</Link>
						</li>
					</ul>
				</div>
				<div class="flex-1">
					<p class="uppercase text-gray-500 md:mb-6">Social</p>
					<ul class="list-reset mb-6">
						<li class="mt-2 inline-block mr-2 md:block md:mr-0">
							<Link to="" class="  hover:underline text-gray-800 hover:text-orange-500">Facebook</Link>
						</li>
						<li class="mt-2 inline-block mr-2 md:block md:mr-0">
							<Link to="" class="  hover:underline text-gray-800 hover:text-orange-500">Linkedin</Link>
						</li>
						<li class="mt-2 inline-block mr-2 md:block md:mr-0">
							<Link to="" class="  hover:underline text-gray-800 hover:text-orange-500">Twitter</Link>
						</li>
					</ul>
				</div>
				<div class="flex-1">
					<p class="uppercase text-gray-500 md:mb-6">Company</p>
					<ul class="list-reset mb-6">
						<li class="mt-2 inline-block mr-2 md:block md:mr-0">
							<Link to="" class="  hover:underline text-gray-800 hover:text-orange-500">Official Blog</Link>
						</li>
						<li class="mt-2 inline-block mr-2 md:block md:mr-0">
							<Link to="" class="  hover:underline text-gray-800 hover:text-orange-500">About Us</Link>
						</li>
						<li class="mt-2 inline-block mr-2 md:block md:mr-0">
							<Link to="" class="  hover:underline text-gray-800 hover:text-orange-500">Contact</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
    );
};

export default Footer;