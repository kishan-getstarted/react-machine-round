const Chapter1 = () => {
    return (
        <div style={{
            display: "flex",
            width: "20vw",
            height: "100vh",
        }}>
           <aside style={{
                display: "flex",
                justifyContent: "center",
                width: "100vw",
              }}>
            <div style={{
              display: "flex",
              flexDirection: "row",
              height: "     ",
            }}>
              <a href="#" class="logo">Brand</a>
              <button class="hamburger">
                  <span></span>
                  <span></span>
                  <span></span>
              </button>
            </div>
            <ul class="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
           </aside>
        </div>
    );
};

export default Chapter1;