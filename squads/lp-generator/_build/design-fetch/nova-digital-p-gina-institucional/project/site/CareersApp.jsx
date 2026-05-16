/* global React, ReactDOM, Nav, CareersHero, CareersList, CareersCulture, CareersCTA, Footer */
function CareersApp() {
  return (
    <>
      <Nav />
      <main>
        <CareersHero />
        <CareersList />
        <CareersCulture />
        <CareersCTA />
      </main>
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CareersApp />);
