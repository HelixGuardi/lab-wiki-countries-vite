function HomePage() {
  return (
    <div className="container" style={{maxHeight: "90vh", overflow: "scroll"}}>
      <h1 style={{fontSize: "24px"}}>WikiCountries: Your Guide to the World</h1>
      <div className="list-group">
          <a href="/" className="list-group-item list-group-item-action"
          >country listed</a>
      </div>
    </div>
  );
}

export default HomePage;
