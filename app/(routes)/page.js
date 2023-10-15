import getBillBoards from "@/actions/get-billBoards";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillBoards("4f4046c2-25c1-4ca5-a52d-bcc66506e0a7");
  const products = await getProducts({isFeatured : true});
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" items={products} />
      </div>
    </Container>
  );
};
export default HomePage;
