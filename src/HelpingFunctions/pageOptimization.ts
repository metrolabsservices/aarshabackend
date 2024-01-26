export const paginationOptimization = (data: any) => {
  // console.log(
  //   `+++++++++++++++++\n${data.pageSize} ${data.current}\n+++++++++++++++++++++++`
  // );
  return {
    take: parseInt(data.pageSize) || 10,
    skip: parseInt(data.current)
      ? (parseInt(data.current) - 1) * (parseInt(data.pageSize) || 0)
      : 0,
  };
};
