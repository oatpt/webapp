const dataFood = [
  {
    id:1,
    type: "อาหารคาว",
    name: "สันคอหมู",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim, dui eget feugiat consectetur, massa augue pharetra erat, et molestie orci felis non ante. Phasellus aliquam commodo ipsum, elementum feugiat purus varius vitae. In hac habitasse platea dictumst. Quisque euismod fringilla rutrum. Mauris consequat a velit eget molestie. Fusce viverra finibus semper. Nunc consectetur sapien at purus placerat, sed suscipit arcu pharetra.",
    pic: "https://img-global.cpcdn.com/recipes/6c8238b9395c4210/680x482cq70/%E0%B8%A3%E0%B8%9B-%E0%B8%AB%E0%B8%A5%E0%B8%81-%E0%B8%82%E0%B8%AD%E0%B8%87-%E0%B8%AA%E0%B8%95%E0%B8%A3-%E0%B9%80%E0%B8%AA%E0%B8%95%E0%B8%81%E0%B8%AB%E0%B8%A1-%E0%B8%9E%E0%B8%A3%E0%B8%81%E0%B9%84%E0%B8%97%E0%B8%A2%E0%B8%94%E0%B8%B3.jpg",
  },
  {
    id:2,
    type: "อาหารหวาน",
    name: "บิงซู",
    description:
      "Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus a sagittis ipsum. Pellentesque blandit quis turpis nec semper. Vestibulum non mauris sagittis, laoreet ipsum sit amet, tempor massa. Suspendisse bibendum dictum quam id luctus. Sed tempus metus turpis, quis hendrerit nisl feugiat sed. Donec venenatis nisl sed lectus egestas fermentum. Nam condimentum justo id magna volutpat, in convallis nibh bibendum. Aliquam accumsan et quam quis placerat.",
    pic: "https://www.matichon.co.th/wp-content/uploads/2016/10/mar02271059p1.jpg",
  },
  {
    id:3,
    type: "อาหารหวาน",
    name: "พุดดิ้ง",
    description:
      "Nullam eu nulla ligula. In vel tincidunt nisi. Aenean eget metus vel risus pretium convallis vel sed augue. Pellentesque ut arcu ut ipsum pulvinar interdum. Integer eget lacus at orci porta egestas. Quisque pellentesque placerat ligula id facilisis. Nullam aliquam quis diam at eleifend. Aenean quis arcu eros.",
    pic: "https://s3.theasianparent.com/cdn-cgi/image/height=250/tap-assets-prod/wp-content/uploads/sites/25/2022/05/pudding-desserts-lead.jpg",
  },
  {
    id:4,
    type: "อาหารหวาน",
    name: "แพนเค้ก",
    description:
      "Nulla ac metus leo. Curabitur orci lectus, pellentesque quis arcu id, ornare posuere justo. Integer tincidunt sapien eget tellus pulvinar, nec pharetra justo dictum. Proin fermentum molestie massa, at feugiat dolor tincidunt in. Integer vulputate nec quam a lobortis. Curabitur semper faucibus sapien, ut pharetra ante laoreet in. Maecenas convallis feugiat fermentum. Etiam in feugiat lectus, vitae molestie elit. Mauris eget consectetur odio. Quisque posuere velit eu enim varius imperdiet. Nunc finibus massa in felis faucibus dapibus. Ut ornare tempus erat, eget volutpat ante malesuada a. Sed elementum dapibus eros. Suspendisse ac volutpat ex. Quisque non libero est. Donec feugiat velit eget leo elementum scelerisque.",
    pic: "https://i.pinimg.com/564x/11/2f/77/112f77292e42aff4db60c60152a982ea.jpg",
  },
  {
    id:5,
    type: "อาหารคาว",
    name: "ซี่โครงหมูอบ",
    description:
      "Nulla ac metus leo. Curabitur orci lectus, pellentesque quis arcu id, ornare posuere justo. Integer tincidunt sapien eget tellus pulvinar, nec pharetra justo dictum. Proin fermentum molestie massa, at feugiat dolor tincidunt in. Integer vulputate nec quam a lobortis. Curabitur semper faucibus sapien, ut pharetra ante laoreet in. Maecenas convallis feugiat fermentum. Etiam in feugiat lectus, vitae molestie elit. Mauris eget consectetur odio. Quisque posuere velit eu enim varius imperdiet. Nunc finibus massa in felis faucibus dapibus. Ut ornare tempus erat, eget volutpat ante malesuada a. Sed elementum dapibus eros. Suspendisse ac volutpat ex. Quisque non libero est. Donec feugiat velit eget leo elementum scelerisque.",
    pic: "https://s3.theasianparent.com/tap-assets-prod/wp-content/uploads/sites/25/2022/03/pork-ribs-recipe.jpg",
  },
  {//.......
    id:6,
    type: "อาหารคาว",
    name: "ซาชิมิแซลมอน",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est dolor, consequat sed interdum vitae, porta non leo. Morbi ullamcorper condimentum lorem fringilla sollicitudin. Donec vitae diam id arcu egestas pharetra. Suspendisse varius laoreet magna. Vestibulum ut aliquam lacus. Quisque accumsan libero vel risus molestie, quis auctor velit malesuada. Mauris semper magna sed lorem viverra malesuada. Integer efficitur non purus in varius. Vestibulum maximus sem nulla, eu ultricies orci viverra sit amet. Praesent cursus lacinia dapibus. Donec dictum suscipit eros ac consequat.",
    pic: "https://www.wakanafooddelivery.com/images/product/salmon-sashimi-size-s-japanese-food-500.jpg",
  },
  {
    id:7,
    type: "อาหารคาว",
    name: "โฮตาเตะ",
    description:
      "Fusce luctus velit at justo faucibus, in auctor justo semper. In hac habitasse platea dictumst. Nulla accumsan, lacus sed iaculis rutrum, mi nulla pellentesque lorem, vel ultrices nisl urna in tortor. Vestibulum imperdiet, leo quis pharetra dignissim, turpis sem viverra mi, quis lacinia nisi urna ac erat. Nam ultrices elit sit amet mauris varius, id hendrerit lacus iaculis. Nullam euismod lobortis nisl. Fusce nec dui eleifend, rutrum est a, auctor nisi. Mauris lobortis ipsum mi, sit amet pretium eros sagittis nec. Nullam vitae nunc pharetra, fermentum augue eget, porta ante. Integer vestibulum arcu egestas eros lacinia ultricies. Morbi tincidunt augue neque, sed euismod arcu pulvinar sit amet. Vestibulum aliquam ex eget eros tempus egestas. Vivamus eget lacinia enim, nec tempor metus.",
    pic: "https://i.ytimg.com/vi/wrKgkEFM-9s/maxresdefault.jpg",
  },
  {
    id:8,
    type: "อาหารคาว",
    name: "ทะเลถัง",
    description:
      "Nullam varius aliquam malesuada. Mauris semper libero id tortor tincidunt, in viverra felis hendrerit. Morbi bibendum, erat et commodo commodo, elit augue rutrum quam, in facilisis augue mauris a lacus. Maecenas placerat, justo sed sollicitudin viverra, risus metus ultricies ante, ut laoreet sapien urna et ex. Fusce posuere sollicitudin nunc egestas scelerisque. Praesent et viverra tortor. Nunc mattis vehicula felis eget euismod. Nunc euismod feugiat tempor. Vestibulum ac pretium arcu, euismod pretium lorem. Nam finibus massa pulvinar nisl interdum, in semper est sodales. Nam convallis mi sit amet leo vehicula, nec luctus leo porta. In ac sapien tempus, iaculis nisl nec, rhoncus tellus. Nulla euismod tincidunt tellus, in facilisis magna finibus at. Nulla facilisi.",
    pic: "https://images.deliveryhero.io/image/fd-th/LH/pg1c-hero.jpg",
  },
  {
    id:9,
    type: "อาหารหวาน",
    name: "ดังโงะ",
    description:
      "Pellentesque ultricies eleifend metus dignissim tempor. Vestibulum facilisis a nibh vel hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu felis a ipsum posuere mollis et sit amet augue. Praesent pretium mauris semper magna posuere interdum. Nunc consectetur dapibus mattis.",
    pic: "https://i.pinimg.com/564x/97/3d/67/973d67b55565583bb4fb05cde3d4c5f1.jpg",
  },
  {
    id:10,
    type: "อาหารหวาน",
    name: "โมจิ",
    description:
      "Duis cursus finibus commodo. Etiam ac fermentum augue. Cras et nunc vitae enim lobortis dignissim id eu risus. Sed vestibulum risus in facilisis consectetur. Duis malesuada lectus quam, ac interdum dui mattis nec. Praesent arcu elit, lacinia quis tortor nec, varius ullamcorper augue. Proin laoreet turpis in quam gravida congue. Suspendisse eros ante, mattis ut tristique sit amet, sagittis eu lorem. Phasellus interdum at eros ac semper. Etiam mattis vehicula massa non ultrices. Praesent et rhoncus nibh.",
    pic: "https://i.pinimg.com/564x/b8/cb/95/b8cb952624a5a4b61783529c6fc1886a.jpg",
  },
];

export default dataFood;
