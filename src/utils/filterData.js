const filterData = ({ data, searchCols, searchValue }) => {
  return data.filter((item) =>
    searchCols.some((key) =>
      item[key]?.toString().toLowerCase().includes(searchValue),
    ),
  );
};

export default filterData;
