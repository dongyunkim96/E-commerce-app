import React, { use, useState } from "react";
import '../CSS/App.css';
import ProductList from "./ProductList"

const App = () => {
    const [products] = useState([
        {
            id: 1,
            name: "G80",
            price: "MSRP* $57,100",
            image: "data:image/jpeg;base64,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",
            description: "2025 Genesis G80 Luxury Midsize Sedan || Genesis USA",
            category: "Genesis"
        },
        {
            id: 2,
            name: "G90",
            price: "MSRP* $89,700",
            image: "https://s7d1.scene7.com/is/image/hyundai/2025-g90-35t-std-awd-savilesilver-blackmonotone-frontpassangle-studio:16-9?wid=800&hei=450&fmt=webp",
            description: "2025 Genesis G90 Luxury Full-Size Sedan || Genesis USA",
            category: "Genesis" 
        },
        {
            id: 3,
            name: "GV80",
            price: "MSRP* $62,100",
            image: "https://s7d1.scene7.com/is/image/hyundai/2025-gv80-suv-25t-sel-awd-savilesilver-blackblackwitholiveash-frontpassangle-studio:16-9?wid=800&hei=450&fmt=webp",
            description: "2025 Genesis GV80 Luxury SUV || Genesis USA",
            category: "Genesis"
        },
        {
            id: 4,
            name: "Model 3",
            price: "MSRP* $42,480",
            image: "https://www.iihs.org/cdn-cgi/image/width=636/api/ratings/model-year-images/3100/",
            description: "2025 Tesla Model 3 Electric Luxury Sedan || Tesla USA",
            category: "Tesla"
        },
        {
            id: 5,
            name: "Model Y",
            price: "MSRP* $44,990",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2CHTsRSAgExAdK3koOp7cQy6-WZ4iO5sDVQ&s",
            description: "2025 Tesla Model Y Electric Compact SUV || Tesla USA",
            category: "Tesla"
        },
        {
            id: 6,
            name: "Cybertruck",
            price: "MSRP* $72,335",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHV8K3uNRwDk4C6xSW1plufUJF3oUvqVyfw&s",
            description: "2025 Tesla Cybertruck Electric Pickup Truck || Tesla USA",
            category: "Tesla"
        },
        {
            id: 7,
            name: "XC90",
            price: "MSRP* 59,745",
            image: "https://wizz.volvocars.com/images/2025/256/exterior/studioProportional/left/transparent_exterior-studioProportional-left_015105D4AE457169AAB80645D921C63CE81BF15E.png?client=vcus-americasemployeecarbooking&w=1920&imdensity=1",
            description: "2025 Volvo XC90 Luxury Large Size SUV || Volvo USA",
            category: "Volvo"
        },
        {
            id: 8,
            name: "EX40",
            price: "MSRP* $53,785",
            image: "https://cas.volvocars.com/image/dynamic/MY25_2417/536/exterior-aligned-v1/R6/74300/RN8000/R190/FN01/TC06/_/_/TP04/LR02/_/GR08/T101/TJ02/NP02/TM03/_/CB04/_/JB09/T201/LF05/_/_/FH01/_/_/_/_/_/default.png?market=us&client=vcus-paymentcalculator&angle=7&bg=00000000&w=1920&imdensity=1",
            description: "2025 Volvo EX40 Electric Compact SUV || Volvo USA",
            category: "Volvo"
        },
        {
            id: 9,
            name: "XC60",
            price: "MSRP* $59,345",
            image: "https://cas.volvocars.com/image/dynamic/MY25_2417/246/exterior-aligned-v2/M5/72300/R7D000/R151/TC05/_/_/TP05/LR02/_/GR02/T103/TJ02/NP02/TM04/_/CB03/EV02/JB0B/T214/LF05/_/VP08/_/FH02/T006/_/_/_/default.png?market=us&client=vcus-paymentcalculator&angle=7&bg=00000000&w=1920&imdensity=1",
            description: "2025 Volvo XC60 Luxury Midsize SUV || Volvo USA",
            category: "Volvo"
        },
        {
            id: 10,
            name: "GLE Coupe",
            price: "MSRP* $76,400",
            image: "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/gle-class/coupe/all-vehicles/2024-AMG-GLE63S-COUPE-AVP-DR.png",
            description: "2025 Mercedes-Benz GLE 450 4MATIC Coupe – Luxury Midsize SUV Coupe || Mercedes-Benz USA",
            category: "Mercedes-Benz"
        },
        {
            id: 11,
            name: "CLA Coupe",
            price: "MSRP* $44,400",
            image: "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/cla-class/all-vehicles/2024-CLA-250-4M-COUPE-AVP-DR.png",
            description: "2025 Mercedes-Benz CLA 250 Coupe – Compact Luxury Sport Sedan || Mercedes-Benz USA",
            category: "Mercedes-Benz"
        },
        {
            id: 12,
            name: "EQS SUV Maybach",
            price: "MSRP* $179,999",
            image: "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/eqs-class/maybach-suv/all-vehicles/2024-EQS-SUV-MAYBACH-AVP-DR.png",
            description: "2025 Mercedes-Maybach EQS 680 SUV – Ultra-Luxury All-Electric SUV || Mercedes-Benz USA",
            category: "Mercedes-Benz"
        }
    ]);

    const [selectedCategory, setSelectedCategory] = useState("All");

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const filteredProducts = selectedCategory === "All" 
        ? products 
        : products.filter(product => product.category === selectedCategory);
    
    return (
        <div className="app">
            <h1>Product Listing</h1>
            <div className="filter">
                <label htmlFor="category">Filter by Category: </label>
                <select id="category" onChange={handleCategoryChange}>
                    <option value={"All"}>All</option>
                    <option value={"Genesis"}>Genesis</option>
                    <option value={"Tesla"}>Tesla</option>
                    <option value={"Volvo"}>Volvo</option>
                    <option value={"Mercedes-Benz"}>Mercedes-Benz</option>
                </select>
            </div>
            <ProductList products={filteredProducts} />
        </div>
    );
}
export default App;