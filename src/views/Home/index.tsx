import Header from "../../components/Header";
import Card from "../../components/Card";
import Button from "../../components/Button";


const Home = () => {
  return (
    <div>
      <Header></Header>
      <Card cardTitle="Wallet Balance" balance="$1.000" />
      <Button></Button>
    </div>
  );
};

export default Home;
