// import React from 'react'
// import Navbar from './E-Com/Components/Navbar/Navbar'
// import { BrowserRouter, Routes,Route } from 'react-router-dom'
// import Shop from './E-Com/Pages/Shop'
// import ShopCategory from './E-Com/Pages/ShopCategory'
// import LoginSignup from './E-Com/Pages/LoginSignup'
// import Product from './E-Com/Pages/Product';
// import Cart from './E-Com/Pages/Cart';
// import Footer from './E-Com/Components/Footer/Footer'
// import men_banner from './E-Com/Components/Assets/banner_mens.png'
// import women_banner from './E-Com/Components/Assets/banner_women.png'
// import kids_banner from './E-Com/Components/Assets/banner_kids.png'

// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<Shop/>} />
//         <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
//         <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
//         <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid"/>}/>
//         <Route path='/product' element={<Product />}>
//           <Route path=':productId' element={<Product />}/>
//         </Route>
//         <Route path='/cart' element={<Cart/>}/>
//         <Route path='/login' element={<LoginSignup/>}/>
//       </Routes>
//       <Footer />
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App


import React from 'react'
import Bmi from './BMIProject/Bmi'

const App = () => {
  return (
    <div>
      <Bmi />
    </div>
  )
}

export default App




