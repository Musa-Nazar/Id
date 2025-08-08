import MainWelcomePage from "@/components/WelcomePage/MainWelcomePage";
import PageNavbar from "@/components/WelcomePage/PageNavbar";

const Welcome: React.FC = () => {
  const xml: React.ReactElement = (
    <>
      <PageNavbar />
      <MainWelcomePage />
    </>
  );
  return xml;
};

export default Welcome;
