'use client';

import * as React from 'react';
import { motion } from 'framer-motion';

type MainLogoSvgProps = {
	hidePreloader: () => void;
};


type bracePosition = "left" | "right";
const braceVariant = {
    hidden: (bracePosition: bracePosition) => ({
        x: bracePosition === "left" ? -50 : 50,
		opacity: 0,
	}),
    show: (bracePosition: bracePosition) => ({
        x: bracePosition === "left" ? 5 : -5,
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: [0.22, 1, 0.36, 1],
		},
	}),
};

const MainLogoSvg = ({ hidePreloader }: MainLogoSvgProps) => {
	return (
		<svg
			key='loader'
			viewBox='0 0 203 53'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<motion.g
				initial={{ opacity: 1 }}
				animate={{
					opacity: 0,
				}}
				onAnimationComplete={hidePreloader}
				transition={{
					duration: 0.5,
					delay: 1.3,
					ease: [0.22, 1, 0.36, 1],
				}}
				id='logo'>
				<motion.g
                    variants={braceVariant}
                    initial="hidden"
                    animate="show"
					id='braces, curly braces, symbol, open, character, line'>
					<path
						id='Vector'
						d='M25.6281 43.2766C25.4183 42.9113 25.2375 42.5311 25.0871 42.1386C25.011 41.9427 24.9456 41.7424 24.885 41.5407C24.8566 41.4395 24.8286 41.3366 24.8032 41.2358L24.7368 40.9374C24.5631 40.1411 24.4854 39.3414 24.4587 38.5568C24.4288 37.7242 24.4538 36.9011 24.4561 36.0967C24.4577 35.208 24.4644 34.3333 24.4185 33.4779C24.3797 32.63 24.2549 31.8007 24.0533 30.9992L23.9683 30.703L23.926 30.5548L23.8764 30.4102L23.7777 30.1209L23.6643 29.84L23.6074 29.6998L23.543 29.5644C23.4997 29.4744 23.4588 29.3829 23.4141 29.2941C23.3154 29.1234 23.2288 28.9436 23.1168 28.7846C22.9115 28.451 22.6629 28.1579 22.3974 27.8909L22.1916 27.6985C22.1212 27.6369 22.0444 27.584 21.9719 27.5257L21.862 27.4396C21.8241 27.4129 21.7835 27.3901 21.7446 27.365L21.5101 27.2159C21.1257 26.9715 21.0123 26.4618 21.2567 26.0774C21.3283 25.9648 21.4227 25.8754 21.53 25.8116L21.553 25.7981L21.7456 25.6845L21.8424 25.6289C21.8734 25.6081 21.9027 25.5847 21.9331 25.563L22.1147 25.4319L22.284 25.2825L22.369 25.2083C22.3963 25.1821 22.4212 25.1528 22.4475 25.1254L22.6046 24.9597L22.7486 24.7785L22.8209 24.6882C22.8441 24.6571 22.8645 24.6232 22.8866 24.5911C23.2027 24.1328 23.4457 23.604 23.6205 23.0437C23.7951 22.4826 23.897 21.8884 23.9426 21.2901L23.9588 21.0654L23.9646 20.8401C23.9694 20.6961 23.9714 20.5271 23.9736 20.3618L23.9878 19.371L24.0179 17.3894L24.0851 13.4188C24.1155 12.6802 24.2429 11.9623 24.4534 11.2647C24.6651 10.5683 24.9629 9.89179 25.3645 9.26312C25.844 8.50243 26.5508 7.85075 27.3504 7.42453C27.7335 7.21938 28.0894 7.13491 28.3834 7.11947C28.4575 7.11658 28.5277 7.11696 28.5941 7.1203C28.6607 7.12482 28.7245 7.13556 28.784 7.14692C28.8436 7.15872 28.8994 7.17303 28.9516 7.18957C29.0043 7.20851 29.0535 7.22966 29.0993 7.25253C29.3652 7.38616 29.3871 7.58316 29.2532 7.78033C29.1169 7.97667 28.8283 8.17659 28.444 8.42137C27.9544 8.72726 27.4704 9.11953 27.065 9.57629C26.5958 10.0979 26.2371 10.7435 25.9856 11.4311C25.738 12.123 25.5952 12.8541 25.5837 13.5882C25.5674 15.1884 25.5809 16.7882 25.623 18.3877C25.6347 18.8292 25.6524 19.2795 25.6589 19.7267C25.6622 19.9503 25.6626 20.1731 25.6581 20.3936C25.6556 20.5056 25.6529 20.6096 25.6467 20.7265C25.6402 20.8452 25.632 20.963 25.622 21.0794C25.4997 22.2423 25.2424 23.3964 24.7292 24.4853C24.4713 25.0272 24.1441 25.5503 23.7282 26.0144C23.314 26.4782 22.8069 26.8782 22.2391 27.1617L22.2774 25.8963C22.8663 26.2436 23.3852 26.7023 23.8017 27.2237C24.1589 27.6732 24.4579 28.1574 24.7029 28.6597C24.942 29.1642 25.1331 29.6831 25.2862 30.2084C25.5827 31.2603 25.7278 32.3384 25.753 33.4031C25.801 35.2852 25.6144 37.1013 25.7357 38.8643C25.7472 39.0852 25.773 39.3024 25.7941 39.521C25.8067 39.6297 25.8236 39.7372 25.838 39.8456L25.8604 40.0078L25.8897 40.168C25.9098 40.2747 25.9275 40.3822 25.9493 40.4884L26.0228 40.8045C26.0705 41.0158 26.1316 41.2135 26.2015 41.4149C26.4807 42.2149 26.9206 42.9691 27.4826 43.6052C27.933 44.1112 28.4295 44.5426 28.9646 44.8775C29.4999 45.2119 30.0762 45.4505 30.6923 45.5823C30.834 45.6147 30.9426 45.6501 31.0166 45.6964C31.0905 45.7429 31.1293 45.7988 31.1266 45.8574C31.1224 45.9703 30.9466 46.1162 30.5688 46.1616C30.0367 46.2214 29.4719 46.1671 28.9371 46.0075C28.4014 45.8489 27.8959 45.5924 27.4458 45.2755C26.7001 44.753 26.1181 44.0288 25.6525 43.271C25.6446 43.2728 25.6372 43.2746 25.6281 43.2766Z'
						fill='#FF9D3F'
					/>
				</motion.g>

				{/* The actual name  */}
				<motion.path
					initial={{ scale: 0.8, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{
						delay: 0.5,
						duration: 0.5,
						ease: [0.22, 1, 0.36, 1],
					}}
					id='Vector_2'
					d='M59.9433 17.9118C59.1834 17.9118 58.3627 17.9742 57.4812 18.0991C56.5997 18.1927 55.7334 18.3019 54.8823 18.4267C54.2744 18.5203 53.6817 18.5983 53.1041 18.6606C52.5569 18.7231 52.0555 18.7699 51.5995 18.8011C51.3867 19.4875 51.1739 20.096 50.9611 20.6264C50.7484 21.1568 50.5204 21.6717 50.2772 22.1708C50.0341 22.7012 49.8061 23.2473 49.5934 23.8089C49.4109 24.3393 49.2286 24.9166 49.0462 25.5406C48.7422 26.0398 48.4839 26.5078 48.2711 26.9446C48.0887 27.3502 47.9367 27.8183 47.8151 28.3487C47.4503 28.8167 47.1769 29.316 46.9944 29.8464C46.8121 30.3455 46.6753 30.7824 46.584 31.1568L46.4017 31.7185C46.2194 31.9056 46.1129 32.0616 46.0826 32.1865C46.0521 32.28 45.9761 32.3736 45.8545 32.4673C45.8242 32.8104 45.7178 33.1537 45.5354 33.497C45.4746 33.653 45.429 33.809 45.3986 33.965C45.3682 34.0897 45.353 34.1834 45.353 34.2458C45.353 34.5578 45.2771 34.7605 45.1251 34.8542C45.1555 35.0102 45.1555 35.1818 45.1251 35.3689C45.0947 35.525 45.0643 35.681 45.0339 35.837C44.9427 36.2115 44.9123 36.5079 44.9427 36.7263C45.0339 36.851 45.1099 36.9603 45.1707 37.0539C45.2619 37.1474 45.3226 37.2723 45.353 37.4283C45.5354 37.5531 45.6722 37.6311 45.7634 37.6623C45.885 37.7558 46.0673 37.8651 46.3106 37.99L46.7208 38.4579C46.8728 39.3628 46.7361 40.0803 46.3106 40.6107C45.8545 41.2036 45.0795 41.5 43.9852 41.5H43.4381C43.2861 41.344 43.1949 41.2193 43.1645 41.1256C42.9213 41.032 42.7238 40.954 42.5718 40.8916C42.4198 40.8292 42.283 40.7044 42.1614 40.5172C41.7663 40.33 41.4471 40.174 41.2039 40.0492L40.7936 39.8152C40.7936 39.4719 40.7936 39.2848 40.7936 39.2535C40.5808 38.9728 40.4136 38.6607 40.292 38.3175C40.2009 37.9743 40.1249 37.6311 40.0641 37.2879C40.0033 37.007 39.9273 36.7419 39.8361 36.4923C39.7753 36.2426 39.6841 36.0242 39.5625 35.837C39.5017 34.0274 39.6689 32.4984 40.0641 31.2505C40.4592 30.0024 40.8696 28.8011 41.2951 27.6466C41.5383 27.0226 41.7815 26.3986 42.0246 25.7745C42.2678 25.1194 42.4806 24.4486 42.663 23.7622L43.0733 23.2941C43.2861 22.7949 43.4533 22.3892 43.5748 22.0772C43.7268 21.734 43.8788 21.3908 44.0308 21.0476C44.122 20.8291 44.198 20.6264 44.2588 20.4392C44.35 20.2207 44.426 20.0336 44.4868 19.8776C44.3044 19.8776 44.1372 19.8932 43.9852 19.9243C43.8332 19.9243 43.6812 19.9399 43.5293 19.9712C43.3469 20.0023 43.1797 20.0336 43.0277 20.0647C42.8757 20.0647 42.7238 20.0647 42.5718 20.0647C42.359 20.0647 42.207 20.0492 42.1158 20.018C41.7815 20.174 41.4167 20.252 41.0216 20.252H40.5656C40.4744 20.252 40.3832 20.252 40.292 20.252C40.2313 20.2207 40.1705 20.2052 40.1097 20.2052C39.8057 20.2052 39.5625 20.252 39.3802 20.3456C39.0154 20.3456 38.6658 20.3456 38.3315 20.3456H37.8755C37.8147 20.3456 37.7387 20.3612 37.6476 20.3923C37.5564 20.3923 37.4804 20.3923 37.4196 20.3923C37.2068 20.3923 36.9788 20.3767 36.7357 20.3456C36.4925 20.2832 36.2341 20.174 35.9606 20.018C35.5958 19.5187 35.3526 19.2535 35.2311 19.2223L34.8207 18.6606C34.7903 18.4735 34.7447 18.3019 34.6839 18.1458C34.6231 17.9587 34.5623 17.7558 34.5015 17.5374C34.38 17.2254 34.2584 16.8978 34.1368 16.5546C34.0456 16.1802 34 15.7434 34 15.2442C34.0304 14.9945 34.0912 14.8073 34.1824 14.6825C34.2736 14.5577 34.3496 14.4485 34.4104 14.3549L34.5471 13.6529L35.1399 13.6997H36.4165C37.3892 13.6997 38.3771 13.6685 39.3802 13.6061C40.3832 13.5125 41.4167 13.4189 42.4806 13.3253C43.0885 13.2629 43.6964 13.2005 44.3044 13.1381C44.9427 13.0757 45.5962 13.0133 46.2649 12.9509C46.3865 12.67 46.508 12.4048 46.6297 12.1552L47.0856 11.9212C47.6328 11.89 48.0127 11.968 48.2255 12.1552C48.4686 12.3112 48.6662 12.4672 48.8182 12.6232C49.4869 12.5608 50.1556 12.4984 50.8244 12.436C51.5235 12.3424 52.2226 12.2332 52.9217 12.1084C53.9553 11.9524 54.9887 11.812 56.0222 11.6872C57.086 11.5624 58.1043 11.5 59.077 11.5C59.5026 11.5 59.9129 11.5156 60.3081 11.5468C60.7032 11.578 61.068 11.6248 61.4024 11.6872L61.8583 12.0148C61.9494 12.202 62.0711 12.3736 62.223 12.5296C62.4054 12.6856 62.5878 12.8417 62.7701 12.9977C63.1349 13.3409 63.4996 13.7465 63.8644 14.2145C64.2291 14.6825 64.3659 15.369 64.2748 16.2738C64.0316 16.6482 63.8492 16.8666 63.7277 16.929L63.3173 17.4907L62.8614 17.4438C62.679 17.4438 62.5118 17.4751 62.3598 17.5374C62.2079 17.5687 62.0559 17.6154 61.9038 17.6778C61.7823 17.7402 61.6607 17.8027 61.5392 17.8651C61.4175 17.8962 61.2807 17.9275 61.1288 17.9587C60.8552 17.9587 60.6272 17.9587 60.4448 17.9587C60.2928 17.9275 60.1257 17.9118 59.9433 17.9118ZM84.3966 14.0741C84.427 14.2925 84.427 14.4641 84.3966 14.5889C84.3966 14.6825 84.3813 14.7761 84.351 14.8697C84.351 14.9633 84.351 15.0725 84.351 15.1973C84.351 15.291 84.3813 15.447 84.4421 15.6654C83.8039 16.7263 83.0591 17.4594 82.2081 17.8651C81.3873 18.2395 80.4906 18.5203 79.518 18.7075C78.5452 18.8635 77.5422 19.0351 76.5088 19.2223C75.5057 19.4095 74.5025 19.8152 73.4994 20.4392C73.1043 20.2832 72.7396 20.2832 72.4052 20.4392C72.1012 20.5952 71.6453 20.642 71.0374 20.5796C70.855 20.7668 70.627 20.9071 70.3534 21.0008C70.0798 21.0631 69.8064 21.1411 69.5328 21.2348C69.6544 21.5157 69.6999 21.812 69.6696 22.1241C69.6696 22.4048 69.7151 22.6388 69.8064 22.8261C70.8702 22.9196 72.0404 22.9041 73.3171 22.7792C74.6242 22.6545 75.9008 22.5765 77.147 22.5452C77.1775 22.7012 77.1622 22.8105 77.1015 22.8729C77.0407 22.9041 77.0255 22.9821 77.0558 23.1069C77.2686 23.2629 77.4814 23.4658 77.6942 23.7153C77.907 23.9337 78.1198 24.1522 78.3325 24.3706C78.5452 24.589 78.758 24.7761 78.9708 24.9321C79.214 25.057 79.4875 25.1037 79.7916 25.0726C79.9131 25.3221 79.9891 25.603 80.0195 25.915C80.0802 26.1958 80.0499 26.4922 79.9283 26.8042C79.442 27.1475 78.9556 27.5063 78.4692 27.8806C77.983 28.2239 77.4662 28.5359 76.919 28.8167C76.4023 29.0976 75.8399 29.3316 75.2321 29.5187C74.6545 29.6747 74.001 29.7371 73.2715 29.706C73.1195 29.706 72.9979 29.706 72.9067 29.706C72.8459 29.706 72.7547 29.6591 72.6331 29.5655C72.39 29.7215 72.0404 29.7684 71.5845 29.706C71.1589 29.6435 70.8246 29.6904 70.5814 29.8464C70.2471 29.6904 69.8367 29.628 69.3503 29.6591C68.8944 29.6591 68.4841 29.5967 68.1194 29.472C67.633 30.1271 67.1922 30.8292 66.797 31.578C66.4019 32.3269 66.0523 33.1224 65.7484 33.965C66.7819 34.121 67.633 34.1834 68.3017 34.1521C69.0009 34.121 69.6544 34.0741 70.2623 34.0117C70.8702 33.9181 71.4933 33.8401 72.1317 33.7777C72.7699 33.6841 73.5754 33.653 74.5482 33.6841C75.1561 33.3409 75.8704 33.1224 76.6911 33.0289C77.5422 32.9041 78.3173 32.7169 79.0164 32.4673C79.2596 32.5609 79.4723 32.7324 79.6548 32.9821C79.8371 33.2006 80.0042 33.4189 80.1563 33.6373C80.3386 33.8245 80.5211 33.9961 80.7034 34.1521C80.8858 34.3081 81.1138 34.3705 81.3873 34.3394C81.5089 34.4641 81.5849 34.6201 81.6154 34.8074C81.676 34.9634 81.7217 35.1194 81.752 35.2754C81.7825 35.4314 81.828 35.5718 81.8888 35.6966C81.9801 35.7902 82.1168 35.8215 82.2992 35.7902C81.8433 36.8199 81.3113 37.6154 80.7034 38.1771C80.1259 38.7075 79.4572 39.1131 78.6973 39.3939C77.9373 39.6748 77.0862 39.8932 76.144 40.0492C75.2321 40.2052 74.2138 40.3924 73.0892 40.6107C72.8156 40.6732 72.5876 40.6576 72.4052 40.564C72.2228 40.5016 72.0101 40.4705 71.7669 40.4705C71.0678 40.6264 70.2318 40.7669 69.2592 40.8916C68.2865 41.0164 67.2986 41.0633 66.2956 41.032C65.2925 41.0009 64.335 40.8604 63.4231 40.6107C62.5112 40.3924 61.7664 39.9868 61.189 39.3939C60.9458 39.1755 60.7786 38.9259 60.6874 38.6451C60.6266 38.3331 60.429 38.0991 60.0947 37.9431C60.0643 37.5374 60.0035 37.085 59.9123 36.5859C59.8211 36.0866 59.73 35.5718 59.6387 35.0414C59.5475 34.4798 59.4716 33.9337 59.4107 33.4033C59.3804 32.8729 59.4107 32.3893 59.5019 31.9525C59.5932 31.4845 59.7755 31.0632 60.0491 30.6888C60.353 30.3144 60.4595 29.9088 60.3682 29.472C60.5202 29.4407 60.6115 29.3627 60.6418 29.238C60.6722 29.082 60.7938 29.0196 61.0066 29.0507C61.189 28.4891 61.3865 27.9587 61.5993 27.4595C61.8121 26.9602 62.0248 26.4766 62.2376 26.0087C62.4808 25.5405 62.7087 25.0726 62.9215 24.6046C63.1647 24.1053 63.3927 23.5593 63.6055 22.9665C63.1799 22.5608 62.8607 22.1241 62.648 21.656C62.4656 21.1568 62.3288 20.6731 62.2376 20.2052C62.1465 19.7059 62.0705 19.2068 62.0097 18.7075C61.9489 18.1771 61.8424 17.6467 61.6904 17.1163C61.9945 16.6481 62.3593 16.2738 62.7847 15.993C63.2407 15.681 63.727 15.4314 64.2437 15.2442C64.7605 15.0569 65.3228 14.9009 65.9308 14.7761C66.5387 14.6513 67.1771 14.5109 67.8458 14.3549C69.0616 13.9493 70.1406 13.6373 71.0829 13.4189C72.0556 13.2005 72.9979 13.0289 73.9098 12.9041C74.8521 12.748 75.8248 12.6076 76.8279 12.4828C77.831 12.358 78.9708 12.1708 80.2475 11.9212C80.5211 12.202 80.7794 12.3424 81.0225 12.3424C81.1441 12.0616 81.2809 11.9836 81.4329 12.1084C81.6154 12.202 81.6913 12.1084 81.6609 11.8276C81.9648 12.358 82.3449 12.8104 82.8008 13.1849C83.287 13.5281 83.8191 13.8245 84.3966 14.0741ZM107.938 18.7075C107.877 19.5188 107.786 20.2363 107.664 20.8604C107.543 21.4844 107.376 22.1397 107.163 22.8261C106.646 25.3534 106.038 27.7559 105.339 30.0335C104.67 32.3113 103.895 34.355 103.014 36.1646C102.223 37.0694 101.448 37.8651 100.688 38.5515C99.9589 39.2379 99.1382 39.7216 98.2263 40.0023C97.7704 40.0648 97.36 40.1428 96.9952 40.2365C96.6609 40.2988 96.3265 40.3768 95.9921 40.4705C95.8402 40.5016 95.673 40.5328 95.4907 40.564C95.3386 40.5952 95.1866 40.642 95.0347 40.7044C94.5787 40.6107 94.138 40.5328 93.7124 40.4705C93.3173 40.4392 92.9526 40.4236 92.6182 40.4236L92.0254 40.2365C91.7215 40.1428 91.4784 40.0648 91.2959 40.0023C91.144 39.94 90.992 39.8932 90.84 39.8619C90.7184 39.7996 90.5664 39.7528 90.3841 39.7216C90.232 39.6903 89.9737 39.6592 89.6089 39.6279C89.153 39.8152 88.7275 39.9088 88.3322 39.9088C87.7852 39.9088 87.1925 39.6748 86.5541 39.2068C85.9157 38.7388 85.3838 37.7403 84.9583 36.2115C85.0191 35.6186 85.1102 35.1038 85.2319 34.6669C85.323 34.199 85.4295 33.8401 85.551 33.5905C86.2805 33.1537 86.8885 32.9353 87.3748 32.9353C87.9523 32.9353 88.4995 33.0289 89.0162 33.2161C89.5633 33.4033 90.0953 33.6061 90.612 33.8245C90.8552 33.9181 91.0223 33.9961 91.1136 34.0585C91.2048 34.121 91.2808 34.1677 91.3416 34.199C91.4023 34.2301 91.4631 34.2458 91.5239 34.2458C91.615 34.2458 91.7823 34.2458 92.0254 34.2458C92.1774 34.2458 92.299 34.2458 92.3902 34.2458C92.5118 34.2145 92.6333 34.1834 92.755 34.1521L93.2109 34.199C93.3933 34.2925 93.6061 34.3394 93.8492 34.3394C94.1532 34.3394 94.5331 34.2614 94.9891 34.1054C95.2019 34.0117 95.3691 33.9494 95.4907 33.9181C95.6427 33.887 95.7946 33.8557 95.9466 33.8245L96.3114 33.4501C96.585 33.3566 96.7825 33.2473 96.9041 33.1224C97.056 32.9977 97.1777 32.8573 97.2688 32.7013C97.3904 32.5453 97.4968 32.3736 97.5879 32.1865C97.6792 31.9993 97.8007 31.7965 97.9527 31.578C98.0743 31.4221 98.1807 31.2661 98.2719 31.1101C98.3934 30.9541 98.5151 30.7979 98.6367 30.6419V30.174C99.0318 29.2691 99.3814 28.3332 99.6853 27.3659C99.9893 26.3674 100.263 25.369 100.506 24.3706C100.749 23.3721 100.947 22.4048 101.099 21.4688C101.281 20.5327 101.433 19.6903 101.555 18.9415H101.099C100.339 18.9415 99.7157 18.9571 99.2294 18.9883C98.743 18.9883 98.3023 19.0195 97.9072 19.0819C97.512 19.1131 97.0864 19.1755 96.6305 19.2692C96.2049 19.3628 95.6578 19.4719 94.9891 19.5967L94.3051 19.7372C93.8492 19.9867 93.3933 20.2052 92.9374 20.3923C92.4814 20.5796 92.0254 20.6731 91.5695 20.6731C90.7792 20.6731 90.1105 20.3612 89.5633 19.7372C88.9858 19.3315 88.6515 18.8011 88.5603 18.1458C88.4082 17.9587 88.3627 17.7402 88.4235 17.4907C88.3019 17.1163 88.2411 16.7886 88.2411 16.5078C88.2411 16.1958 88.2411 15.915 88.2411 15.6654V15.0101H88.8338C88.9858 14.8541 89.0922 14.7449 89.153 14.6825C89.2137 14.5889 89.2594 14.4797 89.2898 14.3549L89.7913 13.9337C90.308 13.8713 90.84 13.7933 91.3871 13.6997C91.9646 13.5749 92.5573 13.4501 93.1653 13.3253C93.7429 13.2005 94.2292 13.1069 94.6244 13.0445C95.0498 12.9821 95.445 12.9353 95.8098 12.9041C96.2049 12.8729 96.6001 12.8573 96.9952 12.8573C97.4208 12.8261 97.9072 12.8104 98.4543 12.8104H99.503C99.5942 12.6856 99.6853 12.6232 99.7765 12.6232C99.8981 12.592 99.9893 12.5764 100.05 12.5764C100.202 12.5764 100.324 12.592 100.415 12.6232C100.506 12.6544 100.582 12.6856 100.643 12.7168C101.494 12.5608 102.284 12.4672 103.014 12.436C103.743 12.3736 104.397 12.3424 104.974 12.3424C105.278 12.3424 105.552 12.3424 105.795 12.3424C106.069 12.3424 106.327 12.358 106.57 12.3892H108.075H109.078C109.23 12.358 109.473 12.3424 109.807 12.3424C110.294 12.3424 110.598 12.358 110.719 12.3892C110.871 12.3892 111.13 12.4204 111.494 12.4828C111.92 12.5452 112.3 12.6076 112.634 12.67C112.999 12.7012 113.364 12.7168 113.729 12.7168H114.412L114.549 13.1849L114.914 13.6529C114.975 13.8089 115.066 13.9493 115.188 14.0741C115.339 14.1989 115.491 14.3393 115.643 14.4953C115.947 14.8073 116.236 15.1661 116.51 15.5718C116.814 15.9774 116.92 16.5858 116.829 17.397L116.51 17.9118C116.358 17.9742 116.175 18.1147 115.963 18.3331L115.552 18.7075C115.218 18.7386 114.929 18.7699 114.686 18.8011C114.443 18.8011 114.2 18.8011 113.956 18.8011C113.5 18.8011 113.029 18.7855 112.543 18.7543C112.087 18.7231 111.601 18.6919 111.084 18.6606C110.81 18.6606 110.598 18.6606 110.446 18.6606C110.294 18.6606 110.142 18.6606 109.99 18.6606C109.868 18.6606 109.731 18.6606 109.579 18.6606C109.427 18.6606 109.23 18.6606 108.987 18.6606C108.743 18.6606 108.561 18.6606 108.439 18.6606C108.318 18.6606 108.151 18.6763 107.938 18.7075ZM137.498 36.4923C137.315 37.0227 137.042 37.5687 136.677 38.1303C136.343 38.6607 135.932 39.1444 135.446 39.5812C134.99 39.9868 134.473 40.33 133.896 40.6107C133.318 40.8916 132.71 41.0476 132.072 41.0789C131.677 40.9853 131.403 40.876 131.251 40.7512C131.13 40.6576 130.993 40.564 130.841 40.4705C130.75 40.408 130.659 40.3612 130.567 40.33C130.507 40.2676 130.446 40.2208 130.385 40.1896L129.838 39.9556L130.02 39.3472C130.081 39.0975 130.066 38.9104 129.975 38.7855C129.884 38.6295 129.701 38.4267 129.428 38.1771C129.336 38.0835 129.245 37.99 129.154 37.8963C129.063 37.8027 128.987 37.7091 128.926 37.6154L128.151 36.7263L129.382 36.3986C130.142 36.1802 130.643 35.8995 130.887 35.5562C131.16 35.2129 131.267 34.6358 131.206 33.8245C130.598 33.6997 130.081 33.6841 129.656 33.7777C129.26 33.8713 128.85 33.9805 128.425 34.1054C127.877 34.2614 127.315 34.4018 126.738 34.5265C126.19 34.6201 125.582 34.6669 124.914 34.6669C124.67 34.6669 124.443 34.6669 124.23 34.6669C124.017 34.6358 123.789 34.6045 123.546 34.5734L123.09 34.4798C123.029 34.1365 122.968 33.9494 122.908 33.9181C122.847 33.8557 122.786 33.7933 122.725 33.731C122.573 33.575 122.406 33.3721 122.224 33.1224C122.072 32.8417 122.041 32.4984 122.132 32.0929C121.98 31.812 121.889 31.5312 121.859 31.2505C121.676 31.6248 121.54 32.0149 121.449 32.4205L121.266 32.8884L120.81 32.9821C120.749 33.0133 120.704 33.0913 120.673 33.2161C120.643 33.3097 120.628 33.3877 120.628 33.4501L120.4 34.2458C120.339 34.3081 120.278 34.3705 120.217 34.433C120.157 34.4641 120.096 34.5109 120.035 34.5734C119.974 34.8542 119.898 35.1349 119.807 35.4158C119.716 35.6966 119.625 35.9618 119.534 36.2115C119.382 36.617 119.245 37.0227 119.123 37.4283C119.032 37.8027 119.002 38.1771 119.032 38.5515L118.85 39.0664C118.698 39.2535 118.53 39.4095 118.348 39.5343C118.166 39.6279 117.983 39.7216 117.801 39.8152C117.74 39.8776 117.649 39.94 117.527 40.0023C117.436 40.0336 117.36 40.0648 117.299 40.096L117.163 40.6107L116.616 40.7044C116.281 40.7669 116.038 40.8136 115.886 40.8449C115.764 40.876 115.612 40.8916 115.43 40.8916L114.974 40.8449C114.64 40.564 114.381 40.3456 114.199 40.1896C114.017 40.0023 113.804 39.8308 113.561 39.6748C113.287 39.3004 113.135 39.0195 113.105 38.8324C113.074 38.6451 113.044 38.4735 113.013 38.3175C112.953 38.1303 112.922 37.9743 112.922 37.8495C112.892 37.7247 112.846 37.6311 112.785 37.5687L112.193 37.007L112.694 36.5859L112.74 35.7902C113.348 34.199 113.986 32.67 114.655 31.2036C115.354 29.7371 116.068 28.2395 116.798 26.7106C117.041 26.2114 117.269 25.7122 117.482 25.213C117.725 24.7137 117.968 24.2146 118.211 23.7153C118.181 23.6217 118.166 23.5125 118.166 23.3876C118.166 23.2629 118.196 23.1225 118.257 22.9665C118.591 22.4361 118.865 21.9681 119.078 21.5624C119.29 21.1256 119.503 20.6887 119.716 20.252C119.959 19.7216 120.202 19.2068 120.445 18.7075C120.719 18.2082 121.053 17.6934 121.449 17.163L122.178 16.8354C122.269 16.8043 122.376 16.773 122.497 16.7418C122.619 16.6794 122.756 16.6482 122.908 16.6482L123.591 16.7418C124.443 16.3362 125.187 15.7746 125.826 15.0569C126.464 14.3081 127.117 13.4189 127.786 12.3892L128.242 11.734L128.835 12.1084C128.987 12.202 129.2 12.2956 129.473 12.3892C129.747 12.4516 130.036 12.5296 130.339 12.6232C130.887 12.748 131.403 12.8885 131.89 13.0445C132.376 13.2005 132.771 13.4345 133.075 13.7465C133.258 14.2457 133.364 14.6201 133.394 14.8697C133.425 15.1193 133.47 15.369 133.531 15.6186C133.622 16.149 133.698 16.6794 133.759 17.2098C133.85 17.7402 133.911 18.3331 133.941 18.9883C134.093 19.5188 134.215 20.0492 134.306 20.5796C134.428 21.0788 134.534 21.5937 134.625 22.1241C134.777 22.8729 134.929 23.606 135.081 24.3237C135.233 25.0101 135.431 25.6654 135.674 26.2894C135.917 26.2894 136.069 26.305 136.13 26.3362C136.282 26.2738 136.434 26.227 136.586 26.1958C136.768 26.1647 136.966 26.1334 137.179 26.1022L137.68 26.0554L137.863 26.5234C137.893 26.6794 138.045 26.8355 138.318 26.9915C138.714 27.0226 139.002 27.1162 139.185 27.2722C139.367 27.3971 139.534 27.5375 139.686 27.6935C139.808 27.8183 139.929 27.9119 140.051 27.9743L140.735 28.2552L140.37 28.9571C140.066 29.5187 139.625 30.0648 139.048 30.5952C138.501 31.0944 137.878 31.5156 137.179 31.8589C137.209 32.046 137.224 32.2333 137.224 32.4205C137.255 32.5764 137.3 32.7481 137.361 32.9353C137.452 33.4657 137.528 34.0117 137.589 34.5734C137.65 35.1349 137.65 35.7122 137.589 36.305L137.498 36.4923ZM124.321 28.3955C125.233 28.3331 126.054 28.2707 126.783 28.2083C127.543 28.1147 128.379 27.9743 129.291 27.787C129.078 26.8511 128.85 25.8838 128.607 24.8853C128.364 23.8557 128.105 22.8416 127.832 21.8432L127.558 22.3112C126.95 22.9665 126.357 23.6997 125.78 24.511C125.233 25.3221 124.762 26.0867 124.367 26.8042C124.184 27.0851 124.002 27.3659 123.819 27.6466C123.637 27.9275 123.47 28.2083 123.318 28.4891C123.5 28.4579 123.668 28.4423 123.819 28.4423C124.002 28.4423 124.169 28.4267 124.321 28.3955ZM142.893 19.3628C143.105 18.7075 143.44 18.1458 143.896 17.6778C144.382 17.2098 144.899 16.8198 145.446 16.5078C146.023 16.1646 146.616 15.8838 147.224 15.6654C147.832 15.447 148.41 15.2598 148.957 15.1037C150.173 14.5733 151.464 14.0741 152.832 13.6061C154.231 13.1069 155.644 12.67 157.073 12.2956C158.532 11.9212 160.021 11.6872 161.541 11.5936C163.061 11.4688 164.656 11.656 166.328 12.1552C166.419 12.4672 166.557 12.7636 166.739 13.0445C166.921 13.3253 167.103 13.6061 167.286 13.8869C167.498 14.1677 167.681 14.4485 167.832 14.7293C167.985 14.9789 168.076 15.2442 168.107 15.525C168.41 15.8058 168.654 16.1178 168.836 16.461C169.018 16.773 169.049 17.1943 168.927 17.7247C168.623 17.9742 168.319 18.2082 168.016 18.4267C167.741 18.6139 167.438 18.7855 167.103 18.9415C165.979 18.6606 164.838 18.5671 163.684 18.6606C162.528 18.7543 161.495 18.8323 160.583 18.8946C160.31 18.6139 159.976 18.4735 159.58 18.4735C159.216 18.4735 158.82 18.5359 158.394 18.6606C158 18.7855 157.589 18.9103 157.164 19.0351C156.768 19.1599 156.389 19.1911 156.024 19.1288C155.72 19.3783 155.34 19.5499 154.884 19.6435C154.458 19.7059 153.987 19.7683 153.471 19.8307C153.441 19.9867 153.471 20.096 153.562 20.1583C153.653 20.1896 153.668 20.2832 153.607 20.4392C153.789 20.6576 154.017 20.8136 154.291 20.9071C154.595 21.0008 154.9 21.0944 155.203 21.188C155.538 21.2816 155.826 21.4064 156.069 21.5624C156.313 21.6872 156.48 21.9057 156.571 22.2177C157.027 22.2177 157.422 22.3268 157.757 22.5452C158.091 22.7636 158.364 23.0289 158.577 23.3409C158.79 23.6529 158.942 23.9962 159.033 24.3706C159.154 24.7137 159.216 25.0257 159.216 25.3066C159.307 25.5561 159.413 25.6654 159.535 25.6341C159.656 25.603 159.792 25.6654 159.945 25.8214C160.036 26.227 160.264 26.6482 160.629 27.0851C160.994 27.4906 161.282 27.943 161.495 28.4423C161.556 29.2223 161.602 29.9244 161.632 30.5484C161.662 31.1412 161.556 31.7496 161.312 32.3736C160.857 33.5281 160.219 34.5578 159.398 35.4626C158.608 36.3675 157.695 37.1787 156.662 37.8963C155.659 38.5827 154.58 39.1755 153.425 39.6748C152.27 40.174 151.146 40.5952 150.051 40.9384C149.929 40.9072 149.808 40.9072 149.686 40.9384C149.565 40.9696 149.534 40.8916 149.595 40.7044C149.352 40.9229 149.078 41.0633 148.774 41.1256C148.501 41.188 148.197 41.2036 147.862 41.1724C147.528 41.1724 147.178 41.1569 146.814 41.1256C146.479 41.0944 146.16 41.11 145.856 41.1724C145.643 40.954 145.446 40.7356 145.263 40.5172C145.111 40.33 144.99 40.0803 144.899 39.7683C144.747 39.7683 144.671 39.6903 144.671 39.5343C144.701 39.3784 144.656 39.3004 144.534 39.3004C144.716 38.9884 144.792 38.8168 144.762 38.7855C144.762 38.7231 144.716 38.6764 144.625 38.6451C144.564 38.6139 144.504 38.5827 144.443 38.5515C144.382 38.4891 144.367 38.4111 144.397 38.3175C144.519 38.068 144.564 37.7871 144.534 37.4751C144.504 37.1319 144.473 36.7886 144.443 36.4454C144.412 36.1022 144.428 35.7746 144.488 35.4626C144.58 35.1506 144.807 34.9009 145.172 34.7138C146.206 34.8385 147.178 34.8074 148.09 34.6201C149.033 34.4018 149.914 34.1054 150.735 33.731C151.555 33.3566 152.33 32.9509 153.06 32.514C153.82 32.0773 154.565 31.6872 155.294 31.3441C155.385 31.0632 155.506 30.8292 155.659 30.6419C155.841 30.4548 156.024 30.2832 156.206 30.1271C156.389 29.9711 156.556 29.7995 156.708 29.6124C156.859 29.4251 156.965 29.1911 157.027 28.9103C157.058 28.6919 156.997 28.5671 156.844 28.5359C156.723 28.4735 156.662 28.3487 156.662 28.1615L156.16 28.021C155.584 27.6779 154.93 27.3971 154.2 27.1786C153.471 26.9291 152.848 26.6638 152.33 26.383C151.997 26.5702 151.677 26.6171 151.373 26.5234C151.099 26.4298 150.735 26.3362 150.279 26.2427C149.245 26.1802 148.242 26.071 147.27 25.915C146.327 25.759 145.415 25.4781 144.534 25.0726C144.473 24.9166 144.397 24.7761 144.306 24.6513C144.215 24.5266 144.048 24.4953 143.804 24.5577C143.622 24.3082 143.44 24.0742 143.257 23.8557C143.075 23.606 142.908 23.3409 142.756 23.0601C142.817 22.6856 142.862 22.3737 142.893 22.1241C142.923 21.8432 142.832 21.578 142.619 21.3284C142.741 20.9228 142.832 20.5952 142.893 20.3456C142.953 20.096 142.953 19.7683 142.893 19.3628Z'
					fill='#363333'
				/>
				<motion.g
                    variants={braceVariant}
                    custom="left"
                    initial="hidden"
                    animate="show"
					id='brace'>
					<path
						id='Vector_3'
						d='M175.963 42.4158C176.146 42.1353 176.309 41.8396 176.447 41.5335C176.517 41.3808 176.578 41.2246 176.636 41.0674C176.663 40.988 176.69 40.9098 176.715 40.8287L176.787 40.577C176.975 39.9045 177.087 39.1972 177.148 38.4718C177.213 37.7025 177.235 36.9122 177.214 36.1137C177.192 35.2329 177.161 34.3374 177.184 33.424C177.2 32.5031 177.309 31.5693 177.513 30.6486L177.601 30.3042L177.645 30.1319L177.697 29.961L177.803 29.619L177.928 29.2807L177.992 29.1117L178.065 28.945C178.114 28.8341 178.161 28.7224 178.213 28.6123C178.328 28.3957 178.43 28.1742 178.566 27.9657C178.815 27.5393 179.129 27.141 179.479 26.7744L179.752 26.5075C179.846 26.4215 179.949 26.3439 180.048 26.2623L180.197 26.1418C180.249 26.1038 180.304 26.0697 180.357 26.0336L180.679 25.8214L180.722 27.2392L180.433 27.0789L180.289 26.9974C180.242 26.9679 180.198 26.9355 180.152 26.9045L179.882 26.7146C179.797 26.646 179.715 26.5737 179.631 26.5028L179.507 26.3954C179.467 26.3583 179.43 26.3184 179.392 26.2799L179.165 26.0455C179.095 25.9638 179.028 25.8796 178.96 25.7963L178.858 25.6707C178.826 25.6281 178.797 25.5835 178.766 25.5399C178.326 24.9183 178.011 24.237 177.789 23.5423C177.567 22.8464 177.441 22.1339 177.383 21.4196L177.363 21.1515L177.355 20.8829L177.343 20.3732L177.327 19.3877L177.295 17.4165L177.235 13.4816C177.188 12.3229 176.839 11.1267 176.228 10.1609C175.861 9.57722 175.428 9.0423 174.894 8.63623C174.384 8.25467 174.033 7.9573 173.811 7.63122C173.649 7.39782 173.672 7.20127 173.907 7.09002C174.137 6.97752 174.592 6.95475 175.166 7.18388C175.527 7.32699 175.884 7.5346 176.205 7.78774C176.528 8.04048 176.815 8.33723 177.056 8.64788C177.616 9.36364 178.008 10.1672 178.285 10.9923C178.557 11.8186 178.717 12.6816 178.741 13.5512C178.775 15.1575 178.838 16.762 178.931 18.3676C178.956 18.8107 178.988 19.2628 179.008 19.7121C179.019 19.9367 179.026 20.1606 179.029 20.3824C179.029 20.4919 179.029 20.6009 179.029 20.7091C179.028 20.8088 179.026 20.9079 179.022 21.0065C179.002 21.9923 179.186 22.9948 179.585 23.8696C179.784 24.3061 180.039 24.7085 180.345 25.0501C180.652 25.3921 181.01 25.6713 181.408 25.8756L181.414 25.8785C181.767 26.0599 181.907 26.4936 181.725 26.8471C181.66 26.9748 181.562 27.0741 181.446 27.141C181.006 27.3968 180.611 27.7285 180.265 28.1196C179.969 28.4571 179.712 28.8403 179.497 29.255C179.288 29.6732 179.117 30.1173 178.979 30.576C178.709 31.4988 178.57 32.4698 178.52 33.4535C178.421 35.2262 178.554 37.0722 178.366 38.9579C178.346 39.193 178.311 39.429 178.28 39.6644C178.263 39.7822 178.241 39.8999 178.221 40.0176L178.191 40.194L178.153 40.3699C178.127 40.487 178.103 40.6044 178.075 40.7211L177.982 41.07C177.922 41.3027 177.841 41.5403 177.753 41.7677C177.399 42.6824 176.874 43.5209 176.205 44.2354C175.669 44.8026 175.027 45.2555 174.334 45.5046C173.645 45.7562 172.912 45.7866 172.307 45.6006C172.167 45.56 172.072 45.4974 172.016 45.4359C171.96 45.3746 171.943 45.3124 171.961 45.2562C171.998 45.1406 172.163 45.064 172.438 45.0287C173.223 44.9252 173.961 44.5503 174.591 44.0126C175.108 43.5743 175.604 43.0441 175.98 42.4337C175.974 42.4279 175.969 42.4225 175.963 42.4158Z'
						fill='#FF9D3F'
					/>
				</motion.g>
			</motion.g>
		</svg>
	);
};
export default MainLogoSvg;