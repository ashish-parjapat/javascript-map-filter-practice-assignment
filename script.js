let arr = [
    {
      name: "noodles",
      category: "snacks",
      calorie: 350,
      isJunk: true,
      url: "https://www.sagargairefastfoodcorner.com/images/mob-slider7.jpg",
    },
    {
      name: "burger",
      category: "snacks",
      calorie: 400,
      isJunk: true,
      url: "https://c.ndtvimg.com/2022-06/gp4k2jro_burgers_625x300_20_June_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350?im=FaceCrop,algorithm=dnn,width=1200,height=886",
    },
    {
      name: "momos",
      category: "snacks",
      calorie: 200,
      isJunk: true,
      url: "https://www.thespruceeats.com/thmb/UnVh_-znw7ikMUciZIx5sNqBtTU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/steamed-momos-wontons-1957616-hero-01-1c59e22bad0347daa8f0dfe12894bc3c.jpg",
    },
    {
      name: "maggi",
      category: "snacks",
      calorie: 250,
      isJunk: true,
      url: "https://www.sagargairefastfoodcorner.com/images/mob-slider7.jpg",
    },
    {
      name: "bread-omlette",
      category: "breakfast",
      calorie: 300,
      isJunk: false,
      url: "https://www.sagargairefastfoodcorner.com/images/mob-slider7.jpg",
    },
    {
      name: "oatmeal",
      category: "breakfast",
      calorie: 150,
      isJunk: false,
      url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/instant-oatmeal-with-cranberries-and-pecans-1641506842.jpg?crop=0.433xw:0.975xh;0.234xw,0.00617xh&resize=980:*",
    },
    {
      name: "french-toast",
      category: "breakfast",
      calorie: 350,
      isJunk: false,
      url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/how-to-make-french-toast-1589827448.jpg?crop=0.522xw:0.523xh;0.179xw,0.329xh&resize=980:*",
    },
    {
      name: "pancakes",
      category: "breakfast",
      calorie: 500,
      isJunk: true,
      url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/blender-pancakes-1641506592.jpg?crop=0.507xw:0.508xh;0.253xw,0.258xh&resize=980:*",
    },


    {
        name:'Aloo Prata',
        category:'breakfast',
        calorie:800,
        isJunk:false,
        url:"https://www.vegrecipesofindia.com/wp-content/uploads/2019/07/breakfast-recipes-1a.jpg"
    }
  ];
console.log(arr)
  function filter(choice){
    if(choice==='calorie'){
   
    arr.filter((item) => {
        if (item.calorie < 300) {
          document.querySelector(
            ".box"
          ).innerHTML += `<div class="food-item-1 "> <div class="food-img"><img src="${item.url}" alt="" /></div><div class="food-description"><p>Name: ${item.name}</p><p>Category:${item.category}</p><p>Calorie:${item.calorie}</p><p>Junk Food : ${item.isJunk}</p> </div> </div>`;
        }
      });
    }
    
  }

  function breakfast(){
  arr.filter((item)=>{
    if(item.category==='breakfast'){
        document.querySelector(".box").innerHTML+=`<div class="food-item-1 "> <div class="food-img"><img src="${item.url}" alt="" /></div><div class="food-description"><p>Name: ${item.name}</p><p>Category:${item.category}</p><p>Calorie:${item.calorie}</p><p>Junk Food : ${item.isJunk}</p> </div> </div>`;
    }
  });
  }

  function all(){
    arr.map((item)=>{
        document.querySelector(".box").innerHTML+=`<div class="food-item-1 "> <div class="food-img"><img src="${item.url}" alt="" /></div><div class="food-description"><p>Name: ${item.name}</p><p>Category:${item.category}</p><p>Calorie:${item.calorie}</p><p>Junk Food : ${item.isJunk}</p> </div> </div>`;
    });
  }

  function isJunkFood(){
    arr.filter((item)=>{
        if(item.isJunk==true){
            document.querySelector(".box").innerHTML+=`<div class="food-item-1 "> <div class="food-img"><img src="${item.url}" alt="" /></div><div class="food-description"><p>Name: ${item.name}</p><p>Category:${item.category}</p><p>Calorie:${item.calorie}</p><p>Junk Food : ${item.isJunk}</p> </div> </div>`;

        }
    });
  }



  document.querySelector(".btn-cal").addEventListener("click", () => {
    filter("calorie");
  });