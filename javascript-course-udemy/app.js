const isIphoneOrIpad = () => {
  const userAgent = navigator.userAgent;
  return (
    userAgent.includes("iPhone") ||
    userAgent.includes("iPad") ||
    userAgent.includes("iPod")
  );
};

if (isIphoneOrIpad()) {
  // Add an onload event listener to the iframe.
  const iframe = document.querySelector(".hero-elite-index iframe");
  iframe.addEventListener("load", function() {
    setTimeout(() => {
      if (window.innerWidth < 550) {
        // Get the iframe element.
        // Set the iframe height to 550px.
        iframe.classList.add("resize-me-iframe");
        console.log("adjusted iframe size");
      }
    }, "1000");
    // Check if the window is smaller than 500 pixels.
  });
} else {
  console.log("Not an ipad or iphone so didnt run");
}
