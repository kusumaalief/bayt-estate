export const SearchHelperData = [
  {
    items: [
      { name: "Buy", value: "for-sale" },
      { name: "Rent", value: "for-rent" },
    ],
    placeholder: "Purpose",
    queryName: "purpose",
  },
  {
    items: [
      { name: "Daily", value: "daily" },
      { name: "Weekly", value: "weekly" },
      { name: "Monthly", value: "monthly" },
      { name: "Yearly", value: "yearly" },
    ],
    placeholder: "Rent Frequency",
    queryName: "rentFrequency",
  },
  {
    items: [
      { name: "10.000", value: "10000" },
      { name: "20.000", value: "20000" },
      { name: "30.000", value: "30000" },
      { name: "40.000", value: "40000" },
      { name: "50.000", value: "50000" },
      { name: "60.000", value: "60000" },
      { name: "85.000", value: "85000" },
    ],
    placeholder: "Min Price(AED)",
    queryName: "minPrice",
  },
  {
    items: [
      { name: "50.000", value: "50000" },
      { name: "60.000", value: "60000" },
      { name: "85.000", value: "85000" },
      { name: "110.000", value: "110000" },
      { name: "130.000", value: "130000" },
      { name: "160.000", value: "160000" },
      { name: "185.000", value: "185000" },
      { name: "200.000", value: "200000" },
      { name: "300.000", value: "300000" },
      { name: "400.000", value: "400000" },
      { name: "500.000", value: "500000" },
      { name: "600.000", value: "600000" },
    ],
    placeholder: "Max Price(AED)",
    queryName: "maxPrice",
  },
  {
    items: [
      { name: "Lowet Price", value: "price-asc" },
      { name: "Highest Price", value: "price-desc" },
      { name: "Newest", value: "data-asc" },
      { name: "Oldest", value: "data-dec" },
      { name: "Verified", value: "verified-score" },
      { name: "City Level Score", value: "city-level-score" },
    ],
    placeholder: "Sort",
    queryName: "sort",
  },
  {
    items: [
      { name: "1000", value: "1000" },
      { name: "2000", value: "2000" },
      { name: "3000", value: "3000" },
      { name: "4000", value: "4000" },
      { name: "5000", value: "5000" },
      { name: "10000", value: "10000" },
      { name: "20000", value: "20000" },
    ],
    placeholder: "Max Area(sqft)",
    queryName: "areaMax",
  },
  {
    items: [
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
      { name: "4", value: "4" },
      { name: "5", value: "5" },
      { name: "6", value: "6" },
      { name: "7", value: "7" },
      { name: "8", value: "8" },
      { name: "9", value: "9" },
      { name: "10", value: "10" },
    ],
    placeholder: "Rooms",
    queryName: "roomMin",
  },
  {
    items: [
      { name: "2", value: "2" },
      { name: "3", value: "3" },
      { name: "4", value: "4" },
      { name: "5", value: "5" },
      { name: "6", value: "6" },
      { name: "7", value: "7" },
      { name: "8", value: "8" },
      { name: "9", value: "9" },
      { name: "10", value: "10" },
    ],
    placeholder: "Rooms",
    queryName: "roomMin",
  },
  {
    items: [
      { name: "Furnished", value: "furnished" },
      { name: "Unfurnished", value: "unfurnished" },
    ],
    placeholder: "Furnish Type",
    queryName: "furnishingStatus",
  },
  {
    items: [
      { name: "Apartment", value: "4" },
      { name: "Villa", value: "3" },
      { name: "Townhouse", value: "16" },
      { name: "Penthouse", value: "18" },
      { name: "Motel Apartments", value: "21" },
      { name: "Villa Compound", value: "19" },
      { name: "Residential Plot", value: "14" },
      { name: "Residential Floor", value: "12" },
      { name: "Residential Building", value: "17" },
    ],
    placeholder: "Property Type",
    queryName: "categoryExternalID",
  },
];

export const getSearchHelper = () => {
  return SearchHelperData;
};
