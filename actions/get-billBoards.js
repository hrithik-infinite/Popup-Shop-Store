const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillBoards = async (id) => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getBillBoards;
