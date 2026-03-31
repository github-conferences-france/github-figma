import { Footer, Header } from "compositions";
import { AllProviders } from "data";
import { Demo } from "./examples/Demo";
import { FAQs } from "./examples/FAQs";
import { PanelSections } from "./examples/PanelSections";
import { PricingGrid } from "./examples/PricingGrid";
import { ProductDetails } from "./examples/ProductDetails";
import { ProductGrid } from "./examples/ProductGrid";
import { Testimonials } from "./examples/Testimonials";
import { WelcomeHero } from "./examples/WelcomeHero";

function App() {
  return (
    <AllProviders>
      <Header />
      <Demo />
      <WelcomeHero />
      <PanelSections />
      <PricingGrid />
      <FAQs />
      <Testimonials />
      <ProductDetails />
      <ProductGrid />
      <Footer />
    </AllProviders>
  );
}

export default App;
