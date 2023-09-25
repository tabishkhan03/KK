import { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [keywords, setKeyWords] = useState("");

  // const [productsList,setProductsList] = useState([]);

  // let getData = ()=>{
  //   try {
  //     axios.get("http://localhost/dolphin/getproducts.php").then((res)=>{
  //       setData(res.data);
  //     })
  //   } catch (error) {
  //     console.log(error);      
  //   }
  // }

  // useEffect(()=>{
  //   getData();
  // })

  let productsList = [
    {
      id: "1",
      imgUrl:
        "https://res.cloudinary.com/dhiizuiwh/image/upload/v1686763337/cld-sample-5.jpg",
      title: "nike shoes",
      desc: "a statement that tells you how something or someone looks, sounds, etc. : words that describe something or someone. [count] Reporters called the scene “a disaster area,” and I think that was an accurate description",
      price: "500",
    },
    {
      id: "2",
      imgUrl:
        "https://res.cloudinary.com/dhiizuiwh/image/upload/v1686763337/cld-sample-5.jpg",
      title: "puma",
      desc: "a statement that tells you how something or someone looks, sounds, etc. : words that describe something or someone. [count] Reporters called the scene “a disaster area,” and I think that was an accurate description",
      price: "1200",
    },
    {
      id: "3",
      imgUrl:
        "https://res.cloudinary.com/dhiizuiwh/image/upload/v1686763337/cld-sample-5.jpg",
      title: "nike",
      desc: "a statement that tells you how something or someone looks, sounds, etc. : words that describe something or someone. [count] Reporters called the scene “a disaster area,” and I think that was an accurate description",
      price: "540",
    },
    {
      id: "4",
      imgUrl:
        "https://res.cloudinary.com/dhiizuiwh/image/upload/v1686763337/cld-sample-5.jpg",
      title: "air",
      desc: "a nike that tells you how something or someone looks, sounds, etc. : words that describe something or someone. [count] Reporters called the scene “a disaster area,” and I think that was an accurate description",
      price: "9400",
    },
  ];

  let popular = [
    {
      id: "1",
      imgUrl:
        "https://res.cloudinary.com/dhiizuiwh/image/upload/v1686763337/cld-sample-5.jpg",
      title: "nike shoes",
      desc: "a statement that tells you how something or someone looks, sounds, etc. : words that describe something or someone. [count] Reporters called the scene “a disaster area,” and I think that was an accurate description",
      price: "500",
    },
    {
      id: "2",
      imgUrl:
        "https://res.cloudinary.com/dhiizuiwh/image/upload/v1686763337/cld-sample-5.jpg",
      title: "puma",
      desc: "a statement that tells you how something or someone looks, sounds, etc. : words that describe something or someone. [count] Reporters called the scene “a disaster area,” and I think that was an accurate description",
      price: "1200",
    },
    {
      id: "3",
      imgUrl:
        "https://res.cloudinary.com/dhiizuiwh/image/upload/v1686763337/cld-sample-5.jpg",
      title: "nike",
      desc: "a statement that tells you how something or someone looks, sounds, etc. : words that describe something or someone. [count] Reporters called the scene “a disaster area,” and I think that was an accurate description",
      price: "540",
    },
    {
      id: "4",
      imgUrl:
        "https://res.cloudinary.com/dhiizuiwh/image/upload/v1686763337/cld-sample-5.jpg",
      title: "air",
      desc: "a nike that tells you how something or someone looks, sounds, etc. : words that describe something or someone. [count] Reporters called the scene “a disaster area,” and I think that was an accurate description",
      price: "9400",
    },
  ];

  const upcoming = [
    {
      id: "1",
      imgUrl:
        "https://res.cloudinary.com/dhiizuiwh/image/upload/v1686763337/cld-sample-5.jpg",
      title: "nike shoes",
      desc: "a statement that tells you how something or someone looks, sounds, etc. : words that describe something or someone. [count] Reporters called the scene “a disaster area,” and I think that was an accurate description",
      price: "500",
    },
    {
      id: "2",
      imgUrl:
        "https://res.cloudinary.com/dhiizuiwh/image/upload/v1686763337/cld-sample-5.jpg",
      title: "puma",
      desc: "a statement that tells you how something or someone looks, sounds, etc. : words that describe something or someone. [count] Reporters called the scene “a disaster area,” and I think that was an accurate description",
      price: "1200",
    },
    {
      id: "3",
      imgUrl:
        "https://res.cloudinary.com/dhiizuiwh/image/upload/v1686763337/cld-sample-5.jpg",
      title: "nike",
      desc: "a statement that tells you how something or someone looks, sounds, etc. : words that describe something or someone. [count] Reporters called the scene “a disaster area,” and I think that was an accurate description",
      price: "540",
    },
    {
      id: "4",
      imgUrl:
        "https://res.cloudinary.com/dhiizuiwh/image/upload/v1686763337/cld-sample-5.jpg",
      title: "air",
      desc: "a nike that tells you how something or someone looks, sounds, etc. : words that describe something or someone. [count] Reporters called the scene “a disaster area,” and I think that was an accurate description",
      price: "9400",
    },
  ];

  const [products, setProducts] = useState(productsList);
  const [popularProducts, setPopularProducts] = useState(popular);
  const [umcomingProducts, setUpcomingProducts] = useState(upcoming);

  function lowToHigh() {
    const sortedProducts = [...products].sort(
      (s1, s2) => s1.price - s2.price
    );
    setProducts(sortedProducts);
  }

  function highToLow() {
    const sortedProducts = [...products].sort(
      (s1, s2) => s2.price - s1.price
    );
    setProducts(sortedProducts);
  }

  const [allKeywords,setAllKeywords] = useState([]);

  function checkSearch() {
    let newArr = keywords.trim().split(" ");
    // setAllKeywords(newArr);
    // console.log(allKeywords);
    var set = new Set();
    newArr.forEach(element => {
      let pdList = productsList.filter(function (el) {
        if(el.title.toLowerCase().includes(element) || el.desc.toLowerCase().includes(element)){
          return el;
        }
      });
      let pdSet = new Set(pdList);
      set = new Set([...set,...pdSet]);
    });
    setProducts([...set]);
  }

  return (
    <AppContext.Provider value={{ setUpcomingProducts, keywords, setKeyWords, products, lowToHigh, highToLow, checkSearch, popularProducts, umcomingProducts, setPopularProducts }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };