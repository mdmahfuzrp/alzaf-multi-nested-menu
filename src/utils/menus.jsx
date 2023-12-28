import {
  AutomobileIcon,
  ComputerLaptopIcon,
  ElectronicAccesoriesIcon,
  ElectronicsDeviceIcon,
  GroceriesIcon,
  HealthBeautyIcon,
  HomeLifeStyleIcon,
  MenBoyFaIcon,
  MotherBabyIcon,
  PetSupplies,
  SportsOutdoorsIcon,
  TvHomeIcon,
  WatchesIcon,
  WomenGirlsFaIcon,
} from "../assets/icons";

export const menus = [
  {
    icon: <WomenGirlsFaIcon />,
    name: "Women's & Girl's Fashion",
    dropdown: [],
  },
  {
    icon: <HealthBeautyIcon />,
    name: "Health & Beauty",
    dropdown: [],
  },
  {
    icon: <WatchesIcon />,
    name: "Watches, Bags, Jewellery",
    dropdown: [
      { name: "kids bags", dropdown: [] },
      { name: "laptop bags & cases", dropdown: [] },
      { name: "language", dropdown: [] },
      { name: "travel bags", dropdown: [] },
      { name: "men's bag", dropdown: [] },
      {
        name: "women's bag",
        dropdown: [
          {
            name: "backpacks",
            dropdown: [],
          },
          {
            name: "cross body & shulder bags",
            dropdown: [],
          },
          {
            name: "bag charms & accessories",
            dropdown: [],
          },
          {
            name: "clutches",
            dropdown: [],
          },
          {
            name: "top-Handle bags",
            dropdown: [],
          },
          {
            name: "tote bags",
            dropdown: [],
          },
          {
            name: "wallets",
            dropdown: [],
          },
        ],
      },
      { name: "Men's watches", dropdown: [] },
      { name: "women's watches", dropdown: [] },
      { name: "kids watches", dropdown: [] },
      { name: "women's jewellery", dropdown: [] },
      { name: "men's jewellery", dropdown: [] },
      { name: "sunglasses", dropdown: [] },
    ],
  },
  {
    icon: <MenBoyFaIcon />,
    name: "men's & boy's fashion",
    dropdown: [],
  },
  {
    icon: <MotherBabyIcon />,
    name: "mother & baby",
    dropdown: [],
  },
  {
    icon: <ElectronicsDeviceIcon />,
    name: "electronics devices",
    dropdown: [],
  },
  {
    icon: <TvHomeIcon />,
    name: "tv & home appliances",
    dropdown: [],
  },
  {
    icon: <ElectronicAccesoriesIcon />,
    name: "electronics accessories",
    dropdown: [],
  },
  {
    icon: <GroceriesIcon />,
    name: "groceries",
    dropdown: [],
  },
  {
    icon: <HomeLifeStyleIcon />,
    name: "home & lifestyle",
    dropdown: [],
  },
  {
    icon: <SportsOutdoorsIcon />,
    name: "sports & outdoors",
    dropdown: [],
  },
  {
    icon: <AutomobileIcon />,
    name: "automobile",
    dropdown: [],
  },
  {
    icon: <ComputerLaptopIcon />,
    name: "computer and laptop",
    dropdown: [],
  },
  {
    icon: <PetSupplies />,
    name: "pet supplies",
    dropdown: [],
  },
];
