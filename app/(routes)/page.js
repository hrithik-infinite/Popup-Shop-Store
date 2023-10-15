import getBillBoards from "@/actions/get-billBoards";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillBoards("4f4046c2-25c1-4ca5-a52d-bcc66506e0a7");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
};
export default HomePage;
