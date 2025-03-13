class NavBar extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <link rel="stylesheet" href="styles/navbar.css"/> 
        <div class="header">
            <nav class="title">
                <a href="index.html">benwa.dev</a>
            </nav>
            <div class="vertical-line"></div>
            <nav class="nav">
                <a href="about.html">About</a>
                <a href="projects.html">Projects</a>
            </nav>
        </div>`
    }
}

customElements.define('nav-bar', NavBar);