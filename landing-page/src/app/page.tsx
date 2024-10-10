import { Header } from './components/Header';
import { SectionHero } from './components/SectionHero';
import { SectionCompanies } from './components/SectionCompanies';
import { SectionFeatures } from './components/SectionFeature';
export default function Home() {
  return (
    <>
      <Header />
      <SectionHero />
      <SectionCompanies />
      <SectionFeatures />
    </>
  );
}